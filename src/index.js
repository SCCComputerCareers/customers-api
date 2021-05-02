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
console.log(process.env.MONGO_URI);
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const server = process.env.SERVER;
const database = process.env.DATABASE;

// const connStr = `mongodb://${server}/${database}`;
const connStr = `mongodb+srv://${username}:${password}@${server}/${database}?retryWrites=true&w=majority`;

var mongoose = require('mongoose');
mongoose.connect(connStr, {useNewUrlParser: true, useUnifiedTopology: false});

app.use((req, res, next) => {
    console.log(`${new Date().toString()} ===> ${req.originalUrl}`);
    next();
});

app.use(express.urlencoded({
    extended: true
}
));

app.use(express.json());

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


