// Navigation Bar by Nathan Tsai //

// GLOBAL VARIABLES //

// Constants
var NUMBER_OF_SECTIONS = 4;
var NUMBER_OF_DAYS = 3;

// Current state of section and day
var active_section = 0;
var active_day = 0;

// WINDOW FUNCTIONS //

// When the window loads
$( document ).ready(function() {
	loadState();
    $(".button-collapse").sideNav();
});

// Function that updates the user interface with the storage back end to remember state
function loadState() {

	// Grab current state
	if (typeof window.localStorage != 'undefined') {
		active_section = localStorage.getItem('active_section');
		active_day = localStorage.getItem('active_day');
	}

	// If the index matches, set section to be active, otherwise remove active class
	for(var i = 1; i <= NUMBER_OF_SECTIONS; i++) {
		var SectionID = "#Section" + i.toString();
		if(i == active_section)
			$(SectionID).addClass("active");
		else
			$(SectionID).removeClass("active");
	}

	// If the index matches, set part to be active, otherwise remove active class
	for(var i = 1; i <= NUMBER_OF_DAYS; i++) {
		var dayID = "#Day" + i.toString();
		if(i == active_day)
			$(dayID).addClass("active");
		else
			$(dayID).removeClass("active");
	}
}

// When one of the sections is pressed
window.sectionPressed = function(index) {

	// Set the active section in storage
	if(typeof window.localStorage != 'undefined') 
    	localStorage.setItem('active_section', index);

    // Set the active section locally
	active_section = index;

	// Reload user interface
	loadState();
}

// When one of the days is pressed
window.dayPressed = function(index) {

	// Set the active day in storage
	if(typeof window.localStorage != 'undefined')
    	localStorage.setItem('active_day', index);

    // Set the active day locally
	active_day = index;

	// Reload user interface
	loadState();
}

// Remove current active sections whenever a window closes or leaves
window.onunload = function() {
	if(typeof window.localStorage != 'undefined') 
		localStorage.removeItem('active_section');
}