/*****************************************************
 * Filename: complex_code.js
 * Description: This code demonstrates a complex and sophisticated JavaScript application.
 * Author: Your Name
 * Date: Current Date
 ******************************************************/

// Define a complex class called "Person"
class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
  
  // Methods to calculate remaining years until retirement
  yearsUntilRetirement() {
    if (this.occupation === "Developer") {
      const retirementAge = 65;
      return retirementAge - this.age;
    } else {
      return "N/A";
    }
  }
  
  // Method to print out person details
  printDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Occupation: ${this.occupation}`);
  }
}

// Create an array of Person objects
const people = [
  new Person("John Doe", 30, "Developer"),
  new Person("Jane Smith", 25, "Teacher"),
  new Person("Mike Johnson", 40, "Doctor"),
];

// Iterate through each person and call their methods
people.forEach(person => {
  person.printDetails();
  console.log(`Years until retirement: ${person.yearsUntilRetirement()}`);
});

// Define a complex function called "fibonacci"
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Calculate Fibonacci series for the first 20 numbers
console.log("Fibonacci Series:");
for (let i = 0; i < 20; i++) {
  console.log(fibonacci(i));
}

// Define a complex object called "Calculator"
const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
};

// Use the Calculator object to perform calculations
const num1 = 10;
const num2 = 5;

console.log(`Addition: ${Calculator.add(num1, num2)}`);
console.log(`Subtraction: ${Calculator.subtract(num1, num2)}`);
console.log(`Multiplication: ${Calculator.multiply(num1, num2)}`);
console.log(`Division: ${Calculator.divide(num1, num2)}`);

// Define a complex async function called "getData"
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Call the getData function
getData();