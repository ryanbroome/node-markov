/** Command-line tool to generate Markov text. */

// require needed modules to read a file and make a basic GET request, require our MarkovMachine, save command line arguments to args
const fs = require("fs");
const { MarkovMachine } = require("./markov.js");
const axios = require("axios");
const args = process.argv;

// instantiate a new MarkovMachine with text data and call the makeText method to print 100 words.
function handleOutput(text) {
  const mm = new MarkovMachine(text);
  console.log(mm.makeText(100));
}

// read a file when given a path parameter , print error if any otherwise feed it to the handler
function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
    } else {
      handleOutput(data);
    }
  });
}
// try to make a get request when given a url, use the response data to feed the handler if success, print the error if failure
async function webCat(url) {
  try {
    let resp = await axios.get(url);
    handleOutput(resp.data);
  } catch (err) {
    console.error(`Error fetching ${url} : ${err}`);
    process.exit(1);
  }
}

// declare path
let path;

// lets checkout the command line arguments, if theres a "file" or "url" flag lets call some functions using the 4th argument aka the file to read's path
if (args[2] === "file") {
  path = args[3];
  cat(path);
} else if (args[2] === "url") {
  path = args[3];
  webCat(path);
}
