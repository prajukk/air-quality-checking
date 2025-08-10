const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS to allow client-side requests
app.use(cors());

// Function to generate random air quality data
const generateRandomData = () => {
    return {
        location: "City Center",
        PM25: (Math.random() * 100).toFixed(1), // Random PM2.5 between 0 and 100
        CO2: (Math.random() * 500).toFixed(1),   // Random CO2 between 0 and 500
    };
};

// Route to get air quality data
app.get('/air-quality', (req, res) => {
    const airQualityData = generateRandomData();
    res.json(airQualityData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
