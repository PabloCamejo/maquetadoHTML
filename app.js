const express = require('express');
const path = require('path');
const PORT = 3030;
const publicPath = path.resolve(__dirname, './public');


const app = express();

app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
})

