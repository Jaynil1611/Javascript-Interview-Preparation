/**
 * https://www.naukri.com/code360/library/how-to-read-csv-file-in-javascript
 *
 * readInterface.on("line", ...): It is called for each line in the CSV file. It splits each line using a comma as the delimiter and adds it as an array to the output array.
 * readInterface.on("close", ...): It is called when the end of the file is reached. The entire file data is now read in the output.
 * readInterface.on("error", ...): It handles the errors and logs an error message.
 */

/**
 * When we use the readFile() to read the CSV file, it also takes much memory because it reads the whole csv file at once
 * The stream helps the user to access a large amount of data by creating simpler chunks of larger data.
 */

const fs = require("fs");
const readLine = require("readline");

// Create a read stream
const stream = fs.createReadStream("./sampleCSV.csv");

// Create a readline interface
const readInterface = readLine.createInterface({ input: stream });

const output = [];

// Event handler for reading lines
readInterface.on("line", (row) => {
  output.push(row.split(","));
});

// Event handler for the end of file
readInterface.on("close", () => {
  console.log(output);
});

// Event handler for handling errors
readInterface.on("error", (err) => {
  console.error("Error reading the CSV file:", err);
});
