//A
const username = "Annie";
const course = "JavaScript";

console.log(`Hello ${username}, welcome to the ${course} course!`);


//B
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

//C
const getFullName = (first, last) => `${first} ${last}`;
