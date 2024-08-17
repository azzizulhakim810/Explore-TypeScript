{
  // Instanceof guard
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log(`${this.name} makes sound`);
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBarking() {
      console.log(`${this.name} is barking`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeawing() {
      console.log(`${this.name} is meawing`);
    }
  }

  // smart way to use function

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  const getAnimal = (animal: Animal) => {
    // type narrowing
    if (isDog(animal)) {
      animal.makeBarking();
      // type narrowing
    } else if (isCat(animal)) {
      animal.makeMeawing();
    } else {
      animal.makeSound();
    }
  };

  /*   const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.makeBarking();
    } else if (animal instanceof Cat) {
      animal.makeMeawing();
    }
    else {
      animal.makeSound();
    } */

  const dog = new Dog("Doggy", "dog");
  // console.log(dog);

  const cat = new Cat("Catty", "cat");
  // console.log(cat);

  getAnimal(dog);


  dog.makeBarking();
  dog.makeSound();

  cat.makeMeawing();
  cat.makeSound(); 

}
