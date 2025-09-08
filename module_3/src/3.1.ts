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

    // Create a method (Annonymous Function)
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  // Make instanceof dog & cat
  const dog = new Animal("Doggy", "dog", "Ghew Ghew");
  const cat = new Animal("Kitty", "cat", "Mew Mew");
  const pikachu = new Animal("Pikachu", "pokemon", "Pika Pika");

  const soundOfDog = dog.makeSound();
  const soundOfCat = cat.makeSound();
  const soundOfPikachu = pikachu.makeSound();

  console.log(soundOfCat);
  console.log(soundOfDog);
  console.log(soundOfPikachu);
}
