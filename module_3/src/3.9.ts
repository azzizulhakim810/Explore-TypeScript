{
  // Abstraction: 1. Interface 2. Abstraction

  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // Real Implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      // console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      // console.log(`I am stoping the car engine`);
    }
    move(): void {
      // console.log(`I am moving the car `);
    }
    test() {
      // console.log(`I am just testing`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // Abstract Class (leader class)
  // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      // console.log(`I am just testing`);
    }
  }

  // implementation
  class ToyotaCar extends Car2 {
    startEngine(): void {
      // console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      // console.log(`I am stoping the car engine`);
    }
    move(): void {
      // console.log(`I am moving the car `);
    }
  }

  // const hondaCar = new Car2();
  // hondaCar.stopEngine();

  //
}
