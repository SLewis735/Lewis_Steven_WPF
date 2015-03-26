//Steven Lewis 032515 Functions Assignment

//variables
var flLotto = prompt("Enter 'yes' to play the Florida Lottery?");
// The variable declaring flLotto and prompting user to play Florida Lottery


// functions
function gameValidation (lotto) {  // Function for validating a choice to be made for flLotto
    var timesClicked = 1;          // variable for declaring the number of clicks each tim

    while (lotto === "") {
        lotto = prompt("Please enter 'yes' to play the Florida Lottery Number Generator");
//Prompting to enter yes if lotto is ""
        timesClicked++;

        if (timesClicked === 3) {
            console.log("Thank you for playing the Florida Lottery Number Generator.");
            break;
            // Limiting the number of clicks to 3 before resolving.
        }

    }
    if (lotto === "yes") {
        console.log("Thank you"); // Thanking the user for entering yes
    }
    if (lotto === "no"){
        console.log("Too bad, come back later when you want to play Florida Lottery"); // If the user enter no, user is given this message.
    }
    return lotto; // Returning lotto back to the main code

}

function lottoNumberGen (max, min, num) { // Function for number generator
    var lottoArray = [];

    for (var i = 0; i < num; i++) { // Math to randomly choose numbers for thr lottery

        var theFlLotto = Math.round(Math.random() * (max - min) + min);

        lottoArray[i] = theFlLotto;
    }
    return lottoArray; // Returning lottoArray back to the main code


}

//main code
lotto = gameValidation(flLotto); // Declaration of the function for validation of game prompt to the main code
lottoArray = lottoNumberGen(1, 53, 6);  // Declaration of the function for the random number generator to the main code,
// Generating numbers 1 through 53 and limiting choices to 6.

    if (flLotto === "yes"){
    console.log("Your winning numbers are " + lottoArray + " Have a nice day!"); // The output printing out six random numbers when choosing yes.
}











/* The Florida lottery numbers:  25,19,4,49,25,7
/* The Florida lottery numbers:  48,41,43,29,35,5 */