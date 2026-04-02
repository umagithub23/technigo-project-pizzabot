// Step 1 - Welcome and introduction
document.addEventListener('DOMContentLoaded', () => {
  alert(
    `Welcome to our Javascript Pizzeria. Ready to Explore? - Click 'OK' to begin.`
  );

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

  let menu = "";
  let menuSubtype = "";

  if (foodChoice === "1") {
    menu = "Pizza";
    alert(`${menu} mode activated. Prepare for deliciousness!`);
  } else if (foodChoice === "2") {
    menu = "Pasta";
    alert(`You chose ${menu} — that’s amore!`);
  } else if (foodChoice === "3") {
    menu = "Salad";
    alert(`${menu} selected. Your body says thank you!`);
  } else {
    alert(`Invalid choice. Please refresh the page and try again.`);
    return;
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
      menuSubtype = "Margherita";
      alert(`You have chosen ${menuSubtype} - a timeless classic!`);
    } else if (pizzaType === "2") {
      menuSubtype = "Pepperoni";
      alert(`You have chosen ${menuSubtype} - a delicious favorite!`);
    } else if (pizzaType === "3") {
      menuSubtype = "Veggie Supreme";
      alert(`You have chosen ${menuSubtype} - a healthy delight!`);
    } else if (pizzaType === "4") {
      menuSubtype = "BBQ Chicken";
      alert(`You have chosen ${menuSubtype} - a smoky favorite!`);
    } else {
      alert(`Invalid choice. Please refresh the page and try again.`);
      return;
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
      menuSubtype = "Spaghetti Carbonara";
      alert(`You have chosen ${menuSubtype} - creamy, dreamy, absolutely legendary!`);
    } else if (pastaType === "2") {
      menuSubtype = "Fettuccine Alfredo";
      alert(`You have chosen ${menuSubtype} - rich and indulgent!`);
    } else if (pastaType === "3") {
      menuSubtype = "Penne Arrabbiata";
      alert(`You have chosen ${menuSubtype} - spicy and satisfying!`);
    } else if (pastaType === "4") {
      menuSubtype = "Cheesy Tortellini";
      alert(`You have chosen ${menuSubtype} - a cheesy delight!`);
    } else {
      alert(`Invalid choice. Please refresh the page and try again.`);
      return;
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
      menuSubtype = "Caesar Salad";
      alert(`You have chosen ${menuSubtype} - crispy and undeniably iconic!`);
    } else if (saladType === "2") {
      menuSubtype = "Greek Salad";
      alert(`You have chosen ${menuSubtype} - a refreshing classic!`);
    } else if (saladType === "3") {
      menuSubtype = "Garden Fresh Salad";
      alert(`You have chosen ${menuSubtype} - a healthy choice!`);
    } else if (saladType === "4") {
      menuSubtype = "Quinoa & Avocado Bowl";
      alert(`You have chosen ${menuSubtype} - a nutritious delight!`);
    } else {
      alert(`Invalid choice. Please refresh the page and try again.`);
      return;
    }

  } else {
    alert(`No valid menu selected. Please refresh the page and try again.`);
    return;
  }

  // Step 4 - Age
  let orderMessage = "";
  const customerAge = prompt(`Is this meal for a child or an adult? Please enter your age.`);

  if (customerAge < 18) {
    orderMessage = `Great! One ${menuSubtype} for your child! Price: $5`;
  } else {
    orderMessage = `Perfect! One ${menuSubtype} for you! Price: $10`;
  }

  const userConfirmation = prompt(`${orderMessage}\n` + `Confirm your order? \n` +
    `1. Yes \n` +
    `2. No`
  );

  // Step 5 - Order confirmation
  if (userConfirmation === "1") {
    alert(`Thank you for your order! Your ${menuSubtype} is now being prepared! See you soon! 👋`);
  } else if (userConfirmation === "2") {
    alert(`Alright! We’ll be here when you’re hungry again. Have a great day!`);
  } else {
    alert("Invalid choice. Please select 1 for Yes or 2 for No.");
    return;
  }

});
