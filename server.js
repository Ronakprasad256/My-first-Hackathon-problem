const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const productRouter = require("./router/productRouter");


const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server is running on 5000!'));
mongoose
    .connect("mongodb://127.0.0.1:27017/hackathon")
    .then(() => console.log("DB Running"))
    .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/products", productRouter);