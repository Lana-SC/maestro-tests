function verifyProjectSync() {
    var projectId = output.projectId;  // Retrieve stored Project ID
    var url = "https://test.sitecapture.com/customer_api/2_0/project/" + projectId;

    var headers = {
        "Authorization": "Basic bGlzYXFhLXNmci1hZG1pbjp0ZXN0",
        "API_KEY": "QPDEHDFA2WCL",
        "Content-Type": "application/json"
    };

    var response = http.get(url, { headers: headers });

    if (!response.ok) {
        throw new Error("❌ Failed to verify project sync! Status: " + response.status);
    }

    var projectData = json(response.body);
    console.log("✅ Project Data Retrieved: ", JSON.stringify(projectData, null, 2));

    if (projectData.status !== "synced") {
        throw new Error("❌ Project is not fully synced! Current status: " + projectData.status);
    }

    console.log("✅ Project Sync Verified!");
    output.syncStatus = "success";
}

verifyProjectSync();
