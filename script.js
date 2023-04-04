/*
//ciclo while ispirato al live coding con emanuele

const output = document.getElementById('shopping-List');

let itemList = prompt("Quanti elementi vuoi nella lista della spesa?");
itemList = parseInt(itemList);
let productList = [];

while(productList.length < itemList ){
     
  const listItem = prompt('inserisci elementi della lista:')
   
  if (productList.includes(itemList)){
    alert('hai gia')

  }else{
    productList.push(listItem);
     
  }
  
};
 for(i=0; i< productList.length; i++){
    console.log(productList[i]);
    output.innerHTML += `<li> ${productList[i]} </li>`;
   }
   
console.log(productList);

*/












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








//creo un array vuoto
let shoppingList = [];

//creo una funzione collegata al bottone nell'html
function addItem(){
    //salvo in una variabile il valore del campo input
    let item = document.getElementById('input-item').value;
   

    //se item non e' uguale a stringa vuota 
    if(item !== ""){
     
        //pusho nell'array item(che e' il valore che l'utente ha messo nel campo input)

        shoppingList.push(item);

        //subito dopo lo svuoto
        document.getElementById('input-item').value='';
          
 
        //dichiaro una funzione 
        displayList();

        
    }

}

// scrivo il codice della funzione dichiarata sopra 
function displayList(){

   //dichiaro una variabile vuota
    let list = '';
    //creo un ciclo for che mi cicla la lista array
    for(let i = 0; i < shoppingList.length; i++){
        //ad ogni iterazione aggiunge un li con il valore dell'array 
        list += "<li>"+shoppingList[i] + "</li>";
    };
    //inner html della lista 
    document.getElementById('shopping-List').innerHTML = list;
};














/*
//shopping list con ciclo for

let shoppingList = []

for(let i = 0; i< 10; i++){

 let userItem = prompt('inserisci un elemento alla lista');

 shoppingList.push(userItem);

 
}

console.log(shoppingList);
*/
