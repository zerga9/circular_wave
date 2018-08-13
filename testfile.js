"use strict";

var btn = document.getElementById("get-records");
btn.addEventListener("click", buttonHandler);

function buttonHandler() {
  toggleButton(false);
  getRecords();
}

function toggleButton(loaded) {
  // fix this method to change the button text
  // should be a generic method i.e. implementation should not alter a specific element
  this.innerHTML = loaded ? "Get next" : "Loading...";
  this.classList.toggle("button-not-loading");
  this.classList.toggle("button-loading");
}

function getRecords() {
  // getting the IDs of the records to fetch is a synchronous operation
  // you don't need to change this call, it should return the IDs
  var ids = Server.getIds();

  // getting each corresponding record is an async operation

  // you can get a SINGLE record by calling Server.getRecord(recordId, callbackFunction)
  // callbackFunction takes 2 parameters, error and data
  // invocation as follows
  Server.getRecord(recordId, function(error, data) {
    // if the fetch is unsuccessful the callback function is invoked with the error only
    // if the fetch is successful the callback is invoked with error variable set to null, and data variable will hold the response (i.e. the record you wanted to retrieve)
  });

  // you need to make sure the list is not rendered until we have the records...but need to allow for any fetch errors or app will hang
  // i.e. a record you request might not exist - how would you allow for this?
  // when you have the records, call processRecords as follows
  processRecords(allTheRecords);
}

function processRecords(records) {
  toggleButton(true);
  var sortedRecords = sortRecords(records);
  var html = "";
  var tr;
  sortedRecords.forEach(function(index, value, array) {
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
  var sorted = records;
  // sort results in date order, most recent last

  return sorted;
}

function addTotals(records) {
  var hours = 0;
  var paid = 0;

  records.forEach(function(value, index) {
    hours += value.hoursWorked;
    paid += value.hoursWorked * value.hourlyRate;
  });

  document.getElementById("totals-annot").innerHTML = "TOTALS";
  document.getElementById("totals-hours").innerHTML = hours;
  document.getElementById("totals-paid").innerHTML = paid;
}
