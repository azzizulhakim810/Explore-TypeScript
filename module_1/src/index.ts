// 1.4 ----------------------------
{
  // Basic Data Type
  let course: string = "Apollo Next Level Web Developement";
  // console.log(course);

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

  // tuple(Speacial type of array) --> array --> order --> type of values will be in sequence

  let coordinates: [number, number] = [1, 5];

  let ageName: [number, string, boolean] = [50, "Jim", true];
}

// 1.5 --------------------------
{
  // Reference Type --> Object

  /*   let user: {
  firstName: "Azzizul";
  middleName: "Hakim";
  lastName: "Jim";
}; */

  let user: {
    readonly company: string; // Can't change
    // company: "Peacock India"; //Explicitly fixed the name[type--> literal type]
    firstName: string;
    middleName?: string; // Optional
    lastName: string;
    isMarried: boolean;
  } = {
    company: "PH",
    firstName: "Azzizul",
    lastName: "Hakim",
    isMarried: false,
  };

  // console.log(user);
}

// 1.6 --------------------------
{
  // Functions

  function add(num1: number, num2: number = 10) {
    return num1 + num2;
  }

  add(2, 2);

  const addArrow = (num1: number, num2: number) => num1 + num2;

  const poorUser = {
    name: "Jim",
    balance: 0,

    // Inside object --> that function must be called a method
    addBalance(balance: number) {
      return `My balance is ${this.balance + balance}`;
    },
  };

  const arr: number[] = [1, 4, 7, 8];
  const newArray: number[] = arr.map((element: number) => element * element);
}

// 1.7 --------------------------
{
  // Spread Operator ------------------------------- Split a single one to different parts
  const breakfast = {
    bread: "2 pieces",
    butter: "100 gm",
  };

  const lunch = {
    rice: "250gm",
    chicken: "1 piece",
    lentil: "1 cup",
  };

  const fullDayMenu = {
    ...breakfast,
    ...lunch,
  };

  // Rest Operator -------------------------------- Unite whole items to a single one
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      // console.log(`Hi ${friend}`);
    });
  };

  greetFriends("A", "B", "C", "D");
}

// 1.8 --------------------------
{
  // Destructuring -------------------------------

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
    "Kiron",
  ];

  // const [a, b, c, d, e, f, g, h, i] = myFriends;
  const [, , MarriedOne, ...rest] = myFriends;
}

// 1.9 --------------------------
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

// 1.10 --------------------------
{
  // Union & Intersection types
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
  {
    // Ternary Operator || Optional Chaining || Nullish Coalescing Operator
    const age: number = 15;
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    // console.log({ isAdult });
  }

  {
    // Nullish Coalescing Operator
    // Decision making depends on Null/ Undefined

    const isAuthenticated = "";
    const result = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    // console.log({ result }, { result2 });

    // Nullish VS Turnary
    /*
      If the value is Null or Undefined, then Nullish shows Guest | If the value is empty string or false, then Nullish shows Nothing |
  
      But if the value is emply string or false Turnary shows Guest in this case | So we can understand the difference now 
    */

    type User = {
      name: string;
      address: {
        city: string;
        road: string;
        presentAddress: string;
        permanentAddress?: string;
      };
    };

    const user: User = {
      name: "Azzizul",
      address: {
        city: "dhk",
        road: "Mp road",
        presentAddress: "savar dohs",
      },
    };

    const permanentAddress =
      user?.address?.permanentAddress ?? "No permanent address"; // Using nullish coalesce for controliing null or undefined value
    // console.log(permanentAddress);
  }

  {
    // Nullable Types / Unknown Types / Never Types
    const searchName = (value: string | null) => {
      // if (typeof value === "number") {
      //   console.log(object);
      // }

      if (value) {
        console.log("Searching");
      } else {
        console.log("Nothing to search");
      }
    };

    // searchName("null");

    // Unknown types
    const getSpeedinMeterPerSecond = (value: unknown) => {
      if (typeof value === "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
      } else if (typeof value === "string") {
        // const splitValue = value.split(" ");
        const [v, unit] = value.split(" ");
        const convertedSpeed = (parseFloat(v) * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`);
      } else {
        console.log("Provide a valid Number");
      }
    };

    // getSpeedinMeterPerSecond("10 ms^-1");

    // Never Type
    const throwError = (msg: string): never => {
      throw new Error(msg);
    };
    throwError("Error occurs");
  }
}
