// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Explore? - Click 'OK' to begin.`
)

const customerName = prompt(`What is your name?`);
alert(`Hi ${customerName}, Welcome to our pizzeria!`);

// Step 2 - Food choice
const foodChoice = prompt(
  "What would you like to order?\n" +
  "\n" +
  "   We have the following menu:\n" +
  "     1. Pizza\n" +
  "     2. Pasta\n" +
  "     3. Salad\n" +
  "\n" +
  "Please enter the number of your choice."
);

if (foodChoice === "1") {
  menu = "Pizza";
  alert(`${menu} mode activated. Prepare for deliciousness!`);
} else if (foodChoice === "2") {
  menu = "Pasta";
  alert(`You chose ${menu} — that’s amore!`);
} else if (foodChoice === "3") {
  menu = "Salad";
  alert(`${menu} selected. Your body says thank you!`);
}



// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
