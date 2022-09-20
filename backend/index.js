// const express = require("express")
// const mongoose = require("mongoose")
// const bodyParser = require("body-parser")
// const cors = require("cors")

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';


// Routers
import vehicleRouter from './routes/vehicle.js';
import branchRouter from './routes/branch.js';
import employeeRouter from './routes/employee.js';
import orderRouter from './routes/order.js';

// Constants
//const URL = 'mongodb+srv://hirusha:it20659158@limali.smzrw.mongodb.net/limali_db?retryWrites=true&w=majority'
const URL = 'mongodb+srv://itp2022:itp2022@cluster0.sqoif.mongodb.net/limali_db?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8060

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))


mongoose.connect(URL, {
   // useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.once("open", () => {
    console.log("mongo_db connection success!")
})

app.use('/vehicle', vehicleRouter);
app.use('/branch', branchRouter);
app.use('/employee', employeeRouter);
app.use('/order', orderRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))