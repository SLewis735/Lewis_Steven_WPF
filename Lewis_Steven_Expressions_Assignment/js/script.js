// Steven Lewis 031215 Expressions Assignment

var widthOfTheRoom = prompt("What is the width of the room?"); // This is the total width of the room.
var heightOfTheRoom = prompt("What is the height of the room?"); //This is the height of the room.
var lengthOfTheRoom = prompt("what is the length the room?"); // This is the length of the room.
var areaOfTheWalls = widthOfTheRoom * heightOfTheRoom * lengthOfTheRoom; //The area of the walls to be painted.
var areaOfTheFloor = widthOfTheRoom * lengthOfTheRoom; //The area of the floor to be carpeted.
var coveragePerGallon = 350; //The average amount of coverage in a gallon of paint.
var gallonsOfPaint = areaOfTheWalls / coveragePerGallon; //The number of gallons of paint that is needed.
var percentageOfWaste = areaOfTheFloor / 10; // This is the allowance for waste.
var totalAmountOfCarpet = areaOfTheFloor + percentageOfWaste; // This is the total square footage of carpet needed.
var result = "You will need " + gallonsOfPaint + " gallons of paint and " + totalAmountOfCarpet + " square feet of carpet to complete this job.";


console.log(result); // This is the results from the calculations of how many gallons of paint and how many square footage of carpet is needed to complete this job.