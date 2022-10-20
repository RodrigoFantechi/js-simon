/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */




const container = document.querySelector('.container');
const result = document.querySelector('.result');
const timer = document.querySelector('.timer');
const arrayNumeriRandom = generaArrayNumeriRandomici();

// startTimer(timer);
generaGriglia(container, arrayNumeriRandom);
startGame(arrayNumeriRandom, result, container, timer);



function generaGriglia(whereGemerateGrid, arrayRandomNumber,) {

    for (let i = 0; i < arrayRandomNumber.length; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerText = arrayRandomNumber[i];
        whereGemerateGrid.insertAdjacentElement('beforeend', square);
    }
};

function generaArrayNumeriRandomici() {
    const array = [];
    while (array.length !== 5) {
        const number = Math.floor(Math.random() * (100 - 1) + 1) + 1;
        if (!array.includes(number)) {
            array.push(number);
        }
    }
    return array;
}

function startGame(arrayRandomNumber, wherePrintResult, whereGemerateGrid, whereGemerateTimer) {

    let numeroTimer = 30;
    const intervalloNumeri =  setInterval(function(){
    whereGemerateTimer.innerText = `Mancano ${numeroTimer} secondi!`;
    if (numeroTimer ===0){
        clearInterval(intervalloNumeri)
        whereGemerateTimer.style.display= 'none';
        whereGemerateGrid.style.display = 'none';
        setTimeout(function () {

            let numeriIndovinati = [];
            for (let i = 1; i <= arrayRandomNumber.length; i++) {
                let numeroInseritoDallUser = Number(prompt(`inserisci il ${i}° numero`))
                if (numeroInseritoDallUser === arrayRandomNumber[i - 1]) {
                    numeriIndovinati.push(numeroInseritoDallUser);
                }
            }
            whereGemerateGrid.style.display = 'flex';
            wherePrintResult.style.display ='block';
            if(numeriIndovinati.length ===0){
            wherePrintResult.innerText = `Hai indovinato 0 numeri.`;
            } else if(numeriIndovinati.length ===0){
                wherePrintResult.innerText = `Hai indovinato 1 numero. Il numero: ${numeriIndovinati}`;
            }else{
                wherePrintResult.innerText = `Hai indovinato ${numeriIndovinati.length} numeri. I numeri: ${numeriIndovinati}`;
            }
        }, 100)
    } else if (numeroTimer <=5){
        whereGemerateTimer.innerText = `Hurry Up!  Mancano ${numeroTimer} secondi!`;
        numeroTimer--;
    } else{
        numeroTimer--;
    }
   },1000)

} 

