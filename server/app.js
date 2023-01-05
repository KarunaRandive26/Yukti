const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cookie = require('cookie-parser');
//dtabase
dotenv.config({ path: './config.env' });
require('./database/connection.js');
const User = require('./model/userSchema');

app.use(express.json());
app.use(cookie());
app.use(require('./router/auth'));

const middleware = (req, res, next) => {
    console.log("i am");
    next();
}
app.listen(5000);