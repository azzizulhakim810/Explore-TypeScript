// 2.1 ----------------------------
{
  // Type Assertion
  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is : ${convertedValue}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm("100") as string;
  const result2 = kgToGm(100) as number;
  // const result3 = kgToGm(true) as number;
  // console.log(result2);

  // Showed by try catch block
  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}

// 2.2 --------------------------
{
  // interface
  //
  // using typeAlias
  type User1 = {
    name: string;
    age: number;
  };

  // using interface
  interface User2 {
    name: string;
    age: number;
  }

  /* 
  const user: User1 = {
    name: "Jim",
    age: 24,
  }; 
  ----------OR--------------
  const user: User2 = {
    name: "Jim",
    age: 24,
  }; 
  */

  // extending object property using intersection with type alias
  type UserWithRole1 = User1 & { role: string };

  const user: UserWithRole1 = {
    name: "Jim",
    age: 24,
    role: "MERN Stack Dev",
  };

  // extending object property using extends with interface
  interface UserWithRole2 extends User1 {
    role: string;
  }
  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole2 = {
    name: "Jim",
    age: 24,
    role: "MERN Stack Dev",
  };
  // console.log(user2);

  // js --> object, array --> object, function --> object

  // On Array
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number; // Indexing
  }

  const rollNumber1: Roll1 = [1, 2, 3];
  const rollNumber2: Roll2 = [1, 2, 3];

  // On Function
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add: Add2 = (num1, num2) => num1 + num2;

  // Recommend to use type alias for array & function. But we can use type alias or interface both for object
}

// 2.3 --------------------------
{
  // Generics Method with type alias
  type GenericsArray<T> = Array<T>;

  // const rollNumber: number[] = [1, 2, 3];
  // const rollNumber: Array<number> = [1, 2, 3];
  const rollNumber: GenericsArray<number> = [1, 2, 3];

  // const names: string[] = ["x", "y", "z"];
  // const names: Array<string> = ["x", "y", "z"];
  const names: GenericsArray<string> = ["x", "y", "z"];

  // const boolArray: boolean[] = [true, false, true];
  // const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericsArray<boolean> = [true, false, true];

  // On Array of Object
  type User = { name: string; age: number };
  // const user: GenericsArray<{ name: string; age: number }> = [
  const user: GenericsArray<User> = [
    {
      name: "Azzizul",
      age: 24,
    },
    {
      name: "Jim",
      age: 24,
    },
  ];

  // GenericTuple
  type GenericTuple<X, Y> = [X, Y];

  const workers: GenericTuple<string, string> = ["Mr. A", "Mr. B"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "Azzizul", email: "azziz@gmail.com" },
  ];
}

// 2.4 --------------------------
{
  // Generics Method with Interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  const poorDev: Developer<{
    brand: string;
    waterResistant: boolean;
    price: number;
  }> = {
    name: "A",
    computer: {
      brand: "Walton",
      model: "w23",
      releaseYear: 2010,
    },
    smartWatch: {
      brand: "Helio",
      waterResistant: false,
      price: 3000,
    },
  };

  type AppleWatch = {
    brand: string;
    waterResistant: boolean;
    heartTracking: boolean;
    usingChip: string;
    price: number;
  };

  type Bike = {
    brand: string;
    capacity: string;
    price: number;
  };
  const richDev: Developer<AppleWatch, Bike> = {
    name: "A",
    computer: {
      brand: "Walton",
      model: "w23",
      releaseYear: 2010,
    },
    smartWatch: {
      brand: "Helio",
      waterResistant: true,
      heartTracking: true,
      usingChip: "A17",
      price: 30000,
    },
    bike: {
      brand: "Yamaha",
      capacity: "240 CC",
      price: 250000,
    },
  };
}

// 2.5 --------------------------
{
  // Functions with Generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGenerics<string>("Bangladesh");

  type User = { id: number; name: string };
  const resGenericObj = createArrayWithGenerics<User>({
    id: 47,
    name: "Jim",
  });
  // console.log(resGenericObj);

  // With Tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 100);
  // console.log(res10);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Dev";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "x",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "y",
    email: "y@gmail.com",
    hasJob: true,
  });

  // console.log(student1, student2);
}

// 2.6 --------------------------
{
  //
  // Constraints In typescript
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    //extends mean to must have these three property to every property
    const course = "Next Level Web Dev";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 47,
    name: "x",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 48,
    name: "y",
    email: "y@gmail.com",
    hasJob: true,
  });

  // console.log(student1, student2);
  //
}

// 2.7 --------------------------
{
  // Constraints with keyof
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle; // using keyof

  const person: Owner = "bike";
  const person2: Owner2 = "ship";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Azzizul",
    age: 24,
    address: "dhk",
  };

  const result = getPropertyValue(user, "name");
  // console.log(result);
  //
}

// 2.8 --------------------------
{
  // Promise
  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data: Todo = await res.json();
    return data;
    // console.log(data);
  };

  getTodo();

  /*   const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  }; */

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // Call Promise
  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data;
    // console.log(data);
  };

  showData();

  type Something = {
    something: string;
  };

  const createPromise2 = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };
  // Call Promise
  const showData2 = async (): Promise<Something> => {
    const data: Something = await createPromise2();
    return data;
    // console.log(data);
  };

  showData2();
  //
}

// 2.9 --------------------------
{
  // Conditional Type
  type Sheikh = {
    car: string;
    bike: string;
    plane: string;
    cycle: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasPlane = CheckVehicle<"plane">;
}

// 2.9 --------------------------
{
  // Mapped Types
  const arrayOfNumbers: number[] = [1, 2, 3];
  // const arrayOfStrings: string[] = ['1', '2', '3'];

  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );
  // console.log(arrayOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  //  type AreaString = {
  //   height: string;
  //   width: string;   };

  //   type AreaString = {
  //  [key in keyof AreaNumber]: string; };

  type Height = AreaNumber["height"]; // look up type

  // T => {height: string; width: number}
  // key => T["width"];

  // Implement Map Type -> key in
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "20",
    width: 20,
  };
}

// 2.10 --------------------------
{
  // Utility Types

  type Person = {
    name: string;
    age: number;
    salary: number;
    contact?: number;
  };

  // Pick
  type NameAndSalary = Pick<Person, "name" | "salary">;

  // Omit
  type ContactINfo = Omit<Person, "name" | "age" | "salary">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // Read Only
  type PersonReadOnly = Readonly<Person>;
  const person1: PersonReadOnly = {
    name: "AH JIM",
    age: 24,
    salary: 1000000,
  };

  // person1.name = "Jim"; // Can't change any readonly value

  // Record Type
  /* 
 type MyObj = {
    a: string;
    b: string;
  }; 
  */

  type MyObj = Record<string, string>;

  const emptyObj: Record<string, unknown> = {}; // An Empty object but assign the key always be a string

  const obj1: MyObj = {
    a: "a",
    b: "b",
    c: "c",
  };
}
