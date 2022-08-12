var cookie = document.querySelector("#cookie");

var tempHighsCelsius = [24, 27, 21, 26];
var tempLowsCelsius = [18, 19, 16, 21];

var tempHighsFahrenheit = [75, 80, 69, 78];
var tempLowsFahrenheit = [65, 66, 61, 70];

function loadingMessage() {
    alert("Loading weather report...");
}

function convertTemperatures(element) {
    var scale = element.value;
    var temperatureSpans = document.querySelectorAll(".row p span");
    if (scale == "celsius") {
        for (var index = 0; index < tempHighsCelsius.length; index++) {
            temperatureSpans[index * 2].innerText = tempHighsCelsius[index];
            temperatureSpans[index * 2 + 1].innerText = tempLowsCelsius[index];
        }
    }
    else { // scale is set to "F" for Fahrenheit
        for (var index = 0; index < tempHighsFahrenheit.length; index++) {
            temperatureSpans[index * 2].innerText = tempHighsFahrenheit[index];
            temperatureSpans[index * 2 + 1].innerText = tempLowsFahrenheit[index];
        }
    }
}

function closeCookie() {
    cookie.remove();
}