//colors
var active = "#e60278";
var normal = "#00355F";

//set default for page load
displayTopGenericSkills();

//display functions for each section of content
function displayTopGenericSkills() {

    //Get selected element and selected button and set them to vars
    var selected = document.getElementById("contentTopGenericSkills");
    var buttonSelected = document.getElementById("buttonTopGenericSkills");

    //set the display style and button active color
        selected.style.display = "block";
        buttonSelected.style.backgroundColor = active;

    //make sure all other content is hidden
        document.getElementById("contentTopITSkills").style.display = "none";
        document.getElementById("contentTopITJobTitles").style.display = "none";
        document.getElementById("contentTopOccupations").style.display = "none";
    //make reset all other buttons back to normal background
        document.getElementById("buttonTopITSkills").style.backgroundColor = normal;
        document.getElementById("buttonTopITJobTitles").style.backgroundColor = normal;
        document.getElementById("buttonTopOccupations").style.backgroundColor = normal;
}

function displayTopITSkills() {

    //Get selected element and selected button and set them to vars
    var selected = document.getElementById("contentTopITSkills");
    var buttonSelected = document.getElementById("buttonTopITSkills");

    //set the display style and button active color
        selected.style.display = "block";
        buttonSelected.style.backgroundColor = active;

    //make sure all other content is hidden
        document.getElementById("contentTopGenericSkills").style.display = "none";
        document.getElementById("contentTopITJobTitles").style.display = "none";
        document.getElementById("contentTopOccupations").style.display = "none";


    //make reset all other buttons back to normal background
        document.getElementById("buttonTopGenericSkills").style.backgroundColor = normal;
        document.getElementById("buttonTopITJobTitles").style.backgroundColor = normal;
        document.getElementById("buttonTopOccupations").style.backgroundColor = normal;
}

function displayTopITJobTitles() {

    //Get selected element and selected button and set them to vars
    var selected = document.getElementById("contentTopITJobTitles");
    var buttonSelected = document.getElementById("buttonTopITJobTitles");

    //set the display style and button active color
    selected.style.display = "block";
    buttonSelected.style.backgroundColor = active;

    //make sure all other content is hidden
    document.getElementById("contentTopGenericSkills").style.display = "none";
    document.getElementById("contentTopITSkills").style.display = "none";
    document.getElementById("contentTopOccupations").style.display = "none";


    //make reset all other buttons back to normal background
    document.getElementById("buttonTopGenericSkills").style.backgroundColor = normal;
    document.getElementById("buttonTopITSkills").style.backgroundColor = normal;
    document.getElementById("buttonTopOccupations").style.backgroundColor = normal;
}

function displayTopOccupations() {

    //Get selected element and selected button and set them to vars
    var selected = document.getElementById("contentTopOccupations");
    var buttonSelected = document.getElementById("buttonTopOccupations");

    //set the display style and button active color
    selected.style.display = "block";
    buttonSelected.style.backgroundColor = active;

    //make sure all other content is hidden
    document.getElementById("contentTopGenericSkills").style.display = "none";
    document.getElementById("contentTopITSkills").style.display = "none";
    document.getElementById("contentTopITJobTitles").style.display = "none";


    //make reset all other buttons back to normal background
    document.getElementById("buttonTopGenericSkills").style.backgroundColor = normal;
    document.getElementById("buttonTopITSkills").style.backgroundColor = normal;
    document.getElementById("buttonTopITJobTitles").style.backgroundColor = normal;
}
