//lista della spesa con ciclo while

let producList = [];



while(true){

    let itemList = prompt("inserisci un articolo alla lista oppure premi * per completare");
    if(itemList.toLowerCase() === '*'){
        break;
    };

    producList.push(itemList);
};


console.log('la tua lista della spesa:' + producList);
