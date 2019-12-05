require('dotenv').config()
const express = require('express');
const app = express()
const customer = require('./customer')
const bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.set('views', __dirname + '/../views');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// route
app.get('/customers', async (req, res) => {
    const result = await customer.GetCustomers
    
    res.render("index", {
        customers: result
    })
})

app.get('/customers/pivot', async (req, res) => {
    const result = await customer.PivotCustomers
    
    res.render("pivot", {
        customers: result
    })
})

const port = process.env.PORT
app.listen(port, () => {
    console.log("listening on port : " + port)
})