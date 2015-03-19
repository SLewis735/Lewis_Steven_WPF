// Steven Lewis 031215 Expressions Assignment

var widthOfTheRoom = prompt("What is the width of the room?"); // This is the total width of the room.
var heightOfTheRoom = prompt("What is the height of the room?"); //This is the height of the room.
var lengthOfTheRoom = prompt("what is the length the room?"); // This is the length of the room.
var numberOfRooms = prompt("How many rooms per house"); //How many rooms in each house to be completed.
numberOfRooms *= 3; //The number of houses to be completed.
areaOfTheWalls = widthOfTheRoom + heightOfTheRoom + lengthOfTheRoom; //The area of the walls to be painted.
areaOfTheFloor = widthOfTheRoom + lengthOfTheRoom; //The area of the floor to be carpeted.
coveragePerGallon = 350; //The average amount of coverage in a gallon of paint.
gallonsOfPaint = areaOfTheWalls / coveragePerGallon; //The number of gallons of paint that is needed.
percentageOfWaste = areaOfTheFloor / 10; // This is the allowance for waste.
totalAmountOfCarpet = areaOfTheFloor + percentageOfWaste; // This is the total square footage of carpet needed.
var result = "You will need " + gallonsOfPaint + " gallons of paint and " + totalAmountOfCarpet + " square feet of carpet to complete each room.";
// This is the results from the calculations of how many gallons of paint and how many square footage of carpet is needed to complete each room.
var totalWork = "There are " + numberOfRooms + " number rooms that need to completed";
numberOfRooms /= 4; // The amount of work person per person.
console.log(result);
console.log(totalWork);
alert(result);
alert(totalWork);