let peliculas = [];

function agregarPelicula() {
  let pelicula = {
    titulo: prompt("Título de la película: "),
    puntaje: prompt("Puntaje del 1 al 10: "),
    resena: prompt("Escribí tu reseña: "),
  };
  peliculas.push(pelicula);
}

do {
  agregarPelicula();
} while (confirm("¿Querés ingresar otra película?"));

let misPeliculas = "Películas Ingresadas:\n\n";
for (let i = 0; i < peliculas.length; i++) {
  misPeliculas += `#${i + 1} - ${peliculas[i].titulo}\n`;
  misPeliculas += `   Puntaje: ${peliculas[i].puntaje}\n`;
  misPeliculas += `   Reseña: ${peliculas[i].resena}\n\n`;
}

alert(misPeliculas);
console.log(peliculas);
