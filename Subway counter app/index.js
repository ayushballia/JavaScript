let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countStr = " - " + count;
  saveEl.innerText += countStr;
  countEl.innerText = 0;
  count = 0;
}
