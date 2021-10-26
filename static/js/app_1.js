// import the data from data.js 
const tableData = data; 
// reference the html table using d3
// declared a variable, tbody, and used d3 to search for the <tbody>
var tbody = d3.select("tbody"); 

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      //reference one object from the array of UFO sightings 
      // telling it to put each sighting onto its own row of data. 
      // val argument represents each item in the object 

      Object.values(dataRow).forEach((val) => {
          //create a variable to hold the values that will be apended 
        let cell = row.append("td");
        // add the values to the cell 
        cell.text(val);
        }
      );
    });
  }
  // add filters 
  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
