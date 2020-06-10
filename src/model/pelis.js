class Pelicula{
    //Variable estatica
    static cont=0;
    constructor(nombre, director, año, calificacion){
        this.id=++Pelicula.cont;
        this.nombre=nombre;
        this.director=director;
        this.año=año;
        this.calificacion=calificacion;
    }
   /* showTextInfo(){
        return "director: " + this.director + "año: "  + this.año + "calificacion: " + this.calificacion
    }*/
    TodaInfo(){//json
        return {
            id: this.id, 
            nombre: this.nombre, 
            director: this.director,
            año: this.año, 
            calificacion: this.calificacion
        };
    }
}