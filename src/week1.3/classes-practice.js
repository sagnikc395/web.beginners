//classes and oop in js
//classes are a structure of state and associated methods
// that are put together

class Animal {
  //they lets us put a bunch of properties of certain types
  constructor(name, legCount) {
    this.name = name;
    this.legCount = legCount;
  }

  describe() {
    return `${this.name} has ${this.legCount} legs!!`;
  }
  static type() {
    //associate with the object itself
    console.log(`Animal class type`);
  }
}

//an instance of the class

const dog = new Animal("mark the doggy", 4);
console.log(dog.describe());

Animal.type();
