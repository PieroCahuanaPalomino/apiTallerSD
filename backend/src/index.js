const express = require("express");
const fileUpload = require('express-fileupload');
require("dotenv").config();
const cors = require('cors');

// Importar la instancia de la conexión a la base de datos
require('./libs/database');

// Rutas
const userRoutes = require("./routes/user");
const ownerRoutes = require("./routes/owner");
const serviceRoutes = require("./routes/service");
const scoreRoutes =require("./routes/score");
const transactionRoutes = require("./routes/transaction");
const petRoutes = require("./routes/pet");

const app=express();
const port = process.env.PORT || 80;

// Middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'./upload'
}));

// Rutas
app.use('/api', userRoutes);
app.use('/api', ownerRoutes);
app.use('/api', serviceRoutes);
app.use('/api', scoreRoutes);
app.use('/api', transactionRoutes);
app.use('/api', petRoutes);

// Ruta de bienvenida
app.get("/",(req, res) => {
    res.send("Welcome to my API");
});

// Iniciar servidor
app.listen(port, ()=> console.log('server listening on port',port));
