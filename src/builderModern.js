// Modern: JS specific

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street
  }
}

class User {
  constructor(name, {age, phone = '123-456-7890', address} = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address
  }
}

let user2 = new User('Bob', {address: new Address('12345', 'Main St.')});
console.log(user2);
