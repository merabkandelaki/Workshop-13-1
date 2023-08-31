let num = prompt('Enter number: ')


let textP = document.querySelector(".text");

if (num < 50) {
  textP.textContent = "less than 50";
} else if (num > 20) {
  textP.textContent = "is more than 20";
} else {
  textP.textContent = "error";
}
