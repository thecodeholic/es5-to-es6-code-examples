function getNumbers(){
  return {a: 10, b: 20};
}

// ES5
var numbers = getNumbers();
var number1 = numbers.a;
var number2 = numbers.b;

// OR
var number1 = numbers.a, 
    number2 = numbers.b;


// ES6
const {a, b} = getNumbers();
const {a: number1, b: number2} = getNumbers();

console.log(number1, number2);