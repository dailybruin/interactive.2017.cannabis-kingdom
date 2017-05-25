// Navigation Bar by Nathan Tsai //

// GLOBAL VARIABLES //

// Constants
var NUMBER_OF_SECTIONS = 4;

// WINDOW FUNCTIONS //

// When the window loads
$( document ).ready(function() {
    $(".button-collapse").sideNav();
});

// When one of the sections is pressed
window.sectionPressed = function(index) {
	// If the index matches, set section to be active, otherwise remove active class
	for(var i = 1; i <= NUMBER_OF_SECTIONS; i++) {
		var SectionID = "#Section" + i.toString();
		if(i == index)
			$(SectionID).addClass("active");
		else
			$(SectionID).removeClass("active");
	}
}