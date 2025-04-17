// script.js

// 1) If you want to be ultra-safe, define output if it’s not already defined:
if (typeof output === "undefined") {
    var output = {};
  }
  if (typeof output.script === "undefined") {
    output.script = {};
  }
  
  // 2) Generate random value
  function generateRandomValue(len) {
    // Rhino doesn't support default parameters: (len = 6)
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
  
  // 3) Build URL - no template literals, just string concatenation
  var binUrl = "https://api.jsonbin.io/v3/b/" + BIN_ID;
  
  // 4) Prepare headers
  var headers = {
    "Content-Type": "application/json",
    "X-Master-Key": X_MASTER_KEY
  };
  
  // 5) Send PUT request via Maestro's HTTP API
  var response = http.put(binUrl, {
    headers: headers,
    body: JSON.stringify({ randomValue: randomValue })
  });
  
  // 6) Output for debugging
  output.script.randomValue = randomValue;
  output.script.responseStatus = response.status;
  output.script.responseOk = response.ok;
  output.script.responseBody = response.body;