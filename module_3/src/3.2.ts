{
  // oop - Inheritance

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  // Children
  class Student extends Person {
    // We can skip declearing as student uses parent's property
    // name: string;
    // age: number;
    // address: string;

    constructor(name: string, age: number, address: string) {
      // We can skip initialising as student get these automatically from parent
      // this.name = name;
      // this.age = age;
      // this.address = address;

      // Call method to pass the agrs to parent -> super(all arguments)
      super(name, age, address);
    }

    // Skip it as well
    /*   getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    } */
  }
  const student = new Student("Azzizul", 24, "dhk");

  class Teacher extends Person {
    // name: string;
    // age: number;
    // address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      // this.name = name;
      // this.age = age;
      // this.address = address;
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  const teacher = new Teacher("Mr. Jim", 24, "dhk", "Professor");

  student.getSleep(5);
  teacher.getSleep(5);
  teacher.takeClass(10);
}
