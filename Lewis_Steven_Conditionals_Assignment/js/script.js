// Steven Lewis 031715 Conditionals Assignment

var costOfRent  = prompt("How much are you paying for rent");
//This is how much you pay for rent.
var carNote     = prompt("How much is your car note \nEnter 0 if you plan to ride the bus");
//This is how much you pay for your car note.
var rateOfPay   = prompt("What is you rate of pay per hour");
//This is your rate of pay for your job.
var hoursOfWork = prompt("How many hours did you work");
//This is how many hours you work on your job.
var otherBills  = (Number(costOfRent) + Number(carNote))/3;
    console.log("Your additional bills are " + otherBills);
//This is a calculation for deciding the amount of the other bills.
var weeklyPay   = rateOfPay * hoursOfWork;
var income      = weeklyPay *4;
//This is the total income
var budget      = Number(costOfRent) + Number(carNote) + Number(otherBills);
    console.log("Your budget for the month is " + budget);
alert("Your budget for the month is " + "$" + budget);
//This is the amount of the budget.
    console.log("Your income " + income  + " is for the month");
alert("Your income " +  "$" + income  + " is for the month");
//This is your total income.
var netIncome   = Number(income) - Number(budget);
    console.log("You net income is " + netIncome);
//This is the net income.
if(hoursOfWork < 30){
    console.log("You need to ask for more hours.");
}
//You will need more hours at work.
if(income > budget){
    console.log("You can afford to stay in your house.");
//The income was enough to sustain the budget.
}else if((carNote == 0) && Number(netIncome < budget)){
    console.log("You may need to move with mom and ride the bus.");
//You choose to ride the bus and keep your house.
}else{
    console.log("You need to find a higher paying job or move back with mom.");
}
if(rateOfPay < 10){
    console.log("You may want to ask for a raise.")
}
//The income was not enough to sustain the budget.
if(carNote > 400 && netIncome < 0){
    console.log("You should maybe ride the bus.");
//You may need to decide to ride the bus.
}
var careerFuture = (netIncome < 1000) ? "Look for another job." : "Celebrate staying at your job.";
    console.log(careerFuture);
//Deciding whether you are making enough on your job.




