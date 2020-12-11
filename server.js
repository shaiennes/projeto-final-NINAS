const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidos das NINAS está rodando no http://localhost:${PORT}`)
})
module.exports = app;
