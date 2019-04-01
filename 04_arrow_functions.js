// ES5

// Example 1
var application = {
  debug: true,

  init: function () {
    var me = this;
    var button = document.getElementById('myButton');
    button.addEventListener('click', function () {
      console.log(this.debug); // This won't work
      console.log(me.debug); // This WILL work
    });
  }
}

// Example 2
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var squareNumbers = numbers.map(function (n) {
  return n * n;
})

// -----------------------------------
// ES6
// -----------------------------------

// Arrow function syntax
/*
     () => { ... } // no parameter
      x => { ... } // one parameter, an identifier
 (x, y) => { ... } // several parameters
*/

// Example 1
var application = {
  debug: true,

  init() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', ev => {
      console.log(this.debug); // This WILL work
    });

    // Or this
    button.addEventListener('click', ev => console.log(this.debug));
  }
}

// Example 2
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var squareNumbers = numbers.map(n => n * n);
