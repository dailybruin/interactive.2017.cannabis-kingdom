// var NUMBER_OF_SECTIONS = 3;
// var NUMBER_OF_DAYS = 3;

// function sectionPressed(index) {
// 	for(var i = 1; i <= NUMBER_OF_SECTIONS; i++)
// 	{
// 		var SectionID = "#Section" + i.toString();
// 		if(i == index)
// 			$(SectionID).addClass("active");
// 		else
// 			$(SectionID).removeClass("active");
// 	}
// }

// function dayPressed(index) {
// 	console.log("Day Pressed");
// 	for(var i = 1; i <= NUMBER_OF_DAYS; i++)
// 	{
// 		var dayID = "#Day" + i.toString();
// 		if(i == index)
// 			$(dayID).addClass("active");
// 		else
// 			$(dayID).removeClass("active");
// 	}
// }

$( document ).ready(function() {
    $(".button-collapse").sideNav();
});