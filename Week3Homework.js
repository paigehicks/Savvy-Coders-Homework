const pizzaToppings = ["mushroom", "sausage", "ham", "pepperoni"];

function getToppingsString(toppings) {
  let toppingsString = "";
  for (let i = 0; i < toppings.length; i++) {
    toppingsString += toppings[i];
    if (i < toppings.length - 2) {
      toppingsString += ", ";
    }
    if (i === toppings.length - 2) {
      toppingsString += " and ";
    }
  }
  return toppingsString;
}

function greetCustomer() {
  console.log(
    `Hello! Welcome to Paige's Pizzeria! Our toppings are: ${getToppingsString(
      pizzaToppings
    )}`
  );
}

function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    `One ${size} ${crust} pizza with ${getToppingsString(toppings)} coming up`
  );
  return [size, crust, toppings];
}

function preparePizza(order) {
  console.log("cooking your stupid pizza");
  const pizza = {
    size: order[0],
    crust: order[1],
    toppings: order[2]
  };
  return pizza;
}

function servePizza(pizza) {
  console.log(
    `Order up! Here's your ${pizza.size} ${
      pizza.crust
    } pizza with ${getToppingsString(pizza.toppings)}`
  );
  return pizza;
}

greetCustomer();
let order = getPizzaOrder("small", "thin crust", "mushroom", "pepperoni");
let pizza = preparePizza(order);
servePizza(pizza);
