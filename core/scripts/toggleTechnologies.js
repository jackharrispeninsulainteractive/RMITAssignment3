//colors
var active = "#e60278";
var normal = "#00355F";

//set default for page load
displayMachineLearning();

//display functions for each section of content
function displayMachineLearning() {

    //Get selected element and selected button and set them to vars
    var selected = document.getElementById("contentMachineLearning");
    var buttonSelected = document.getElementById("buttonMachineLearning");

    //set the display style and button active color
        selected.style.display = "block";
        buttonSelected.style.backgroundColor = active;

    //make sure all other content is hidden
        document.getElementById("contentAutonomousVehicles").style.display = "none";
        document.getElementById("contentCyberSecurity").style.display = "none";
        document.getElementById("contentJaydyn").style.display = "none";

    //make reset all other buttons back to normal background
        document.getElementById("buttonAutonomousVehicles").style.backgroundColor = normal;
        document.getElementById("buttonCyberSecurity").style.backgroundColor = normal;
        document.getElementById("buttonJaydyn").style.backgroundColor = normal;
}

function displayAutonomousVehicles() {

    //Get selected element and selected button and set them to vars
    var selected = document.getElementById("contentAutonomousVehicles");
    var buttonSelected = document.getElementById("buttonAutonomousVehicles");

    //set the display style and button active color
        selected.style.display = "block";
        buttonSelected.style.backgroundColor = active;

    //make sure all other content is hidden
        document.getElementById("contentMachineLearning").style.display = "none";
        document.getElementById("contentCyberSecurity").style.display = "none";
        document.getElementById("contentJaydyn").style.display = "none";

    //make reset all other buttons back to normal background
        document.getElementById("buttonMachineLearning").style.backgroundColor = normal;
        document.getElementById("buttonCyberSecurity").style.backgroundColor = normal;
        document.getElementById("buttonJaydyn").style.backgroundColor = normal;
}

function displayCyberSecuirty() {

    //Get selected element and selected button and set them to vars
    var selected = document.getElementById("contentCyberSecurity");
    var buttonSelected = document.getElementById("buttonCyberSecurity");

    //set the display style and button active color
    selected.style.display = "block";
    buttonSelected.style.backgroundColor = active;

    //make sure all other content is hidden
    document.getElementById("contentMachineLearning").style.display = "none";
    document.getElementById("contentAutonomousVehicles").style.display = "none";
    document.getElementById("contentJaydyn").style.display = "none";

    //make reset all other buttons back to normal background
    document.getElementById("buttonMachineLearning").style.backgroundColor = normal;
    document.getElementById("buttonAutonomousVehicles").style.backgroundColor = normal;
    document.getElementById("buttonJaydyn").style.backgroundColor = normal;
}

function displayJaydyn() {

    //Get selected element and selected button and set them to vars
    var selected = document.getElementById("contentJaydyn");
    var buttonSelected = document.getElementById("buttonJaydyn");

    //set the display style and button active color
    selected.style.display = "block";
    buttonSelected.style.backgroundColor = active;

    //make sure all other content is hidden
    document.getElementById("contentMachineLearning").style.display = "none";
    document.getElementById("contentAutonomousVehicles").style.display = "none";
    document.getElementById("contentCyberSecurity").style.display = "none";

    //make reset all other buttons back to normal background
    document.getElementById("buttonMachineLearning").style.backgroundColor = normal;
    document.getElementById("buttonAutonomousVehicles").style.backgroundColor = normal;
    document.getElementById("buttonCyberSecurity").style.backgroundColor = normal;
}
