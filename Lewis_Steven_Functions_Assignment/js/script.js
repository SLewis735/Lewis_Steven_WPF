//Steven Lewis 032515 Functions Assignment

//variables
var flLotto = prompt("Do you want to play the Florida Lottery?");

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

function lottoNumberGen (max, min){
    var theFlLotto = Math.round(Math.random() * (max - min) + min);
    console.log(theFlLotto);
}

//main code
lotto = gameValidation(flLotto);
if (lotto === "yes") {
    console.log("Let's Play");
}
else{
    console.log("Come Again");
}
lottoNumberGen(1,53);
lottoNumberGen(1,53);
lottoNumberGen(1,53);
lottoNumberGen(1,53);
lottoNumberGen(1,53);
lottoNumberGen(1,53);


