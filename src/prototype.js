// ES6
class Sheep {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  clone() {
    return new Sheep(this.name, this.weight);
  }
}

const sheep = new Sheep('berta', 87);
console.log(sheep);

const clonedSheep = sheep.clone();
console.log(clonedSheep);

Sheep.prototype.age = 20;
console.log(sheep.age, clonedSheep.age);
