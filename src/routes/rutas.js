const { Router } = require("express");
const ruta = Router();

const estruct = require("../public/estructura") 
     estruct = new Estructura();

ruta.get("/peliculas/", (req,res) =>{
    res.status(200).send(estruct.mostrar());
});

const peli = require("../public/pelis");
     peli = new Pelicula(nombre, director, año, calificacion);
      
ruta.post("/peliculas/new", (req,res)=>{
    console.log(req.body);
    const peli = new Pelicula(nombre, director, año, calificacion);
    peli = req.body;
    if(peli){
        estruct.agregar(peli);
    }
    else{
        res.send("EROR: llene correctamente los datos solicitados")
    }
    res.send("Agregado");
});
/*
ruta.put("pelicula/:id?", (req,res) => {

});

ruta.delete("pelicula/:id?", (req,res) => {

});*/
module.exports = ruta;