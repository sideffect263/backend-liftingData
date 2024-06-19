#🏗️ Lifting Data Server
Welcome to the Lifting Data Server! This server application provides an API to serve CSV data related to lifting equipment and safety. It fetches data based on the specified year and delivers it in a structured format.

Table of Contents
Introduction
Features
Technologies Used
Installation
Usage
API Endpoints
Project Structure
Contributing
License
Introduction
The Lifting Data Server offers an easy and efficient way to access data about lifting equipment and safety. It serves CSV data for different years through a simple API.

Features
📋 Data Retrieval: Fetch data for a specific year from CSV files.
📂 Structured Data: Provides data in a structured JSON format.
🌐 Cross-Origin Resource Sharing (CORS): Enabled for easy integration with other applications.
Technologies Used
Backend: Node.js, Express.js
CSV Parsing: csv-parser
Installation
Follow these steps to set up the project locally:

Clone the Repository:

bash
Copy code
git clone https://github.com/sideffect263/backend-liftingData.git
cd backend-liftingData
Install Dependencies:

bash
Copy code
npm install
Run the Server:

bash
Copy code
npm start
Usage
🌐 The server will be running on http://localhost:5000.
📄 Use the provided API endpoints to fetch data.
API Endpoints
Get Data by Year
Fetches the CSV data for the specified year.

URL: /data/:year
Method: GET
URL Params: year=[integer]
Success Response:
Code: 200
Content: [ { "Code": "value", "Title": "value", "Fatalities": "value", "Percent": "value" }, ... ]
Error Response:
Code: 404
Content: { error: "Data not found" }
Project Structure
kotlin
Copy code
backend-liftingData/
├── data/
│   ├── oiics_2010.csv
│   └── oiics_2011.csv
├── server.js
├── package.json
├── package-lock.json
└── README.md
data/: CSV data files
server.js: Main server file
package.json: Project metadata and dependencies
README.md: Project documentation
Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
