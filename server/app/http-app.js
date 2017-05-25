const path = require('path');

const express = require('express');
const cookieParser = require('cookie-parser')();
const bodyParser = require('body-parser');

const app = express();

app.use(cookieParser);
app.use(bodyParser.json({ strict: false }));
app.use(express.static(path.resolve(__dirname, './static/')));

module.exports = app;