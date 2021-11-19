const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const fs = require('fs');
const app = express();

const empDataJsonFile = require('./mock_data.json')

app.use(cors());

app.use(bodyParser.json())
// const bodyParser = require("body-parser");

// app.use(bodyParser.json());

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

app.get('/empData', (req, res) => {
    console.log("Hello, I came here...");
    // res.send({ "data": "Hello" })
    fs.readFile('./mock_data.json', (err, jsonString) => {
        res.send(JSON.parse(jsonString).empData)
    })
})


app.post('/empData', (req, res) => {
    empDataJsonFile.empData.push(req.body)
    fs.writeFile("./mock_data.json", JSON.stringify(empDataJsonFile), err => {
        if (err) throw err;
        console.log("Done writing");
        res.send(req.body)
    });
})


app.put('/empData', (req, res) => {
    empDataJsonFile.empData = empDataJsonFile.empData.map((x,index) => {
        if(x.id == req.body.id){
            x = req.body
            return x
        }
        else
        return x;
    })
    fs.writeFile("./mock_data.json", JSON.stringify(empDataJsonFile), err => {
        if (err) throw err;
        console.log("Done updating");
        res.send(req.params.id)
    });
})


app.delete('/empData/:id', (req, res) => {
    empDataJsonFile.empData = empDataJsonFile.empData.filter((x) => {
        if (x.id != req.params.id)
            return x;
    })
    fs.writeFile("./mock_data.json", JSON.stringify(empDataJsonFile), err => {
        if (err) throw err;
        console.log("Done writing");
        res.send(req.params.id)
    });
})