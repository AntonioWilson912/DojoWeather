var cookie = document.querySelector("#cookie");
var temperatureScale = document.querySelector("#temperature-scale");

var currentCity = document.querySelector("#current-city");

var temperatureSpans = document.querySelectorAll(".row p span");

var weatherImgs = document.querySelectorAll("img.card-img");
var weatherSpans = document.querySelectorAll("div.flex.card > p");

var cityIndex = 0;

// initial scale will be celsius
var temperatures = [
    {
        city: "Sist-Ar System",
        lows: [25, 30, 27, 29],
        highs: [41, 36, 43, 51],
        weather: ["some sun", "some sun", "some rain", "some rain"]
    },
    {
        city: "Mars",
        lows: [3, 1, 7, 4],
        highs: [10, 14, 9, 13],
        weather: ["some storms", "some clouds", "some rain", "some sun"]
    },
    {
        city: "Mordor",
        lows: [10, 15, 16, 15],
        highs: [21, 24, 22, 29],
        weather: ["some clouds", "some sun", "some storms", "some rain"]
    },
    {
        city: "Narnia",
        lows: [19, 4, 11, 21],
        highs: [26, 17, 20, 31],
        weather: ["some sun", "some sun", "some clouds", "some clouds"]
    }
];

function loadWeather(cityElement) {
    alert("Loading weather report...");
    var tempCity = currentCity.innerText;
    currentCity.innerText = cityElement.innerText;
    cityElement.innerText = tempCity;

    // select the city from the temperatures object
    for (var i = 0; i < temperatures.length; i++) {
        if (temperatures[i].city == currentCity.innerText) {
            cityIndex = i;
            break;
        }
    }

    // load up all the temperatures
    loadTemperatures();

    // convert all the images and weather descriptions
    for (var index = 0; index < temperatures[cityIndex].weather.length; index++) {
        weatherSpans[index].innerText = temperatures[cityIndex].weather[index];
        if (weatherSpans[index].innerText == "some rain") {
            weatherImgs[index].src = "./assets/some_rain.png";
            weatherImgs[index].alt = "some rain";
        }
        else if (weatherSpans[index].innerText == "some sun") {
            weatherImgs[index].src = "./assets/some_sun.png";
            weatherImgs[index].alt = "some sun";
        }
        else if(weatherSpans[index].innerText == "some storms") {
            weatherImgs[index].src = "./assets/some_storms.png";
            weatherImgs[index].alt = "some storms";
        }
        else {
            weatherImgs[index].src = "./assets/some_clouds.png";
            weatherImgs[index].alt = "some clouds";
        }
    }
}

function loadTemperatures() {
    var scale = temperatureScale.value;

    if (scale == "celsius") {
        for (var index = 0; index < temperatures[cityIndex].highs.length; index++) {
            temperatureSpans[index * 2].innerText = temperatures[cityIndex].highs[index];
            temperatureSpans[index * 2 + 1].innerText = temperatures[cityIndex].lows[index];
        }
    }
    else {
        // Convert to Fahrenheit
        for (var index = 0; index < temperatures[cityIndex].highs.length; index++) {
            temperatureSpans[index * 2].innerText = Math.round(temperatures[cityIndex].highs[index] * 1.8 + 32);
            temperatureSpans[index * 2 + 1].innerText = Math.round(temperatures[cityIndex].lows[index] * 1.8 + 32);
        }
    }
}

function closeCookie() {
    cookie.remove();
}

cookie.style.visibility = "hidden";

loadTemperatures();


setTimeout(() => {
    cookie.style.visibility = "visible";
}, 5000);