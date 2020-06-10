const estruct= new Estructura();

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener('click', () => {
    let nombre = document.getElementById("txtNombre").value;
    let director = document.getElementById("txtDirector").value;
    let año = parseInt(document.getElementById("txtAño").value);
    let calificacion = document.getElementById("txtCalificacion").value;

    let peli = new Pelicula(nombre, director, año, calificacion);

    let details = document.getElementById("details");
    details.innerHTML += `
    <div class="p-3 mb-2 bg-secondary text-white">
      <p class="card-title"><strong>ID ${peli.id} </strong> </p>
      <p class="card-text"><strong>Nombre: </strong>${peli.nombre}</p>
      <p class="card-text"><strong>Director:  </strong>${peli.director}</p>
      <p class="card-text"><strong>Año:  </strong>${peli.año}</p>
      <p class="card-text"><strong>Calificacion:  </strong>${peli.calificacion}</p>
      <p class="card-text"><strong>Algo:  </strong>${peli.showTextInfo()}</p>
    </div>
  `;
  estruct.agregar(peli);
  console.log(estruct.mostrar());
  console.log(peli.showTextInfo());
});

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar=addEventListener('click', () =>{
  let dato=getElementById("txtNombre");
  let nodo= estruct.buscar(dato);
  let details=document.getElementById("details");
  if(nodo===null){
    details.innerHTML += "<div><p> Buscar </p></p> No se encontró " + dato + "</p></div>";
  }
  else{
    details.innerHTML += "<div><p> Buscar Exitoso </p><p>" + nodo.showTextInfo() + "</p><div>";
  }
});
  