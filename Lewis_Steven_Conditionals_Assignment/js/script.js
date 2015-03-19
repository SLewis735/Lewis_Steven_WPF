// Steven Lewis 031715 Conditionals Assignment

var costOfRent  = prompt("How much are you paying for rent"); //This is how much you pay for rent
var carNote     = prompt("How much is your car note \nEnter 0 if you plan to ride the bus");        //This is how much you pay for your car note
var rateOfPay   = prompt("What is you rate of pay per hour"); //This is your rate of pay for your job
var hoursOfWork = prompt("How many hours did you work");      //This is how many hours you work on your job
var otherBills  = Number(costOfRent) + Number(carNote) -200;  //This is a calculation for deciding the amount of the other bills
alert("Your additional bills are " + otherBills);
var income      = rateOfPay * hoursOfWork;                                   //This is the total income
var budget      = Number(costOfRent) + Number(carNote) + Number(otherBills); //This is the amount of the budget
//prompt("Press Ok is you will be a bus rider");

alert("Your budget for the month is " + budget);
alert("Your income " +  income  + " is for the month");
var netIncome   = Number(income) - Number(budget);            //This is the net income
console.log("You net income is " + netIncome);
//if(carNote == 0){
        //console.log("You choose to ride the bus");

}
//if(income > budget){
       // console.log("You can afford to stay in your house");
        //The income was enough to sustain the budget
//}else if(busRider){
       // console.log("You can stay in your house and ride the bus");
        //You choose to ride the bus and keep your house
}//else{
       // console.log("You need to find a higher paying job or move back with mom");
}       //The income was not enough to sustain the budget






