import 'dotenv/config'
import express from 'express';
import { AppDataSource } from './database/db';
import { createNewServices, deleteServices, getAllServices, updateServices } from './controllers/services.controller';
import { createRoles, deleteRoles, getAllRoles } from './controllers/roles.controller';
import { createUser, loginUser } from './controllers/authentication.controller';
import { getAllUsers, getProfile } from './controllers/users.controller';
import { isSuperAdmin } from './middlewares/isSuperAdmin';
import { auth } from './middlewares/auth';
import { isAdminOrSuper } from './middlewares/isAdminOrSuper';

const app = express();
const port = process.env.PORTCONEXION || 3080;

///// MIDELWARE

app.use(express.json());


///// SERVICES

app.get('/api/services', getAllServices)
app.post('/api/services', auth, isAdminOrSuper, createNewServices)
app.put('/api/services/:id', auth, isAdminOrSuper, updateServices)
app.delete('/api/services/:id', auth, isAdminOrSuper, deleteServices)

///// ROLES

app.get('/api/roles', auth, isSuperAdmin, getAllRoles)
app.post('/api/roles', auth, isSuperAdmin, createRoles)
app.delete('/api/roles/:id', auth, isSuperAdmin, deleteRoles)

//// AUTENTICACIÓN

app.post('/api/auth/register', createUser)
app.post('/api/auth/login', loginUser)


//// USERS 

app.get('/api/users', auth, isSuperAdmin, getAllUsers)
app.get('/api/users/profile', auth, getProfile)


AppDataSource.initialize()
    .then(() => {
        console.log('Database connected');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    })
    .catch(error => {
        console.log(error)
    })
