require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My route
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

//database connection
const connectDB = require('./database/dbConnect');
connectDB();


//Middelware
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors());

//Myroutes
app.use("/api", authRoutes );
app.use("/api", userRoutes );

//Port
const port = process.env.PORT || 8000;

//starting a server
app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
});