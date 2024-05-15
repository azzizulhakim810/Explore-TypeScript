{
  let course: string = "Apollo Next Level Web Developement";
  // console.log(course);

  // Basic Data Type

  // String
  let firstName: string = "Azzizul";

  // Number
  let roll: number = 191547;

  // Boolean
  let married: boolean = false;

  // Undefined
  let B: undefined = undefined;

  // Null
  let A: null = null;

  // My term to understand (Post defined)
  let C: number;
  C = 1234;

  // Array
  let friends: string[] = ["Ali", "Ajoy", "Shourov", "Masud"];

  let eligibleRollList: number[] = [4, 7, 8];

  // tuple(Speacial type of array) --> array --> order --> type of values

  let coordinates: [number, number] = [1, 5];

  let ageName: [number, string, boolean] = [50, "Jim", true];
}

{
  // Reference Type --> Object

  /* let user: {
  firstName: "Azzizul";
  middleName: "Hakim";
  lastName: "Jim";
}; */

  let user: {
    readonly company: string; // Can't change
    // company: "Peacock India"; //Explicitly fixed the name
    firstName: string;
    middleName?: string; // Optional
    lastName: string;
  } = {
    company: "PH",
    firstName: "Azzizul",
    lastName: "Hakim",
  };

  // console.log(user);

  // Functions

  function add(num1: number, num2: number) {
    return num1 + num2;
  }

  add(2, 2);

  const addArrow = (num1: number, num2: number) => num1 + num2;

  const poorUser = {
    name: "Jim",
    balance: 0,
    addBalance(balance: number) {
      return `My balance is ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 4, 7, 8];
  const newArray: number[] = arr.map((element: number) => element * element);
}

{
  // Spread Operator
  const breakfast = {
    bread: "2 pieces",
    butter: "100 gm",
  };

  const lunch = {
    rice: "250gm",
    chicken: "1 piece",
    lentil: "1 cup",
  };

  const menu = {
    ...breakfast,
    ...lunch,
  };
}

{
  // Rest Operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      // console.log(`Hi ${friend}`);
    });
  };

  greetFriends("A", "B", "C", "D");
}

{
  // Destructuring
  // Object
  const person = {
    name: "Jim",
    roll: "191547",
    group: {
      dept: "SW11",
      debate: "PUSTDS",
      zilla: "DGN SWAP",
    },
  };

  const {
    name,
    group: { zilla: myIdentity }, // Name Alias
  } = person;

  // Array
  const myFriends = [
    "Masud",
    "Ali",
    "Firoz",
    "Ajoy",
    "Zaman",
    "Mahin",
    "Maruf",
    "Shanto",
  ];

  // const [a, b, c, d, e, f] = myFriends;
  const [, , MarriedOne, ...rest] = myFriends;
}

{
  // Type Alias

  type User = {
    name: string;
    roll: number;
    contact?: string;
    gender: string;
  };

  const T1: User = {
    name: "A",
    roll: 47,
    contact: "01712345678",
    gender: "Male",
  };

  const T2: User = {
    name: "B",
    roll: 48,
    gender: "Female",
  };

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "ah_jim";
  const isAdmin: IsAdmin = true;

  // Function Alias
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}

{
  {
    // Union Types
    type FrontendDeveloper = "lessSkilled Dev" | "proSkilled Dev";
    type FullstackDeveloper = "frontend Dev" | "expert Dev";

    type Developer = FrontendDeveloper | FullstackDeveloper;

    const newDeveloper: FrontendDeveloper = "proSkilled Dev";

    type User = {
      name: string;
      email?: string;
      gender: "male" | "female";
      bloodGroup: "O+" | "B+" | "A+";
    };

    const user1: User = {
      name: "JIM",
      gender: "male",
      bloodGroup: "B+",
    };
  }

  {
    // Intersection Type

    type FrontendDeveloper = {
      skills: string[];
      designation1: "Frontend Developer";
    };

    type BackendDeveloper = {
      skills: string[];
      designation2: "Backend Developer";
    };

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper = {
      skills: ["Html", "Css", "Express"],
      designation1: "Frontend Developer",
      designation2: "Backend Developer",
    };
  }
}

{
  // Ternary Operator || Optional Chaining || Nullish Coalescing Operator
  const age = 29;
  const isAdult = age >= 18 ? "Adult" : "Not Adult";
  console.log(isAdult);
}
