//Chiedere all'utente di scegliene un numero da 1 a 5
const userNum = parseInt (prompt ("Scegli un numero da 1 a 5"));

//Chiedere all'utente di scegliere tra pari e dispari
const UserEvenOdd = prompt ("Decidi tra pari o dispari");

//verifichiamo i risultati nella console
console.log(`Il numero scelto dall'utente è ${userNum}`);
console.log(`L'utente tra pari o dispari ha scelto ${UserEvenOdd}`);
console.log(`Il numero del computer è ${result}`);

//facciamo la somma tra numero dell'utente e numero del computer 
const sum = userNum + result;
console.log(`la somma dei due numeri è ${sum}`);

//verifichiamo in console se la somma dei due numeri ha dato risultato pari o dispari
console.log(evenOdd(sum));

//dichiarare il vincitore
const finalResult = evenOdd(sum);
if(UserEvenOdd === finalResult){
    console.log(`L'utente ha vinto !`);
}else {
    console.log(`L'utente ha perso !`);
    
}

