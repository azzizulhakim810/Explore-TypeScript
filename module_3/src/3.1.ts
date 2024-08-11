{
  // OOP Class

  class Animal {
    // public name: string; // so we can remove or comment all those as we've declared these as "public" parameter properties
    // public species: string; '' '' '' ''
    // public sound: string;   '' '' '' ''

    // parameter properties - add "public" properties before the type declearation inside the constructor
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      // this.name = name; // so we can remove it as "public" parameter properties initialisng it automatically
      // this.species = species; '' '' '' ''
      // this.sound = sound;     '' '' '' ''
    }

    // Create a method
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  // Make instanceof dog & cat
  const dog = new Animal("kitty", "dog", "Ghew Ghew");
  const cat = new Animal("Picky", "cat", "Mew Mew");

  dog.makeSound();
  cat.makeSound();
}
