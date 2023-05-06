const express = require('express');
const cors = require('cors');
require('dotenv').config();
const recipeRoute = require("./routes/recipeRoute");
const connection = require('./dbconnection/dbconnection');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/recipe',recipeRoute);

connection.once('open',()=>{
    console.log('Product Service DB connected successfully!!');
});

app.listen(PORT,()=>{
    console.log(`Server is running on PORT : ${PORT}`);
})