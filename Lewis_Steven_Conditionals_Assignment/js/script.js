// Steven Lewis 031715 Conditionals Assignment

var costOfRent  = prompt("How much are you paying for rent"); //This is how much you pay for rent
var carNote     = prompt("How much is your car note");        //This is how much you pay for your car note
var rateOfPay   = prompt("What is you rate of pay per hour"); //This is your rate of pay for your job
var hoursOfWork = prompt("How many hours did you work");      //This is how many hours you work on your job
var otherBills  = Number(costOfRent) + Number(carNote) -200;
alert("Your additional bills are " + otherBills);
var income = rateOfPay * hoursOfWork;
var budget = Number(costOfRent) + Number(carNote) + Number(otherBills);
alert("Your budget for the month is " + budget);
alert("Your income " +  income  + " is for the month");
console.log(income - budget);

if(income > budget){
        console.log("You can afford to stay in your house and keep your car");
}else{
        console.log("You need to find a higher paying job or move back with mom");
}




