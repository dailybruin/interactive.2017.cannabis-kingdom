var NUMBER_OF_SECTIONS = 4;
var NUMBER_OF_DAYS = 3;

var active_section = 0;
var active_day = 0;

function loadState() {
	if (typeof window.localStorage != 'undefined') {
		active_section = localStorage.getItem('active_section');
		active_day = localStorage.getItem('active_day');
	}
	for(var i = 1; i <= NUMBER_OF_SECTIONS; i++) {
		var SectionID = "#Section" + i.toString();
		if(i == active_section)
			$(SectionID).addClass("active");
		else
			$(SectionID).removeClass("active");
	}
	for(var i = 1; i <= NUMBER_OF_DAYS; i++) {
		var dayID = "#Day" + i.toString();
		if(i == active_day)
			$(dayID).addClass("active");
		else
			$(dayID).removeClass("active");
	}
}

window.sectionPressed = function(index) {
	if(typeof window.localStorage != 'undefined') 
    	localStorage.setItem('active_section', index);
	active_section = index;
	loadState();
}

window.dayPressed = function(index) {
	if(typeof window.localStorage != 'undefined')
    	localStorage.setItem('active_day', index);
	active_day = index;
	loadState();
}

$( document ).ready(function() {
	loadState();
    $(".button-collapse").sideNav();
});

window.onbeforeunload = function() {
   // Do something
   localStorage.removeItem('active_section');
}