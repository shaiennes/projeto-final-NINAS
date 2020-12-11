const app = require('./src/app');


const port = process.env.PORT


app.listen(port, () => console.log(`Servidor das NINAS está rodando no http://localhost:${port}`))

module.exports = app;
