const muestra = document.getElementById("btnMostrar");
muestra.addEventListener('click', () =>{
    console.log("click")
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/peliculas/", true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let details = document.getElementById("details");
            details.innerHTML += this.responseHTML;
        }
    }
});

const agrega = document.getElementById("btnAgregar");
agrega.addEventListener('click', () => {

    let nombre = document.getElementById("txtNombre").value;
    let director = document.getElementById("txtDirector").value;
    let año = document.getElementById("txtAño").value;
    let calificacion = document.getElementById("txtCalificacion").value;

    const http = new XMLHttpRequest();
    http.open("POST", "http://localhost:3000/peliculas/new", true)
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let details = document.getElementById("details");
            details.innerHTML += "RECIBIDO";
        }
    }
});
