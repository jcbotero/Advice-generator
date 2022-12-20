
/* asi saco data de una api (application programming interface), solo sirve para api externas no para json files locales*/
const apiAdvice = 'https://api.adviceslip.com/advice'; /* pongo la url de la appi en una variable*/

async function getData() { /* una async function por que toma tiempo sacar la data y es un proceso temporal de varios pasos*/
const response = await fetch(apiAdvice); /* el await hace parte de la async function y me dice que se ejecute una vez se complete esta parte, el fetch() da la interfaz para manipular data de la api*/
const data = await response.json(); /* le pongo el json()*/
const {slip: { id, advice}} = data /* saco el object de la api que el que tiene la info, lo saco poniendo en el browser la url de la appi para mirar como esta codeado*/
document.getElementById("number").textContent = data.slip.id;
let final = (` "${data.slip.advice}" `); /* concateno la propiedad del object con las comillas*/
document.getElementById("advice").textContent = final; /* aqui inserto en la tag la propiedad del object*/
}

getData(); /* le hago el call a la function o la disparo en un boton como haré aqui*/

document.getElementById("generate").addEventListener('click' , function() {
     console.log(getData());
})