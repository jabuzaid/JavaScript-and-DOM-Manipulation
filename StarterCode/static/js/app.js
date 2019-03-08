// Joe J. Abuzaid
// UC-Berkeley Data Analytics Bootcamp

// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);

// Function to build the Table
function buildTable(ufoData) {
    tbody.html("");
    // Step 1: Loop Through `data` and console.log each UFO object
    ufoData.forEach(function(dataRow) {

        console.log(dataRow) ;
    
    // Step 2:  Use d3 to append one table row `tr` for each UFO report object
        var row = tbody.append("tr");
    
    // Step 3:  Use `Object.entries` to console.log each UFO report value
        Object.entries(dataRow).forEach(function([key, value]) {
            console.log(key, value);
    
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
    console.log(date);
    var filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(data => data.datetime === date);
    }
    buildTable(filteredData);
}
