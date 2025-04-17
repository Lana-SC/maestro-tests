// retrieveFromJsonBin.js

// Ensure the output object is defined
if (typeof output === "undefined") {
    output = {};
}

// 1) Build the URL
var binUrl = "https://api.jsonbin.io/v3/b/" + BIN_ID + "/latest";

// 2) Prepare headers
var headers = {
    "Content-Type": "application/json",
    "X-Master-Key": X_MASTER_KEY
};

// 3) Send GET request to JSONBin
try {
    var response = http.get(binUrl, { headers: headers });

    if (response.ok) {
        var data = json(response.body); // Parse the JSON response
        var randomValue = data.record.randomValue || "DefaultFallback"; // Retrieve the value or fallback
        output.result = String(randomValue); // Ensure output is a string
        console.log("DEBUG: Retrieved random value: " + output.result);
    } else {
        console.log("DEBUG: Failed to retrieve value. HTTP Status: " + response.status);
        output.result = "DefaultFallback"; // Set fallback in case of failure
    }
} catch (e) {
    console.log("DEBUG: Error during retrieval: " + e.message);
    output.result = "DefaultFallback"; // Set fallback in case of error
}

// 4) Log debugging info
console.log("DEBUG: Response status: " + (response ? response.status : "NoResponse"));
console.log("DEBUG: Full output: " + JSON.stringify(output));