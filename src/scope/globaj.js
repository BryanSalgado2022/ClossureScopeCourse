// Variables
var a //declarar
var b = 'b' //Declarar y asignar
b = 'bb';// Reasignacion
var a = 'aa';// Redeclaracion

//Global Scope
var fruit = 'Apple'; //Global

function bestFruit(){
    console.log(fruit);
}

bestFruit();
//Cuando se asigna una varibale pero no se declara, automaticamente se declara como global
function countries(){
    country = 'Colombia'; //
    console.log(country);
}

countries();
console.log(country);
