const args = process.argv.slice(2);

const request = require('request');

request("https://api.thecatapi.com/v1/breeds/search?q=" + args[0], (error, response, body) => {
  // Print the error if one occurred
  if (error) {
    console.log('error:', error);
    return;
  }
  // Print the response status code if a response was received
  console.log('statusCode:', response && response.statusCode);
 
  const data = JSON.parse(body);
  
  if (data.length < 1) {
    console.log("Breed Not Found");
    return;
  } else {
    console.log(data[0].description);
  }
});
