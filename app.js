const express = require('express');
const path = require('path');
const PORT = 3030;

const app = express();


app.listen(PORT, () => {
    console.log(`Server listen in ${PORT}`);
})


