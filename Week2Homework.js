let pizzaPlace = "Paige's Pizzeria";
let numberOfToppings = 10;

console.log(typeof pizzaPlace, pizzaPlace);
console.log(typeof numberOfToppings, numberOfToppings);

let greeting = `Hi! Welcome to ${pizzaPlace}, where our ${numberOfToppings} toppings are delicious!`;

console.log(greeting);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity");
} else {
  console.log("A Whole lot of pizza.");
}
