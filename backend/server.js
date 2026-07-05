const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");


const weatherRoutes =
require("./routes/weatherRoutes");


const errorHandler =
require("./middleware/errorHandler");


dotenv.config();


const app = express();


// Middleware

app.use(cors());

app.use(express.json());



// Routes

app.use(
"/api/weather",
weatherRoutes
);



// Error Handler

app.use(errorHandler);



// Server

const PORT =
process.env.PORT || 5000;


app.listen(PORT,()=>{

    console.log(
    `Server running on ${PORT}`
    );

});