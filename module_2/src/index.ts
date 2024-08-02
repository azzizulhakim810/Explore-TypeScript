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
  const user: GenericsArray<{ name: string; age: number }> = [
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
