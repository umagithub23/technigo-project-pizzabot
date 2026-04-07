// Step 1 - Welcome and introduction
document.addEventListener('DOMContentLoaded', () => {
  alert('Welcome to our Javascript Pizzeria. Ready to Explore? - Click "OK" to begin.');

  const customerName = prompt(`What is your name?`);
  alert(`Hi ${customerName}, Welcome to our pizzeria!`);

  // Step 2 - Food choice
  const foodChoice = prompt(
    'What would you like to order?\n' +
      '\n' +
      '   We have the following menu:\n' +
      '     1. Pizza\n' +
      '     2. Pasta\n' +
      '     3. Salad\n' +
      '\n' +
      'Please enter the number of your choice.',
  );

  let menu = '';
  let menuSubtype = '';

  switch (foodChoice) {
    case '1':
      menu = 'Pizza';
      alert(`${menu} mode activated. Prepare for deliciousness!`);
      break;
    case '2':
      menu = 'Pasta';
      alert(`You chose ${menu} — that’s amore!`);
      break;
    case '3':
      menu = 'Salad';
      alert(`${menu} selected. Your body says thank you!`);
      break;
    default:
      alert(`Invalid choice. Please refresh the page and try again.`);
      return;
  }

  // Step 3 - Subtype choice
  switch (menu) {
    case 'Pizza': {
      const pizzaType = prompt(
        'What type of pizza would you like? 🍕 \n' +
          '   1. Margherita\n' +
          '   2. Pepperoni\n' +
          '   3. Veggie Supreme\n' +
          '   4. BBQ Chicken\n' +
          '\n' +
          'Please enter the number of your choice.',
      );

      switch (pizzaType) {
        case '1':
          menuSubtype = 'Margherita';
          alert(`You have chosen ${menuSubtype} - a timeless classic!`);
          break;
        case '2':
          menuSubtype = 'Pepperoni';
          alert(`You have chosen ${menuSubtype} - a delicious favorite!`);
          break;
        case '3':
          menuSubtype = 'Veggie Supreme';
          alert(`You have chosen ${menuSubtype} - a healthy delight!`);
          break;
        case '4':
          menuSubtype = 'BBQ Chicken';
          alert(`You have chosen ${menuSubtype} - a smoky favorite!`);
          break;
        default:
          alert(`Invalid choice. Please refresh the page and try again.`);
          return;
      }
      break;
    }

    case 'Pasta': {
      const pastaType = prompt(
        'What type of pasta would you like? 🍝 \n' +
          '   1. Spaghetti Carbonara\n' +
          '   2. Fettuccine Alfredo\n' +
          '   3. Penne Arrabbiata\n' +
          '   4. Cheesy Tortellini\n' +
          '\n' +
          'Please enter the number of your choice.',
      );

      switch (pastaType) {
        case '1':
          menuSubtype = 'Spaghetti Carbonara';
          alert(`You have chosen ${menuSubtype} - creamy, dreamy, absolutely legendary!`);
          break;
        case '2':
          menuSubtype = 'Fettuccine Alfredo';
          alert(`You have chosen ${menuSubtype} - rich and indulgent!`);
          break;
        case '3':
          menuSubtype = 'Penne Arrabbiata';
          alert(`You have chosen ${menuSubtype} - spicy and satisfying!`);
          break;
        case '4':
          menuSubtype = 'Cheesy Tortellini';
          alert(`You have chosen ${menuSubtype} - a cheesy delight!`);
          break;
        default:
          alert(`Invalid choice. Please refresh the page and try again.`);
          return;
      }
      break;
    }

    case 'Salad': {
      const saladType = prompt(
        'What type of salad would you like? 🥗 \n' +
          '   1. Caesar Salad\n' +
          '   2. Greek Salad\n' +
          '   3. Garden Fresh Salad\n' +
          '   4. Quinoa & Avocado Bowl\n' +
          '\n' +
          'Please enter the number of your choice.',
      );

      switch (saladType) {
        case '1':
          menuSubtype = 'Caesar Salad';
          alert(`You have chosen ${menuSubtype} - crispy and undeniably iconic!`);
          break;
        case '2':
          menuSubtype = 'Greek Salad';
          alert(`You have chosen ${menuSubtype} - a refreshing classic!`);
          break;
        case '3':
          menuSubtype = 'Garden Fresh Salad';
          alert(`You have chosen ${menuSubtype} - a healthy choice!`);
          break;
        case '4':
          menuSubtype = 'Quinoa & Avocado Bowl';
          alert(`You have chosen ${menuSubtype} - a nutritious delight!`);
          break;
        default:
          alert(`Invalid choice. Please refresh the page and try again.`);
          return;
      }
      break;
    }

    default:
      alert('No valid menu selected. Please refresh the page and try again.');
      return;
  }

  // Step 4 - Age
  let orderMessage = '';
  const childPrice = 5;
  const adultPrice = 10;

  const customerAge = prompt('Is this meal for a child or an adult? Please enter your age.');

  if (customerAge < 18) {
    orderMessage = `Great! One ${menuSubtype} for your child! Price: $${childPrice}`;
  } else {
    orderMessage = `Perfect! One ${menuSubtype} for you! Price: $${adultPrice}`;
  }

  const userConfirmation = prompt(`${orderMessage}\n` + `Confirm your order? \n` + `1. Yes \n` + `2. No`);

  // Step 5 - Order confirmation
  if (userConfirmation === '1') {
    alert(`Thank you for your order! Your ${menuSubtype} is now being prepared! See you soon! 👋`);
  } else if (userConfirmation === '2') {
    alert('Alright! We’ll be here when you’re hungry again. Have a great day!');
  } else {
    alert('Invalid choice. Please select 1 for Yes or 2 for No.');
    return;
  }
});
