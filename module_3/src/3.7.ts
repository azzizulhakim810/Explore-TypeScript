{
  // Statics

  class Counter {
    static count: number = 0; // when we use static before a variable or method, this. replaced by the class name for the premiumness of "static" keyword usage

    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // const instance1 = new Counter();
  // console.log(instance1.increment());

  // const instance1 = new Counter(); // don't need to create any instace, we can use static before a method as well
  // console.log(Counter.increment());

  // const instance2 = new Counter();
  // console.log(Counter.increment());

  // const instance3 = new Counter();
  // console.log(Counter.increment());

  /////////
}
