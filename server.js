const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/userRoutes");
const authRoute = require("./routes/authRoutes");
const postRoute = require("./routes/postRoutes");
const bookingRoute = require("./routes/bookingRoutes")

const PORT = 5000;

dotenv.config();

// 'mongodb://localhost:27017/test'
mongoose.connect('mongodb://localhost:27017/photography', {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("Connetcted to mongodb")
});

// MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


// ROUTES
app.use("/api/users", userRoute);
app.use("/api/auths", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/booking", bookingRoute);


// RUNNING THE APP
app.listen(PORT, ()=>{
    console.log( `Server is running on port : ${PORT}`);
})