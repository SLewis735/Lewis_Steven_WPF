// Steven Lewis 031215 Expressions Assignment

var widthOfTheRoom = prompt("What is the width of the room?");
var heightOfTheRoom = prompt("What is the height of the room?");
var lengthOfTheRoom = prompt("what is the length the room?");
var areaOfTheWalls = widthOfTheRoom * heightOfTheRoom * lengthOfTheRoom;
var areaOfTheFloor = widthOfTheRoom * lengthOfTheRoom;
var result = "The area of the walls to be painted " + areaOfTheWalls + " sq. ft. \nThe area of the floor to be carpeted " + areaOfTheFloor + " sq. ft.";

console.log(result);