var axios=require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=a27d9ceacd52f69abfffd5de4acaaaf3&units=metric';

module.exports={
    getTemp:function(location){
        var encodedLocation=encodeURIComponent(location);
        var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if(res.cod && res.message){
               throw new Error(res); 
            } else {
                return res.data.main.temp;
            }
        },function(res){
          throw new Error(res);
        });
    }
}