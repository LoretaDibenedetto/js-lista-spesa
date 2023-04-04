//lista della spesa con ciclo while
/*
const listOutput = document.getElementById('listOutput');

//imposto una array vuoto
let producList = [];


//creo un ciclo while con una condizione sempre vera 
while(true){
     
    //faccio comparire un prompt che chiede all'utente di inserire gli elementi della lista
    let itemList = prompt("inserisci un articolo alla lista oppure premi * per completare");
   
    // se il valore inserito nell'output e' strettamente uguale a * 
    if(itemList === '*'){

        //ferma il ciclo
        break;
    }else{

        //inserisci gli elementi nell'array
        producList.push(itemList);
    };
    //mostrami in console gli elementi della lista 
  console.log('la tua lista della spesa:' + producList);
    
};

*/
const listOutput = document.getElementById('listOutput');

let shoppingList = []

for(let i = 0; i< 10; i++){

 let userItem = prompt('inserisci un elemento alla lista');

 shoppingList.push(userItem);

 
}

console.log(shoppingList);

