const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
// const bodyParser = require("body-parser");

// app.use(bodyParser.json());

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

app.get('/empData', (req, res) => {
    console.log("Hello, I came here...");
    res.send({ "data": "Hello" })
    // fs.readFile('./mock_data.json',(err,jsonString)=>{
    //     res.json({data : jsonString});
    // })
})