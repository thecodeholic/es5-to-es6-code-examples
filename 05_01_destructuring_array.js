function getNumbers(){
  return [10, 20];
}

// ES5
// ================================================================
var numbers = getNumbers();
var number1 = numbers[0];
var number2 = numbers[1];

// OR
var number1 = numbers[0], 
    number2 = numbers[1];
// ================================================================


// ES6
// ================================================================
const [number1, number2] = getNumbers();
// ================================================================

console.log(number1, number2);
