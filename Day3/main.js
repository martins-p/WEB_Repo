function doStuff(someText) {
    alert("The text is " + someText);
}

var button = document.querySelector('.btn3');
// button.innerText = 'Some cool button'
// console.log(button.innerText);
button.addEventListener('click', function(){
    doStuff("Foofighters");
});

//console.log(document.querySelector('.btn3')); //Ar šo dabū konkrētu elementu. Pieraksts kā CSS klases selektoriem, jo seit izmantot tieši tos pašus selektorus ko CSS1. JS redz visu HTML kā objektu.
//console.log(document.querySelector('#btn4'));


// var someString1 = "foo"; //String
// someString1.length; //Ojekta sintakse, jo mainīgais ir objekts. Visi mainīgie JS ir objekti.
// var someString2 = 'foo'; //String
// var someString3 = `foo`; //String

// var someInteger = 123; //Integer

// var someFloat = 3.14; //Float

// var someBool = true; //bool

// var someCars = ['Vaz', 'Zaz', 'Uaz', 'BMW', 123, false];

// var someNull = null; // "Nav nekā"

// var someObject = { //Objekts kā mainīgo kopa
//     name: "Johnny",
//     surname: "Gates",
//     age: "21"
// };

// var people = [
//     {
//         name: "Johnny",
//         surname: "Gates",
//         age: "21",
//         eat: function(){}
//     },
//     { 
//         name: "Billy",
//         surname: "Gates",
//         age: "41"
//     }
// ];

// //Funkcijas
// var doSomeThing = function(){

// }

// var three = 3;
// function soSomeOtherThing(first, second){
//     return first + second;

// }

// parseFloat() //String to float
// parseInt() //String to int

