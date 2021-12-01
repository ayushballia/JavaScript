// Create a person object that contains three keys: name, age, and country.
// Use yourself as an example to set the value for the name, age, and country
let person = {
  name: "Ayush",
  age: 25,
  country: "India",
};
// Create a function , logData(), that uses the person object to create a
// string in the following format:
// "Ayush is 25 years old and lives in India"
function logData() {
  let personStr =
    person.name +
    " is " +
    person.age +
    " years old and lives in " +
    person.country;
  return personStr;
}
// Call the logData() function to verify that it works
console.log(logData());
