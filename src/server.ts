import 'dotenv/config'
import express from 'express';
import { AppDataSource } from './database/db';
import { getAllServices } from './controllers/services.controller';

const app = express();
const port = process.env.PORTCONEXION || 3080;

///// MIDELWARE

app.use(express.json());


///// SERVICES

app.get('/api/services', getAllServices)


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
