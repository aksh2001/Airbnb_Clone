const express = require('express');
const mongoose = require('mongoose');

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const hotelDataAddedToDBRouter = require("./routes/dataImport.router");
const categoriesDataAddedToDBRouter = require("./routes/categoryImport.router");

const connectDB = require("./config/dbconfig");

const app = express();

app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/",(req,res) => {
    res.send("My First website")
})

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("api/categoryData", categoriesDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);

mongoose.connection.once("open",() => {
    console.log("connected to DB");
    app.listen(process.env.PORT || PORT, () =>{
        console.log("Server is up and running")
    })
})