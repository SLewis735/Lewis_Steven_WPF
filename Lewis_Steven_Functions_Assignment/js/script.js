//Steven Lewis 032515 Functions Assignment

//variables

var flLotto = prompt("Do you want to play the Florida Lottery?");
var winningNumber;

// functions
function gameValidation (lotto) {
    var timesClicked = 1;

    while (lotto === "") {
        lotto = prompt("Please enter 'yes' to play the Florida Lottery");

        timesClicked++;

        if (timesClicked === 3) {
            console.log("Come back later to play the Florida Lottery.");
            break;
        }

    }
    if (lotto === "yes") {
        console.log("Thank you");
    }
    if (lotto === "no"){
        console.log("Too bad, come back later when you want to play Florida Lottery");
    }
    return lotto;

}

function lottoNumberGen (max, min, num) {
    var lottoArray = [];
    for (var i = 0; i < num; i++) {
        var theFlLotto = Math.round(Math.random() * (max - min) + min);
        lottoArray[i] = theFlLotto;
    }
    return lottoArray;
}

//main code
lotto = gameValidation(flLotto);
winningNumber = lottoNumberGen(1, 53, 6);
if (lotto === "yes") {
    console.log("Let's Play");
}
else{
    console.log("Come Again");
}
if (lotto === "yes") {
    console.log("The winning numbers are " + (winningNumber));

}


