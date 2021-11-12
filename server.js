const express = require('express');
const path = require("path");
const util = require('util');
const fs = require('fs');

const app = express();

// const bodyParser = require("body-parser");

// app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

app.get('/empData', (req, res) => {
    console.log("Hello, I came here...");
    // res.json({ "data": "Hello" })
    fs.readFile('./mock_data.json',(err,jsonString)=>{
        res.json({data : jsonString});
    })
})