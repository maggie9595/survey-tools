$(document).ready(function() {
	// Initialize parallax
	$('.parallax').parallax();

	// Initialize collapsibles
	$('.collapsible').collapsible();

	// Initialize tooltips
	$('.tooltipped').tooltip({delay: 40, html: true});

	// Get started button scroll
	$("#get-started").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#features").offset().top
	    }, 1000);
	});

	// Refresh page to clear filters
	$('#clear-filters').click(function() {
	    location.reload();
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
  		var column = 1;

  		if (id == "easy") {
  			column = 2;
  		} else if (id == "data") {
  			column = 3;
  		} else if (id == "templates") {
  			column = 4;
  		} else if (id == "question") {
  			column = 5;
  		} else if (id == "collaboration") {
  			column = 6;
  		}

  		if (this.checked) {
  			addFilter(column);
  		} else {
  			removeFilter(column);
  		}
  	});

  	// Update the table to add the chosen filter
	function addFilter(column) {
		table
		    .column(column)
		    .search("check_circle")
		    .draw();
	}

	// Remove the chosen filter from the table
	function removeFilter(column) {
		table
		    .column(column)
		    .search("")
		    .draw();
	}
});