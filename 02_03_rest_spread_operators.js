// ES5
// ================================================================
// Rest
function test(x, y){
  var others = Array.prototype.slice.call(arguments, 2);
  console.log(others);
}
// Spread
var others = [3, 4, 5];
test.apply(undefined, [ 1, 2 ].concat(others));


// ES6
// ================================================================
//Rest
function test(x, y, ...others){
  console.log(others);
}
// Spread
var others = [3, 4, 5];
test( 1, 2, ...others);