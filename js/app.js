/* 
Ejercicio 1: User profile
 Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
*/

function userProfile(){
    let userData = {};
    userData.username = prompt('Ingresa tu nombre:');
    userData.age = prompt('Ingresa tu edad en número: ');
    userData.favoriteMovie1 = prompt('A continuación ingresa tus 3 peliculas favoritas\nIngresa la primera: ');
    userData.favoriteMovie2 = prompt('Ingresa la segunda: ');
    userData.favoriteMovie3 = prompt('Ingresa la tercera: ');

    console.log(`Nombre :${userData.username}\nEdad: ${userData.age}\n${userData.favoriteMovie2} es una de mis peliculas favoritas!`);
}



/**
 * Ejercicio 2: Highest number
 * Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
 */
function highestNumber(){
    let numbers = prompt('Ingrese 10 números a ordenar separados por comas:').split(',').map(element => Number(element));
    console.log(numbers);
    let theHighestNumber = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > theHighestNumber){
            theHighestNumber = numbers[i];
        };
    }
    
    return theHighestNumber;
}



/**
 * Ejercicio 3: Alarm
 * Write a program that asks a user for the amount of seconds needed until an alarm (message), is executed alongside a text to show once those seconds have passed in real time.
 */

function setAlarmTime(){
    let time = prompt('Ingresa el tiempo en que deseas que salte la alarma:');
    setTimeout(() => alert(`Pasaron ${time} segundos\n Tu tiempo se acabo!`), time * 1000);
}




/**
 * Ejercicio 4: palindrome
 * Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
 */
function isPalindrome(){
    let sentence = prompt('Ingrese una oración, para comprobar si es un palíndromo:').toLocaleLowerCase().split(' ').join('');
    let result = true;
    console.log(sentence);
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] != sentence[(sentence.length - 1) - i]){
            result = false;
            return result;
            break;
        };
    };
    return result;
}

/**
 * Ejercicio 5: factorial
 * Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
 */
function calcularFactorial(){
    let number = Number(prompt('Ingrese un numero:'));
    console.log(Number)

    function factorial(numero){
        if(numero > 1){
            return numero * factorial(numero -1);
        } else {return 1};
    };
    
   return factorial(number);
}

/**
 * Ejercicio 6: Flat array
 * Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
 * 
 * let multiDimension = [1, [2, 3, [4, 5, [6]]]];
 */
let multiDimension = [1, [2, 3, [4, 5, [6]]]];

function arrayFlattener(array){
    let flattenedArray = [];
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            flattenedArray = flattenedArray.concat(arrayFlattener(array[i]));
        }else{
            flattenedArray.push(array[i]);
        };
    };
    return flattenedArray;
}
