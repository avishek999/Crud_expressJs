const express = require('express');
const mongoose = require('mongoose');
const Product = require('./Models/Products.model');
const productRoute = require('./Routes/Products.route');
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB!`,mongoose.connection.db.databaseName))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(express.json());
app.use(express.urlencoded({extended:fazlse}));

//Routes
app.get('/', function(req, res){
    res.send('Server is Running')
})

app.use('/api/products', productRoute);


app.listen(port ,()=>{
    console.log(`Server is Running on ${port}`)
});