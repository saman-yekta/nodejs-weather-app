
module.exports = function (request) {

    var weather_forcast_10days = [];


    weather_forcast_10days.setLocation = function (country , city , new_params) {
        if (typeof country != 'undefined' && typeof city != 'undefined' && typeof new_params == 'undefined')
            var url = 'http://api.wunderground.com/api/c8fdca5c89a6f786/forecast10day/lang:FA/q/'+country+'/'+city+'.json';
        else
            var url = 'http://api.wunderground.com/api/c8fdca5c89a6f786/forecast10day/lang:FA'+new_params+'.json';
        return url;
    };

    weather_forcast_10days.getWeather = function (url , callback) {
        request({
            url: url,
            json: true
        } , function (err, response, body) {
            if (!err){
                callback(body);
            }else {
                console.log(err);
            }
        })
    }

    return weather_forcast_10days;

}