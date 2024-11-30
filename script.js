const weatherdata = document.querySelector(".weather-data");
const locations = document.querySelector(".location");
const search = document.querySelector(".search");

search.addEventListener("click", () =>{
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locations.value}?key=XRKANVJM8G9TMZF9T9P3UHZ29`;
    fetch(url, {mode: "cors"})
    .then(function (weatherData){
        return weatherData.json();
    })
    .then(function (weather){
        const w = {
            address: weather.address,
            "full address": weather.resolvedAddress,
            latitude: weather.latitude,
            longitude: weather.longitude,
            "weather description": weather.description,
            temperature: weather.currentConditions.temp
        };
        const weatherDetails = JSON.stringify(w);
        weatherdata.textContent = weatherDetails;
        locations.value = "";
    });
});