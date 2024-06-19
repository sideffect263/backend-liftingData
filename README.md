# 🏗️🖥️ Lifting Data Server

Welcome to the **Lifting Data Server!** This server application provides an API to serve CSV data related to lifting equipment and safety. It fetches data based on the specified year and delivers it in a structured format. 

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)


## Introduction
The Lifting Data Server offers an easy and efficient way to access data about lifting equipment and safety. It serves CSV data for different years through a simple API.

## Features
- 📋 **Data Retrieval**: Fetch data for a specific year from CSV files.
- 📂 **Structured Data**: Provides data in a structured JSON format.
- 🌐 **Cross-Origin Resource Sharing (CORS)**: Enabled for easy integration with other applications.

## Technologies Used
- **Backend**: Node.js, Express.js
- **CSV Parsing**: csv-parser
- **Deoployment**: Render 

## Installation
Follow these steps to set up the project locally:

### Clone the Repository
```bash
git clone https://github.com/sideffect263/backend-liftingData.git
cd backend-liftingData
```

Install Dependencies
```bash
npm install
Run the Server
npm start

```



## Usage
- 🌐 The server will be running on [https://liftingdataserver.onrender.com/](https://liftingdata-api.onrender.com/).
- 📄 Use the provided API endpoints to fetch data.

## API Endpoints

### Get Data by Year
Fetches the CSV data for the specified year.

- **URL**: `/data/`
- **Method**: `GET`
- **URL Params**: `year=[integer]`
- **Success Response**:
  - **Code**: `200`
  - **Content**: `[ { "Code": "value", "Title": "value", "Fatalities": "value", "Percent": "value" }, ... ]`
- **Error Response**:
  - **Code**: `404`
  - **Content**: `{ "error": "Data not found" }`

## Project Structure
backend-liftingData/
├── data/
│   ├── oiics_2010.csv
│   └── oiics_2011.csv
├── server.js
├── package.json
├── package-lock.json
└── README.md

