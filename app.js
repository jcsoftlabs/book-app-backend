const express = require('express');
const app = express();

const bookRoutes = require('./api/routes/book');
const userRoutes = require('./api/routes/user');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jerome:Love300mac!@book-cls-iuhw3.mongodb.net/test?retryWrites=true&w=majority');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
