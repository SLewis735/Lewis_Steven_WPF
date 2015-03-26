//Steven Lewis 032515 Functions Assignment

//variables
var flLotto = prompt("Do you want to play the Florida Lottery?");

// functions
function gameValidation (lotto){
    var timesClicked = 1;

    while (lotto === "") {
        lotto = prompt("Please enter 'yes' to play the Florida Lottery");

        timesClicked++;

        if (timesClicked === 3) {
            console.log("Come back later to play the Florida Lottery.");
            break;
        }
    }
}



//main code
gameValidation(flLotto);
if (flLotto = "yes"){
    console.log("thank you");
}



