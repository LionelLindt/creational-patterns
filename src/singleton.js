class Person {
  constructor() {
    console.log(Person.instance, typeof Person.instance, !Person.instance);
    if (typeof Person.instance === 'object') {
      return Person.instance;
    }
    console.log(this);
    Person.instance = this;

    return this;
  }
}

console.log('Creating first person object');
const person1 = new Person();

console.log('Creating second person object');
const person2 = new Person();

console.log(person1 === person2);

