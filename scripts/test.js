function getProjectDetails() {
    var url = "https://test.sitecapture.com/customer_api/2_0/project/512269";

    var headers = {
        "Authorization": "Basic bGlzYXFhLXNmci1hZG1pbjp0ZXN0",  // Base64 encoded
        "API_KEY": "QPDEHDFA2WCL",
        "Content-Type": "application/json"
  };

    var response = http.get(url, { headers: headers });

    if (!response.ok) {
        throw new Error("Unexpected response status: " + response.status);
    }

    var projectData = json(response.body);
    
    // Store only relevant details in output
    output.project = projectData;
}

// Run function to get project details
getProjectDetails();