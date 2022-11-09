require(`dotenv`).config();

const express = require('express');

const app = express();

app.set(`view engine`, `ejs`);
app.set(`views`, `./public/`);

const port = process.env.PORT;

//rotas
app.get(`/login`,(req, res)=>{
    res.render(`login.ejs`);
})




app.listen (port, ()=>{
    console.info("Servidor online na porta "+port)
})