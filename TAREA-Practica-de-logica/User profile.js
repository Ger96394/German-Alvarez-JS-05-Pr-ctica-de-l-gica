const username = prompt("Ingresa tu nombre de usuario:");
const age = prompt("Ingresa tu edad:");
const movies = prompt("Ingresa algunas de tus películas favoritas").split(',').map(movie => movie.trim());
console.log(`Usuario: ${username}`);
console.log(`Edad: ${age}`);
console.log("Películas favoritas:");
movies.forEach(movie => console.log(`La película "${movie}" es una de mis favoritas.`));
