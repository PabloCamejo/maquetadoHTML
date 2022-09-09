const express = require('express');
const path = require('path');
const PORT = 3031;
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})