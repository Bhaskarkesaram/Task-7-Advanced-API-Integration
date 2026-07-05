// =====================================
// Backend API URL
// =====================================

const API_URL =
"http://localhost:5000/api/weather";



// =====================================
// Get Elements
// =====================================

const cityInput =
document.getElementById("cityInput");


const searchBtn =
document.getElementById("searchBtn");


const cityName =
document.getElementById("city");


const temperature =
document.getElementById("temperature");


const condition =
document.getElementById("condition");


const humidity =
document.getElementById("humidity");


const wind =
document.getElementById("wind");


const error =
document.getElementById("error");


const weatherCard =
document.getElementById("weatherCard");



// Hide initially

weatherCard.style.display = "none";



// =====================================
// Fetch Weather Function
// =====================================


async function getWeather(){


    const city =
    cityInput.value.trim();



    if(city===""){


        error.innerHTML =
        "Please enter a city name ⚠️";


        return;


    }



    try{


        error.innerHTML = "";



        const response =
        await fetch(

        `${API_URL}?city=${city}`

        );



        const data =
        await response.json();




        if(data.success){



            weatherCard.style.display =
            "block";



            cityName.innerHTML =
            data.city;



            temperature.innerHTML =
            `${data.temperature} °C`;



            condition.innerHTML =
            data.condition;



            humidity.innerHTML =
            `${data.humidity}%`;



            wind.innerHTML =
            `${data.wind} m/s`;



        }


        else{


            weatherCard.style.display =
            "none";



            error.innerHTML =
            data.message;



        }




    }


    catch(err){



        weatherCard.style.display =
        "none";



        error.innerHTML =
        "Unable to fetch weather data ❌";



    }



}




// =====================================
// Button Event
// =====================================


searchBtn.addEventListener(
"click",
getWeather
);




// =====================================
// Enter Key Search
// =====================================


cityInput.addEventListener(
"keypress",
(e)=>{


    if(e.key==="Enter"){


        getWeather();


    }


});