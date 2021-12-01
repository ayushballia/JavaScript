let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.querySelector("#apple-shelf");
let orangeShelf = document.querySelector("#orange-shelf");

// Create a function that puts the apples onto the appleshelf
// and the oranges onto the orangesShelf. Use a for loop,
// a conditional statement, and the textContent property

function getFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎";
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += "🍊";
    }
  }
}

getFruit();
