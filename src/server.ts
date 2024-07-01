import express from 'express';

const app = express();
const port = 4000;

///// MIDELWARE

app.use(express.json);


app.listen(port, () => {
    console.log(`server workin ok, por ${port}`)
})