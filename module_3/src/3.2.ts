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

      // Call "super" method to pass all the agrs to parent -> super(all arguments)
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
    // write down only the extra one
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

  const teacher = new Teacher("Mr. AH JIM", 24, "Dhaka", "Professor");

  student.getSleep(10);
  teacher.getSleep(20);
  teacher.takeClass(30);
}
