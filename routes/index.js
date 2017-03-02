var express = require('express');
var router = express.Router();

module.exports = function (name , location , weather) {
    // var data = {};
    /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

    router.get('/' , function (req, res, next) {

        location.getLocation(function (location) {
            // console.log(location.country + '\t' + location.city);
            var url = weather.setLocation(location.country , location.city );
            weather.getWeather(url , function (data) {
                // if (data.forecast.simpleforecast)
                //     console.log(data.forecast.simpleforecast);
                // else
                //     console.log(data.response.results);

                try{
                    console.log(data.forecast.simpleforecast);
                    res.render('Home' , { simple_forecast: data.forecast.simpleforecast.forecastday ,
                        txt_forecast: data.forecast.txt_forecast.forecastday });

                }catch (e){
                    var new_url = data.response.results[0].l;
                    var url = weather.setLocation(null, null, new_url);
                    console.log(url);
                    weather.getWeather(url , function (data) {
                        // console.log(data.forecast.simpleforecast);
                        // console.log("low is :"+ JSON.stringify(data.forecast.simpleforecast.forecastday[0].low));
                        // console.log("high is :"+ JSON.stringify(data.forecast.simpleforecast.forecastday[0].high));
                        // console.log("allday :"+ JSON.stringify(data.forecast.simpleforecast.forecastday[0].qpf_allday));
                        // console.log("day :"+ JSON.stringify(data.forecast.simpleforecast.forecastday[0].qpf_day));
                        // console.log("night :"+ JSON.stringify(data.forecast.simpleforecast.forecastday[0].qpf_night));
                        // console.log("date :"+ JSON.stringify(data.forecast.simpleforecast.forecastday[0].date));
                        // console.log(data.forecast.txt_forecast.forecastday);
                        res.render('Home' , { simple_forecast: data.forecast.simpleforecast.forecastday ,
                                              txt_forecast: data.forecast.txt_forecast.forecastday });

                    })

                }
            })
        });

        // res.render('Home' , {name: name});
    })

    return router;
}

// module.exports = router;
