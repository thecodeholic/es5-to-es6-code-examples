// ES5
function Apple(weight, color){
  this.weight = weight;
  this.color = color;
}

Apple.prototype.getWeight = function(){
  return this.weight;
}
Object.defineProperty(Apple.prototype, 'weightKg', {
  get: function(){
    return this.weight / 1000;
  },
  set: function(weightKg){
    this.weight = weightKg * 1000;
  }
})

// ES6
// class Apple  {
//   constructor(weight, color) {
//     this.weight = weight;
//     this.color = color;
//   }
//   get weightKg() {
//     return this.weight / 1000;
//   }
//   set weightKg(weightKg) {
//     this.weight = weightKg * 1000;
//   }
//   static createInstance() {
//     return new Apple();
//   }
// }


// Usage
var ap = new Apple(200, 'green');
console.log(ap.weightKg);
ap.weightKg = 0.4;
console.log(ap.weight);