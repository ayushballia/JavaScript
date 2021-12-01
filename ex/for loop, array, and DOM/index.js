let sentence = ["Hello", "my", "name", "is", "Ayush"];
let greetingEl = document.querySelector("#greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}
