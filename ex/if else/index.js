let age = 27;

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> sinior citizen discount

// Create a conditional statement (if/else/else if) that log out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
  console.log("free");
} else if (age < 18) {
  console.log("child discount");
} else if (age < 27) {
  console.log("student discount");
} else if (age < 66) {
  console.log("full price");
} else {
  console.log("sinior citizon discount");
}