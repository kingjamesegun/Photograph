const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./src/routes/userRoutes");
const authRoute = require("./src/routes/authRoutes");
const postRoute = require("./src/routes/postRoutes");
const bookingRoute = require("./src/routes/bookingRoutes")
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')

const PORT = 5000;

dotenv.config();

// 'mongodb://localhost:27017/test'
mongoose.connect('mongodb://localhost:27017/photography', {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
    console.log("Connetcted to mongodb")
});

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("common"));


const options = {
    definition: {
        swagger: '2.0',
        info: {
            title: 'API for Photography website',
            version: '1.0.0'
        },
    },
    apis: ['src/routes/authRoutes.js']
}

const swaggerDocs = swaggerJsDoc(options)
console.log(swaggerDocs)

// ROUTES

app.use("/api/users", userRoute);
app.use("/api/auths", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/booking", bookingRoute);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))


// RUNNING THE APP
app.listen(PORT, ()=>{
    console.log( `Server is running on port : ${PORT}`);
})