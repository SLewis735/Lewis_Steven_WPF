// Steven Lewis 031715 Conditionals Assignment

var costOfRent = prompt("How much are you paying for rent"); //This is how much you pay for rent
var carNote = prompt("How much is your car note");           //This is how much you pay for your car note
var rateOfPay = prompt("What is you rate of pay per hour \nYou are paid no more than $15 per hour");
                                                             //This is your rate of pay for your job
var rateOfPay = rateOfPay <15
var hoursOfWork = prompt("How many hours did you work \nYou can work no more than 40 hours per week");
                                                             //This is how many hours you work on your job
var otherBills = 100;
alert("Your additional bills are " + 100);
var income = rateOfPay * hoursOfWork;
var budget = Number(costOfRent) + Number(carNote) + Number(otherBills);
alert("Your budget for the month is " + budget);
alert("Your income " +  income  + " is for the month");
console.log(income - budget);




