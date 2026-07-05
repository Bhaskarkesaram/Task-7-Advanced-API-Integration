const axios = require("axios");
const {
    WEATHER_BASE_URL
}=require("../config/apiConfig");

// =================================
// GET WEATHER DATA
// =================================
const getWeather = async(req,res,next)=>{
    try{
        const city =
        req.query.city;
        if(!city){
            return res.status(400).json({
                success:false,
                message:"City name required"
            });
        }
        const response =
        await axios.get(
        `${WEATHER_BASE_URL}?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
      );
        res.json({
            success:true,
            city:
            response.data.name,
            temperature:
            response.data.main.temp,
            humidity:
            response.data.main.humidity,
            wind:
            response.data.wind.speed,
            condition:
            response.data.weather[0].description
        });
    }
    catch(error){
        res.status(500).json({
            success:false,
            message: error.response?.data?.message || error.message
        });
    }
};

module.exports = {
    getWeather
};