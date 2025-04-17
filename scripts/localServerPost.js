// post.js

// Step 1: Define output if it's not already defined
if (typeof output === "undefined") {
  var output = {};
}
if (typeof output.script === "undefined") {
  output.script = {};
}

// Step 2: Generate a random value
function generateRandomValue(len) {
  if (len == null) {
      len = 6;
  }

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";
  for (var i = 0; i < len; i++) {
      var index = Math.floor(Math.random() * chars.length);
      result += chars.charAt(index);
  }
  return result;
}

var randomValue = generateRandomValue(6);

// Step 3: Prepare the local server URL
var LOCAL_SERVER_URL = "http://localhost:3000"; // Ensure this is the correct URL
var storeUrl = LOCAL_SERVER_URL + "/store";

// Step 4: Prepare headers
var headers = {
  "Content-Type": "application/json"
};

// Step 5: Send a PUT request to the local server to store the value
var response = http.put(storeUrl, {
  headers: headers,
  body: JSON.stringify({ randomValue: randomValue })
});

// Step 6: Log and output the random value
console.log(`Generated Random Value: ${randomValue}`);
output.script.randomValue = randomValue;
output.script.responseStatus = response.status;
output.script.responseOk = response.ok;
output.script.responseBody = response.body;