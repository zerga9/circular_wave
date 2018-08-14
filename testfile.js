"use strict";

var btn = document.getElementById("get-records");
btn.addEventListener("click", buttonHandler);

function buttonHandler() {
	toggleButton(false);
	getRecords();
}

function toggleButton(loaded) {
	btn.innerHTML = loaded ? "Get next" : "Loading...";
	btn.classList.toggle("button-not-loading");
	btn.classList.toggle("button-loading");
}

function getRecords() {
	var ids = Server.getIds();
	console.log(ids);

	var allTheRecords = [];
	var count = 0;

	function allRecords() {
		if (count === ids.length) {
			processRecords(allTheRecords);
		}
	}
	ids.forEach(function(recordId) {
		Server.getRecord(recordId, function(error, data) {
			count++;
			if (error) {
				console.log(error);
				allRecords();
				return error;
			} else {
				allTheRecords.push(data);
				console.log(allTheRecords);
				console.log(error);
				allRecords();
			}
		});
	});
}

function processRecords(records) {
	toggleButton(true);
	var sortedRecords = sortRecords(records);
	var html = "";
	var tr;
	sortedRecords.forEach(function(value) {
		tr = "";
		tr +=
			"<tr>" +
			"<td>" +
			value.date +
			"</td>" +
			"<td>" +
			value.name +
			"</td>" +
			"<td>" +
			value.natInsNumber +
			"</td>" +
			"<td>" +
			value.hoursWorked +
			"</td>" +
			"<td>" +
			value.hourlyRate +
			"</td>" +
			"<td>" +
			value.hoursWorked * value.hourlyRate +
			"</td>" +
			"</tr>";
		html += tr;
	});
	document.getElementById("results-body").innerHTML = html;
	addTotals(sortedRecords);
}

function sortRecords(records) {
	var sorted = records.sort(function(a, b) {
		a.date.length == 8 ? (a.date = "0".concat(a.date)) : (a.date = a.date);
		b.date.length == 8 ? (b.date = "0".concat(b.date)) : (b.date = b.date);
		var aa = parseInt(
			a.date
				.split("/")
				.reverse()
				.join(""),
			10
		);

		var bb = parseInt(
			b.date
				.split("/")
				.reverse()
				.join(""),
			10
		);
		return aa - bb;
	});

	return sorted;
}

function addTotals(records) {
	var hours = 0;
	var paid = 0;

	records.forEach(function(value, index) {
		hours += parseInt(value.hoursWorked);
		paid += parseInt(value.hoursWorked) * value.hourlyRate;
	});

	document.getElementById("totals-annot").innerHTML = "TOTALS";
	document.getElementById("totals-hours").innerHTML = hours;
	document.getElementById("totals-paid").innerHTML = paid;
}
