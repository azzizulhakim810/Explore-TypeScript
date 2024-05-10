let course: string = "Apollo Next Level Web Developement";
console.log(course);

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

// Reference Type --> Object

let user: {
  firstName: "Azzizul";
  lastName: "Hakim";
};

/* let user: {
  readonly company: string; // Can't change
  // company: "Peacock India"; //Explicitly fixed the name
  firstName: string;
  middleName?: string; // Optional
  lastName: string;
} = {
  company: "PH",
  firstName: "Azzizul",
  lastName: "Hakim",
}; */

console.log(user);
