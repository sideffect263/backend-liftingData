const express = require('express');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());

// Function to read CSV data
const readCSV = async (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (err) => reject(err));
    });
};

// Serve CSV data
app.get('/data/:year', async (req, res) => {
    const year = req.params.year;
    const filePath = path.join(__dirname, `./data/oiics_${year}.csv`);
    
    try {
        console.log(`Trying to open - ${filePath}`);
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`);
            return res.status(404).json({ error: "Data not found" });
        }
        
        const data = await readCSV(filePath);
        console.log("Opened file successfully");
        res.status(200).json(data);
    } catch (err) {
        console.error("Error opening file", err);
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
});

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log('Hello World endpoint hit');
    res.send('Hello World!');
});

app.listen(PORT, '0.0.0.0' , () => {
    console.log(`Server running on port ${PORT}`);
});
