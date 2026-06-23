// function

// function greeting(){
//     console.log(`Hello Srikant Panda!`)
// };

// function addNumbers(a,b){
//    sum = a+b;
//    console.log(sum)
// };

// add1 = addNumbers(1,2);
// add2 = addNumbers;
// console.log(add2);
// add2(1,3);
// console.log(add1); ---> [undefined] bcz addNumbers doesnot return anything
// add1(2,3);
// console.log(add1);
// greeting();

/**
 * Rest operator allows us to pass multiple arguments as a single parameter.
 * It create an array of the arguments passed.
 */

// function addNumbes(...num) {
//   let sum = 0;
//   for (let n of num) {
//     sum += n;
//   }
//   console.log(sum);
// }

// addNumbes(1,3,5,3,4)

/**
 * Spread opearator use to open two r ultile arr into an single array
 */

// const arr = [1,2,3,4]

// const [first,second,...num] = arr
// console.log(first,second,num)

/**
 *
 * Two methods to declare a function
 * 1. Function declaration
 * 2. Function expression
 * 3. Arrow function
 * 4. IIFE = Immediatly Invoked function.
 */

// Function expression

// addNumbers(2,3); ----> this will give `function not defined error` bcz the function is assigned to a variable and the variable is not defined before the function call.

// const addNumbers = function(num1,num2){
//     console.log(num1+num2)
// };

// addNumbers(2,3);

//Function declaration

// addNumbers(2,3); -----> this will work as the function declaration method allow us to call a function before its declaration and declare later.

// function addNumbers(num1,num2){
//     console.log(num1+num2)
// };

// addNumbers(2,3);

// arrow function

// syntax
/**
 * () =>{
 *
 * };
 */

// const addNumbers = (num1,num2) => {
//     console.log(num1+num2)
// };

// addNumbers(2,3)

//advantages
/**
 * if only return thing return it can written in one line as bellow
 */

// const addNumbers = (num1, num2) => num1 + num2;

// console.log(addNumbers(3,4))

// let arr = [10,56,12,56]

// arr.sort((a,b)=>a-b);
// console.log(arr);

// const squarenumbers = (num1)=> num1*num1;
// console.log(squarenumbers(2));

/**
 * If we have oly one parameter the we dont even need the `()`.
 * ex:-
 */

// const squarenumbers = (num1) => num1 * num1;
// console.log(squarenumbers(2));

// const greet = () => {name:`Srikant panda`,age:20}; -----> This will give error bcz whenever arrow function see `{` this it asumes there should be a return keyword to prevent this we can enclose the object in a `()`
// ex:-
// const greet = () => ({ nmae: `Srikant Panda`, age: 20 });
// console.log(greet());

// IIFE
/**
 * (function define)(); --->> immedeatly call it
 */

// (function greet(){
//     console.log(`Hello`)
// })();

// ((num1) => {
//     console.log(num1+num1)
// })(2);  ----> 4


// callback means parsing a function as a parameter to another function as a callback function

/**
 * syntax
 * (callback)=>{
 *      console.log("hello");
 *      callback();
 * }
 */

// function meet(callback){
//     console.log(`I have meet someone.`);
//     callback()
// }


// function greet(callback){
//     console.log(`hello`);
//     callback();
//     console.log(`hi`);

// };
// function haanji(){
//     console.log(`🤣`)
// }
// greet(haanji);
// meet(haanji);

// real life example

