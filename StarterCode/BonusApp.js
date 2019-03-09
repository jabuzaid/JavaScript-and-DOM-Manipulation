// Joe J. Abuzaid
// UC-Berkeley Data Analytics Bootcamp

// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Console.log the UFO weather data from data.js
// console.log(tableData);
// Function to build the Table

function buildTable(ufoData) {
    tbody.html("");
    // Step 1: Loop Through `data` and console.log each UFO object
    ufoData.forEach(function(dataRow) {

        // console.log(dataRow) ;
    
    // Step 2:  Use d3 to append one table row `tr` for each UFO report object
        var row = tbody.append("tr");
    
    // Step 3:  Use `Object.entries` to console.log each UFO report value
        Object.entries(dataRow).forEach(function([key, value]) {
            // console.log(key, value);
    
    // Step 4: Use d3 to append 1 cell per UFO report value
            var cell = row.append("td");
    
    // Step 5: Use d3 to update each cell's text with
    // UFO report values
            cell.text(value);
        })
    })
}
// Calling the above function (buildTable)
buildTable(tableData);

// Using d3 to read the filter button
d3.select("#filter-btn").on("click", handleClick);


// function to handle the click and perform the filtering
function handleClick() {
    d3.event.preventDefault();

    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value");
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").node().value;
    var shape = d3.select("#shape").property("value");
    var duration = d3.select("#duration").property("value");

    console.log(date);
    var filteredData = tableData;
    var changed = [];
    filteredData = data;
    
    if (date) {
        filteredData = filteredData.filter(filteredDataata => filteredData.datetime === date);
    }
    if (city) {
        filteredData = filteredData.filter(filteredData => filteredData.city === city);
    }
    if (state) {
        filteredData = filteredData.filter(filteredData => filteredData.state === state);
    }
    if (country) {
        filteredData = filteredData.filter(filteredData => filteredData.country === country);
        console.log(country);
    }
    if (shape) {
        filteredData = filteredData.filter(filteredData => filteredData.shape === shape);
    }
    if (duration) {
        filteredData = filteredData.filter(filteredData => filteredData.duration === duration);
    }
    // console.log(filteredData);
    
    buildTable(filteredData);
}
























// YOUR CODE HERE!
