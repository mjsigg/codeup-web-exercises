"use strict";


const URL = "https://api.openweathermap.org/data/2.5/onecall";


$.get(URL, {
    APPID: OPEN_WEATHER_APPID,
    lat: 40.7485452,
    lon: -73.9879522,
    units: "imperial"
}).done(function (data) {

    let weeklyColumn = $('#weekly-column')
    let weeklyColumnHTML =
        '<li class="col text-center">'+ 'Monday'+ '</li>'+
        '<li class="col text-center">'+ 'Tuesday'+ '</li>'+
        '<li class="col text-center">'+ 'Wednesday'+ '</li>'+
        '<li class="col text-center">'+ 'Thursday'+ '</li>'+
        '<li class="col text-center">'+ 'Friday'+ '</li>'

    weeklyColumn.append(weeklyColumnHTML)





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