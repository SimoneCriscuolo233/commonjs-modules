//Importa la tua funzione da names.js
//Importa la tua funzione da hobbies.js
//Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
const names = require('./modules/name.js');
const hobbies = require('./modules/hobbies.js');

const people = () => {
  return {
    fullname: names('Simone', 'Criscuolo'),
    hobbies: hobbies('Gaming', 'MMA', 'Anime')
  }
}
console.log(people())