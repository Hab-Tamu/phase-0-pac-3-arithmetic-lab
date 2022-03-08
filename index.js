const { interfaces } = require("mocha");

function add() {

}

function subtract() {
    
}

function multiply() {
    
}

function divide() {
    
}

function add (a, b){
    return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function increment (n){
    return ++ n;
}

function decrement (n){
    return --n;
}

// console.log(decrement(3))

function makeInt(n){
   const num = parseInt(n, 10);
    return num;
}

// console.log(makeInt("0x2385"))

function preserveDecimal(n) {
    parseFloat(n)
}

//For the 14 and 15 tests
function preserveDecimal(n) {
     const nums =  parseFloat(n)
      return nums
}


console.log(parseFloat("15.4n579m"))
