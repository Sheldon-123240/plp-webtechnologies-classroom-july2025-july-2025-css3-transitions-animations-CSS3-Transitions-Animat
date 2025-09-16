// Global variable
let globalCounter = 0;

// Function with parameters & return value
function addNumbers(a, b) {
  return a + b;
}

// Function using local scope
function incrementCounter() {
  let localCount = 1; // local scope
  globalCounter += localCount; // modifies global
  return globalCounter;
}

// Example usage
console.log(addNumbers(5, 10)); // returns 15
console.log(incrementCounter()); // increments globalCounter

// Trigger CSS animation on button click
function animateBox() {
  const box = document.getElementById("box");
  box.classList.toggle("bouncing"); // adds/removes CSS animation
}

// Function to show/hide modal with animation
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("visible");
}
