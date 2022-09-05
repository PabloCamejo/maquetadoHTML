const express = require('express');
const path = require('path');
const PORT = 3030;

const app = express();
 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/lovelace.html'));
});

app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/turing.html'));

app.get('/hamilton', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/hamilton.html'))
})

app.get('/hopper', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/hopper.html'))
})

app.get('/berners-lee', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/views/berners-lee'));
})

app.get('/clarke', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/views/berners-lee'));
})

app.get("/babbage", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/babbage.html'));
})

app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})


