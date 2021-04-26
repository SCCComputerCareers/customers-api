var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

var bodyParser = require('body-parser');
require('dotenv').config();

// Routes:
var personRoute = require('./routes/person');
var customerRoute = require('./routes/customer');
var orderRoute = require('./routes/order');

// DB
console.log(process.env.MONGO_URI)
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

app.use((req, res, next) => {
    console.log(`${new Date().toString()} ===> ${req.originalUrl}`);
    next();
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/test', personRoute);
app.use(customerRoute);
app.use(orderRoute);

app.use((req, res, next) => {
    res.status(404).send('Page not found, sorry!');
});

app.listen(PORT, ()=> {
    console.log(`Server has started on port ${PORT}`);
});


