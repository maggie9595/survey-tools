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

	// Initialize table
	var table = $('#tools-table').DataTable( {
        "paging": false,
        "info": false,
    });

	// Use Materialize search box to find survey tools with names matching user search input
  	$('#search-tool').on('input propertychange paste', function() {
  		// Update the table with search results
  		table.search($(this).val()).draw();
  	});

  	// Update the table with filtering options when user updates filters
  	$('.collapsible input').on('change', function() {
  		var id = this.id;
  		var column = 0;

  		if (id == "easy") {
  			column = 1;
  		}

  		if (this.checked) {
  			addFilter(column, 1);
  		} else {
  			removeFilter(column);
  		}
  	});

  	// Update the table with filtering options
	function addFilter(column, search) {
		table
		    .column(column)
		    .search(search)
		    .draw();
	}

	function removeFilter(column) {
		table
		    .column(column)
		    .search("")
		    .draw();
	}
});


// Show details about the selected survey tool
function showDetails() {

}
