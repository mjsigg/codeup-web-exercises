"use strict";


const URL = "https://api.openweathermap.org/data/2.5/onecall";


$.get(URL, {
    APPID: OPEN_WEATHER_APPID,
    lat: 40.7485452,
    lon: -73.9879522,
    units: "imperial"
}).done(function (data) {

    console.log(data)

     for(let i = 0; i < data.daily.length-3; i++) {

         let dailyTemperature = $('#daily-temperature')
         let dailyTemperatureHTML = '<li class="col text-center">'+ data.daily[i].temp.day + '</li>'

         dailyTemperature.append(dailyTemperatureHTML)

         let dailyTempDayNight = $('#daily-temp-day-eve')
         let dailyTempDayNightHTML =
             '<li class="col text-center">' +
             'Day: ' +
             data.daily[i].temp.day +
             ' Night: ' +
             data.daily[i].temp.eve +
             '</li>'

         dailyTempDayNight.append(dailyTempDayNightHTML)

         let dailyTemperatureMin = $('#daily-temp-min-max')
         let dailyTemperatureMinMaxHTML = '<li class="col text-center">'+ 'Min: '+data.daily[i].temp.min + ' Max: '+ data.daily[i].temp.max + '</li>'

         dailyTemperatureMin.append(dailyTemperatureMinMaxHTML)

     }

    let bigOlTemp = $('#big-ol-temp')
    let bigOlTempHTML = '<h1 class="col">'+ data.current.temp + '</h1>'

    bigOlTemp.append(bigOlTempHTML)

    let currentFeelsLike = '<h2 class="col">'+'Feels like: '+ data.current.feels_like+'</h2>'

    bigOlTemp.append(currentFeelsLike)

    let weatherIconCurrent =
        '<img style="height: 200px" src="http://openweathermap.org/img/wn/'+
        data.daily[0].weather[0].icon +
        '@2x.png" alt= >'
    let bigOlImage = $('#big-ol-image')

    bigOlImage.append(weatherIconCurrent)

    let searchBox = $('#search-box')
    let searchBoxHTML = '<input  class="col-10" type="text" placeholder="search by address"/> <button class="col">Go</button>'

    searchBox.append(searchBoxHTML)


});


mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.425], // starting position [lng, lat]
    zoom: 4 // starting zoom


});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
// When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    })

);

let marker = new mapboxgl.Marker()
    .setLngLat([-98.4946, 29.425])
    .addTo(map)
    .setPopup(new mapboxgl.Popup()
        .setHTML("<h1>Hello World!</h1>"))
    .setDraggable(true)

MARKER.on("dragend", function () {
    LONG_LAT = MARKER.getLngLat();
    // document.getElementById("place").innerHTML = LONG_LAT.lng + ", " + LONG_LAT.lat;
    MAP.flyTo({center: [LONG_LAT.lng, LONG_LAT.lat]});
    reverseGeocode(LONG_LAT, MAPBOX_API_KEY).then(function (data) {
        document.getElementById("place").innerHTML = data;
    })
})





// Geocode the string to receive the LAT, LONG to plug in for our OpenWeatherAPI Call.
// geocode("Austin, US", MAPBOX_API_KEY).then(function (data) {
//     console.log(data)
//     $.get(URL, {
//         APPID: OPEN_WEATHER_APPID,
//         lat: data[1],
//         lon: data[0],
//         units: "imperial"
//     }).done(function (results) {
//         console.log(results);
//         $("#icon").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')")
//     })
// })

    // (function() {
    //     "use strict";
    //     $('#monday-box').onload(function () {
    //         $.get('data/blog.json').done(function(blog) {
    //             blog.forEach(function(blog){
    //                 let dataTitle = '<h1>'+ blog.title + '</h1>'
    //                 let dataContent = '<h1>'+ blog.content + '</h1>'
    //                 let dataCategories = '<h1>'+ blog.categories + '</h1>'
    //
    //                 $('#insert-title').append(dataTitle)
    //                 $('#insert-content').append(dataContent)
    //                 $('#insert-categories').append(dataCategories)
    //             })
    //         })
    //     })