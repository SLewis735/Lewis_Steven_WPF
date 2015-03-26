//Steven Lewis 032515 Functions Assignment

//variables
var flLotto = prompt("Enter 'yes' to play the Florida Lottery?");

// functions
function gameValidation (lotto) {
    var timesClicked = 1;

    while (lotto === "") {
        lotto = prompt("Please enter 'yes' to play the Florida Lottery Number Generator");

        timesClicked++;

        if (timesClicked === 3) {
            console.log("Thank you for playing the Florida Lottery Number Generator.");
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
lottoArray = lottoNumberGen(1, 53, 6);

    if (flLotto === "yes"){
    console.log("Your winning numbers are " + lottoArray + " Have a nice day!");
}











/* The Florida lottery numbers:  25,19,4,49,25,7
/* The Florida lottery numbers:  48,41,43,29,35,5 */