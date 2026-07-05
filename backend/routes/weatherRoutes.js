const express = require("express");


const router = express.Router();


const limiter =
require("../middleware/rateLimiter");


const {

    getWeather

}=require("../controllers/weatherController");



// External API Route

router.get(
"/",
limiter,
getWeather
);



module.exports = router;