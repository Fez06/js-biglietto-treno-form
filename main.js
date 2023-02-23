'use strict';

//variabili

// const prezzoKm = 0.21
// const etaUtente = document.getElementById('eta').value;
// const kmUtente = document.getElementById('distanza').value;


// console.log(etaUtente);
// console.log(kmUtente);

// const etaUtente = prompt('anni');
// const kmUtente = prompt('eta');

// let x = document.getElementById("eta").value;



//da qui il nuovo tentativo post-correzione

//inizializzo le var degli elementi/oggetti html che mi servono
const userName = document.getElementById('name');
const userKm = document.getElementById('km');
const userAge = document.getElementById('eta');
const btnStart = document.getElementById('genera');
const reset = document.getElementById('btnReset');

//console.log(userName, userKm, userAge);

//variabili del biglietto

const textName = document.getElementById('owner-name');
const textOffer = document.getElementById('offerta-biglietto');
const textCost = document.getElementById('costo-biglietto');
const ticket = document.querySelector('.ticket');

//qui inizial

btnStart.addEventListener ('click',
function(){
    const inputName = userName.value;
    const inputKm = Number(userKm.value);
    const inputAge = userAge.value;
    //console.log(inputName, inputKm, inputAge);

    let ticketPrice = inputKm * 0.21;

    if(inputAge === 'under') {
        ticketPrice = ticketPrice * 0.8;
    }
    else if(inputAge === 'over') {
        ticketPrice = ticketPrice * 0.6;
    }


    ticketPrice = ticketPrice.toFixed(2);
    console.log(ticketPrice);

    //sezione di scrittura dati su biglietto

    textName.innerHTML = inputName;
    textOffer.innerHTML = inputAge;
    textCost.innerHTML = ticketPrice +'$';

    ticket.classList.add('show');
});


reset.addEventListener ('click',
function(){
    userName.value = '';
    userKm.value = '';
    userAge.value = '';

    ticket.classList.remove('show');
});

