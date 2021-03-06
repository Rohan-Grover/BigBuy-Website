const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/BigBuy', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})
const vendorRouter = require('./routes/vendor');
const CustomerRouter = require('./routes/customer');

app.use('/vendor', vendorRouter);
app.use('/customer', CustomerRouter);


app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
});
