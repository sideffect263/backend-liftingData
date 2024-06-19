Lifting Data Server
Description
The Lifting Data Server is an Express.js application designed to serve CSV data related to lifting equipment and safety. It provides an API to fetch data from CSV files based on the year specified in the request.

Table of Contents
Installation
Usage
API Endpoints
Environment Variables
Deployment
Contributing
License
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/sideffect263/backend-liftingData.git
cd backend-liftingData
Install dependencies:

bash
Copy code
npm install
Usage
To start the server, run:

bash
Copy code
npm start
This will start the server on the port specified in the environment variable or default to port 5000.

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
Environment Variables
The following environment variables are used by the application:

PORT: The port on which the server will run. Default is 5000.
Deployment
To deploy this server on Render:

Create a Render Account: Sign up at Render.
Create a New Web Service:
Link your GitHub repository.
Set the build and start commands:
Build Command: npm install
Start Command: npm start
Set environment variables as needed (PORT will be managed by Render).
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

