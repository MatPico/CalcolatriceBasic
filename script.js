/*

*/
document.addEventListener('DOMContentLoaded', function() {
    const n1 = document.getElementById('n1');
    const n2 = document.getElementById('n2');
    const n3 = document.getElementById('n3');
    const n4 = document.getElementById('n4');
    const n5 = document.getElementById('n5');
    const n6 = document.getElementById('n6');
    const n7 = document.getElementById('n7');
    const n8 = document.getElementById('n8');
    const n9 = document.getElementById('n9');
    const n0 = document.getElementById('n0');
    const n00 = document.getElementById('n00');
    const addizione = document.getElementById('addizione');
    const sottrazione = document.getElementById('sottrazione');
    const moltiplicazione = document.getElementById('moltiplicazione');
    const divisione = document.getElementById('divisione');
    const percentuale = document.getElementById('percentuale');
    const virgola = document.getElementById('virgola');
    const cancella = document.getElementById('cancella');
    const invio = document.getElementById('invio');
    const schermo = document.getElementById('schermo');

    let somma = [];
    let i = 0;
    let risultato = 0;
    let operazioneAttuale = null;

    function calcola(a) {
        console.log("Scrivo i tuoi numeri");
        if (somma[i] === undefined) {
            somma[i] = '';
        }
        somma[i] += a.toString();
        schermo.textContent = somma[i];
    }

    function setOperazione(op) {
        console.log("Registro il segno");
        if (operazioneAttuale !== null) {
            eseguiOperazione();
        }
        operazioneAttuale = op;
        i++;
        somma[i] = '';
        schermo.textContent += ` ${op} `;
    }

        

    function eseguiOperazione() {
        console.log("Sto calcolando");
        let a = parseFloat(somma[i - 1]);
        let b = parseFloat(somma[i]);

        if (operazioneAttuale === '+') risultato = a + b;
        if (operazioneAttuale === '-') risultato = a - b;
        if (operazioneAttuale === '*') risultato = a * b;
        if (operazioneAttuale === '/') risultato = a / b;
        if (operazioneAttuale === '%') risultato = (a * b) / 100;

        schermo.textContent = risultato;
        somma = [risultato];
        i = 0;
        operazioneAttuale = null;
    }


    n1.addEventListener('click', function() {
        console.log("Hai cliccato 1");
        calcola(1);
    });

    n2.addEventListener('click', function() {
        console.log("Hai cliccato 2");
        calcola(2);
    });

    n3.addEventListener('click', function() {
        console.log("Hai cliccato 3");
        calcola(3);
    });

    n4.addEventListener('click', function() {
        console.log("Hai cliccato 4");
        calcola(4);
    });

    n5.addEventListener('click', function() {
        console.log("Hai cliccato 5");
        calcola(5);
    });

    n6.addEventListener('click', function() {
        console.log("Hai cliccato 6");
        calcola(6);
    });

    n7.addEventListener('click', function() {
        console.log("Hai cliccato 7");
        calcola(7);
    });

    n8.addEventListener('click', function() {
        console.log("Hai cliccato 8");
        calcola(8);
    });

    n9.addEventListener('click', function() {
        console.log("Hai cliccato 9");
        calcola(9);
    });

    n0.addEventListener('click', function() {
        console.log("Hai cliccato 0");
        calcola(0);
    });

    n00.addEventListener('click', function() {
        console.log("Hai cliccato 00");
        if (somma[i] !== undefined) {
            somma[i] = (somma[i] * 100) + 0;
            schermo.textContent = somma[i];
        } else {
            schermo.textContent = '00';
            somma[i] = 0;
        }
    });

    cancella.addEventListener('click', function() {
        console.log("Hai cliccato cancella");
        schermo.textContent = '0';
        somma = [];
        i = 0;
        risultato = 0;
        operazioneAttuale = null;
    });

    moltiplicazione.addEventListener('click', function() {
        console.log("Hai cliccato moltiplicazione");
        setOperazione('*');
    });

    divisione.addEventListener('click', function() {
        console.log("Hai cliccato divisione");
        setOperazione('/');
    });

    addizione.addEventListener('click', function() {
        console.log("Hai cliccato addizione");
        setOperazione('+');
    });

    sottrazione.addEventListener('click', function() {
        console.log("Hai cliccato sottrazione");
        setOperazione('-');
    });

    percentuale.addEventListener('click', function() {
        console.log("Hai cliccato percentuale");
        setOperazione('%');
    });

    virgola.addEventListener('click', function() {
        console.log("Hai cliccato virgola");
        if (somma[i] === undefined || somma[i].includes(',')) return;
        somma[i] += '.';
        schermo.textContent = somma[i];
    });

    invio.addEventListener('click', function() {
        console.log("Hai cliccato invio");
        if (operazioneAttuale) {
            eseguiOperazione();
            operazioneAttuale = null;
            i = 0;
            somma = [risultato];
            schermo.textContent = risultato;
        }
    });
});
