// Makes an ajax request with the search key.
var ajax = function (searchKey) {
	var resultsLis = "";
	// Create a new ajax request.
	var ajaxReq = new XMLHttpRequest();
	ajaxReq.addEventListener ("load", function () {
		var resultsData = JSON.parse(this.responseText.replace(/&#34;/g, "\""))["Search"];
		// Iterate on all results.
		for (var i = 0; i < resultsData.length; i++) {
			resultsLis += "<li>" + resultsData[i]["Title"] + "</li>";
		}

		results.innerHTML = resultsLis;
	});
	ajaxReq.open("GET", "http://localhost:3000/" + searchKey);
	ajaxReq.send();
};

// Gets the data from input.
var getInput = function () {
	// Get search term.
	var searchKey = document.getElementById("search-term").value;
	// If searchKey is not empty.
	if (searchKey.length > 1 && searchKey !== " ") {
		ajax(searchKey);
	} else if (searchKey === " " || searchKey === "") {
		results.innerHTML = "No results";
	}
};

var results = document.getElementById("results");
setInterval(getInput, 3000);

