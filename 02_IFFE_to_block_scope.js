// ES5

(function () {  // open IIFE
  var tmp = 15;
  
}());  // close IIFE

console.log(tmp); // ReferenceError


// ES6

{  // open block
  let tmp = 15;
  
}  // close block

console.log(tmp); // ReferenceError