"use strict";


const URL = "https://api.openweathermap.org/data/2.5/onecall";

$.get(URL, {
    APPID: OPEN_WEATHER_APPID,
    lat: 40.7485452,
    lon: -73.9879522,
    units: "imperial"
}).done(function (results) {
    console.log(results)
})

// Geocode the string to receive the LAT, LONG to plug in for our OpenWeatherAPI Call.
geocode("Austin, US", MAPBOX_API_KEY).then(function (data) {
    console.log(data)
    $.get(URL, {
        APPID: OPEN_WEATHER_APPID,
        lat: data[1],
        lon: data[0],
        units: "imperial"
    }).done(function (results) {
        console.log(results);
        $("#icon").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')")
    })
})

