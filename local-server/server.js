const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Change the port if needed (e.g., 4000)

app.use(bodyParser.json());

// In-memory storage
let storedData = {};

// Endpoint to store randomValue
app.put('/store', (req, res) => {
    const { randomValue } = req.body;
    if (randomValue) {
        storedData.randomValue = randomValue;
        res.status(200).send({ message: 'Value stored successfully.' });
    } else {
        res.status(400).send({ error: 'randomValue is missing.' });
    }
});

// Endpoint to retrieve randomValue
app.get('/retrieve', (req, res) => {
    if (storedData.randomValue) {
        res.status(200).send({ randomValue: storedData.randomValue });
    } else {
        res.status(404).send({ error: 'No value found.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});