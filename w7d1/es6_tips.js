// Object destructuring

let someObject = { name: "Bob", age: 99, favorites: ["chicken", "pizza"] };

// let name = someObject.name;

const { name } = someObject;
const { age, favorites } = someObject;

// Array destructuring

const someArray = ["Alex", "Malak", "Aaron", "Vincent"];

const [firstName, otherFirstName, someoneElse, snoozeMaster] = someArray;

// Spread operator

// Property shorthand

let chicken = "PockPock";
let cow = "MooMoo";

const animalObject = {
  chicken,
  cow
};
