const express = require('express');
const path = require('path');
// app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3030;

const app = express();


app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
})

