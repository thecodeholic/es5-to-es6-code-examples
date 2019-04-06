// ES5
var x = 5;
var y = 6;
var o = {
  x: x,
  y: y,
  getSum: function () {
    return x + y;
  }
};
// Computed property
o[Math.random()] = 10;
console.log(o);

// ES6
const x = 5;
const y = 6;
const o = {
  x,
  y,
  [Math.random()]: 10,
  getSum(){
    return x + y;
  }
};
console.log(o);
