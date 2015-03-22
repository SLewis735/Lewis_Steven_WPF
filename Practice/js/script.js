//For Practice

var payRate = prompt("How much do you make an hour?");
var hours = prompt("How many hours do you work per week?");
var weeks = prompt("How many weeks a year do you work?");
var annual= Number(payRate) * Number(hours) * weeks;
alert(annual);

if(annual < 25000){
    console.log("Sorry, you don't make enough.");
}else if(annual >= 25000 && annual < 50000){
    console.log("You almost there.");
}else{
    console.log("Congrats!");
}
if(payRate < 20){
    console.log("You may want to ask for a raise.");
}
var rent = prompt("What do you pay for rent?");
var carNote = prompt("How much is your car note");
var expenses = Number(rent) + Number(carNote);
var netIncome = Number(annual) - Number(expenses);

if(carNote > 250){
    console.log("Who you should get a bus token")
}
if(rent > 500){
    console.log("Get a room mate")
}else{
    console.log("Enjoy your cheap rent")
}

    var careerFuture = (netIncome < 50000) ? "Look for another job." : "Celebrate staying at your job.";

    console.log(careerFuture);
var alert = ("The End!!!");
