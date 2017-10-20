const PORT = 8787;
const express = require('express');
const app = express();
const path = require('path');

require('./Server/config/mongoose.js');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/Client/dist')));

const routes_settter = require('./Server/config/routes.js');

routes_settter(app);

app.listen(PORT, () => {
    console.log("listening on port "+PORT)
});