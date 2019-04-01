// ES5

function multiply(a, b){
  b = b === undefined ? 1 : b;

  return a * b;
}


// ES6

function multiply(a, b = 1){
  return a * b;
}

console.log(multiply(5, 6)); // 30
console.log(multiply(5, 0)); // 0
console.log(multiply(5)); // 25