// ES5
function Sheep(name, weight) {
  this.name = name;
  this.weight = weight;
}

Sheep.prototype.clone = function () {
  return new Sheep(this.name, this.weight);
};

const sheep = new Sheep('berta', 87);
console.log(sheep);

const clonedSheep = sheep.clone();
console.log(clonedSheep);

Sheep.prototype.age = 20;
console.log(sheep.age, clonedSheep.age);


Array.prototype.toString = () => 'new string that I defined';
console.log([1].toString());

String.prototype.myOwnProperty = 'heheh';
console.log('xyz'.myOwnProperty);
