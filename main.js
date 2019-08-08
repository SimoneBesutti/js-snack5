//Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

//Dichiaro le variabili
var arrayVuoto, i, inputNumero, secondoArray;

//Array vuoto
arrayVuoto = [];
secondoArray = [];

//Ciclo for per chiedere all'utente il numero (per 6 volte)
for (i = 0; i < 6; i++){
    inputNumero = prompt("Inserisci un numero");
    if(inputNumero % 2 != 0){
        arrayVuoto.push(inputNumero);
    } else {
        secondoArray.push(inputNumero);
    }
} 
console.log(inputNumero);
console.log(arrayVuoto);
console.log(secondoArray);