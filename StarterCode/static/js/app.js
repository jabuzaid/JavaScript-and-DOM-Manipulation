// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);
function buildTable(ufoData) {
    tbody.html("");
    // Step 1: Loop Through `data` and console.log each weather report object
    ufoData.forEach(function(dataRow) {

        console.log(dataRow) ;
    
    // Step 2:  Use d3 to append one table row `tr` for each weather report object
    // Don't worry about adding cells or text yet, just try appending the `tr` elements.
        var row = tbody.append("tr");
    
    // Step 3:  Use `Object.entries` to console.log each weather report value
        Object.entries(dataRow).forEach(function([key, value]) {
            console.log(key, value);
    
    // Object.keys(weatherReport) - ["weekday", "date", "high", "low"]
    // Object.values(weathrReport) - ["sun", " July 1", 76, 63]
    // Object.entries(weatherReport) - [["weekday", "Sun"], ["date", "July 1"]]
    
    // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
            var cell = row.append("td");
    
    // Step 5: Use d3 to update each cell's text with
    // weather report values (weekday, date, high, low)
            cell.text(value);
        })
    })


}

buildTable(tableData);

d3.select("#filter-btn").on("click", handleClick);

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
























// YOUR CODE HERE!
