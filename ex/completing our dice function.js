// Create a function , rollDice(), that returns a random number between 1 to 6

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
}
console.log(rollDice());
