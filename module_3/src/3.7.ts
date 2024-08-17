{
  // Statics

  /*   class Counter {
    static count: number = 0;

    increment() {
      return (this.count = this.count + 1);
    }
    decrement() {
      return (this.count = this.count - 1);
    }
  } */

  class Counter {
    static count: number = 0; // when we use static before a variable or method, <this.> replaced by the class name <Counter> for the premiumness of "static" keyword usage

    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();
  // As we made the method "Static", so we  have to put the class name before calling the method
  console.log(Counter.increment());

  const instance2 = new Counter();
  console.log(Counter.increment());

  const instance3 = new Counter();
  console.log(Counter.increment());
}
