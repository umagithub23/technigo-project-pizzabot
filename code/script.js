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
if (menu === "Pizza") {
  const pizzaType = prompt(
    "What type of pizza would you like?\n" +
    "   1. Margherita\n" +
    "   2. Pepperoni\n" +
    "   3. Veggie Supreme\n" +
    "   4. BBQ Chicken\n" +
    "\n" +
    "Please enter the number of your choice."
  );

  if (pizzaType === "1") {
    alert(`You have chosen Margherita - a timeless classic!`);
  } else if (pizzaType === "2") {
    alert(`You have chosen Pepperoni - a delicious favorite!`);
  } else if (pizzaType === "3") {
    alert(`You have chosen Veggie Supreme - a healthy delight!`);
  } else if (pizzaType === "4") {
    alert(`You have chosen BBQ Chicken - a smoky favorite!`);
  }

}
else if (menu === "Pasta") {
  const pastaType = prompt(
    "What type of pasta would you like?\n" +
    "   1. Spaghetti Carbonara\n" +
    "   2. Fettuccine Alfredo\n" +
    "   3. Penne Arrabbiata\n" +
    "   4. Cheesy Tortellini\n" +
    "\n" +
    "Please enter the number of your choice."
  );

  if (pastaType === "1") {
    alert(`You have chosen Spaghetti Carbonara - creamy, dreamy, absolutely legendary!`);
  } else if (pastaType === "2") {
    alert(`You have chosen Fettuccine Alfredo - rich and indulgent!`);
  } else if (pastaType === "3") {
    alert(`You have chosen Penne Arrabbiata - spicy and satisfying!`);
  } else if (pastaType === "4") {
    alert(`You have chosen Cheesy Tortellini - a cheesy delight!`);
  }

}
else if (menu === "Salad") {
  const saladType = prompt(
    "What type of salad would you like?\n" +
    "   1. Caesar Salad\n" +
    "   2. Greek Salad\n" +
    "   3. Garden Fresh Salad\n" +
    "   4. Quinoa & Avocado Bowl\n" +
    "\n" +
    "Please enter the number of your choice."
  );

  if (saladType === "1") {
    alert(`You have chosen Caesar Salad - crispy and undeniably iconic!`);
  } else if (saladType === "2") {
    alert(`You have chosen Greek Salad - a refreshing classic!`);
  } else if (saladType === "3") {
    alert(`You have chosen Garden Fresh Salad - a healthy choice!`);
  } else if (saladType === "4") {
    alert(`You have chosen Quinoa & Avocado Bowl - a nutritious delight!`);
  }

}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
