const express=require("express");
const bodyparser=require("body-parser");
/*const path =require("path");
const fs =require("fs");*/

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
/*app.use(express.static("./public"));*/

//configuracion a espaciado json
app.set("json spaces", 2);

//Iniciando servidor
app.listen(3000, () => {
    console.log('Iniciando el servidor...'); 
});

//conexion a rutas
app.use(require("./2/rutas"))

