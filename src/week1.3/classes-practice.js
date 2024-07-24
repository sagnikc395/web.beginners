//classes and oop in js

class Animal {
  //they lets us put a bunch of properties of certain types
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }

  describe() {
    return `${this.name} has ${this.legCount} legs!!`;
  }
}

//an instance of the class

const dog = new Animal("mark the doggy", 4);
console.log(dog.describe());

