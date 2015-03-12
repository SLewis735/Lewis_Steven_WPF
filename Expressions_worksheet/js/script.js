//Steven Lewis 031015 Expressions Worksheet

var numberOfPeopleAtParty = prompt("How many people are at the party? \nPlease enter the number of people at the party."); //Calculates how many people are attending the party.
var numberOfSlicesPerPizza  = 8; //The pizza is divided into eight slices
var numberOfPizzaToOrder = prompt("How many pizzas to be ordered? \nPlease enter the number of pizzas to order."); //calculates How many pizza are needed to be ordered
var numberOfSlicesPerPerson = (numberOfSlicesPerPizza * numberOfPizzaToOrder) / numberOfPeopleAtParty;
//console.log(numberOfPizzaToOrder); //prints it out to console
var result = "Each person ate " + numberOfSlicesPerPerson  + " slice(s) of pizza at the party.";
alert(result);