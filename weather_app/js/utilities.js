export const getLocation = function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

//windchill function

///conver to to celcius

//add imperial units, metric units


// get dayName