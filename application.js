$(document).ready(function() {
	// Initialize select dropdown
	$('select').material_select();

	// Initialize tooltip for add task button
	$('.tooltipped').tooltip({delay: 30});

	// Initialize parallax
	$('.parallax').parallax();

	// Initialize collapsibles
	$('.collapsible').collapsible();

	// Get started button scroll
	$("#get-started").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#features").offset().top
	    }, 1000);
	});

});

// Update the table with search results
function updateSearchResults() {
	// Find survey tools with names matching user search input
}

// Update the table with sorting options
function updateSort() {
	// Sort the selected column
}

// Update the table with filtering options
function updateFilters() {
	// Only show the survey tools with the selected features in the filtering list
}

// Show details about the selected survey tool
function showDetails() {

}

// Add the selected survey tool to comparison list
function addToComparison() {

}

// Show the comparison list with the survey tools currently added
function showComparisonList() {

}