
module.exports = function location(request ) {

    var url = 'http://ip-api.com/json/';
    var location = {};

        location.getLocation = function(loc){
            var data = {};
            request({
                url: url,
                json: true
            } , function (err , response , body) {
                if (!err){
                    loc(body);
                }else {
                    console.log(err);
                }
            });
            return data
        }

    return location;
};
