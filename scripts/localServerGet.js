// retrieveValue.js

// Ensure the output object is defined
if (typeof output === "undefined") {
    output = {};
}

// Retrieve the value from the local server
const LOCAL_SERVER_URL = "http://localhost:3000";
const response = http.get(`${LOCAL_SERVER_URL}/retrieve`, {
    headers: { "Content-Type": "application/json" },
});

// Parse the response and store the retrieved value
try {
    if (response.ok) {
        const data = json(response.body); // Parse the JSON response
        const randomValue = data.randomValue || "DefaultFallback"; // Use fallback if randomValue is missing
        output.result = String(randomValue); // Ensure the output is strictly a string
        console.log("DEBUG: Retrieved and formatted value: " + output.result);
    } else {
        console.log("DEBUG: Failed to retrieve value. HTTP Status: " + response.status);
        output.result = "DefaultFallback"; // Set fallback in case of failure
    }
} catch (e) {
    console.log("DEBUG: Error parsing response: " + e.message);
    output.result = "DefaultFallback"; // Set fallback in case of error
}

// Log the output for debugging
console.log("DEBUG: Final output result: " + output.result);