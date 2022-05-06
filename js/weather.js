jQuery(function ($) {
  // DEFINE APPID
  var APPID = "eb69a1db0129d815a4b9749cbd25e38b";

  $(document).ready(function () {
    $temp_cel = "";

    function init_geo() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
      }
    }

    function success(position) {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      $api_link =
        "http://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&APPID=" +
        APPID;

      $.getJSON($api_link, function (data) {
        $temp_kelvin = data.main.temp;
        $temp_cel = parseFloat(($temp_kelvin - 273.15).toFixed(0));
        $temp_cel = $temp_cel;
        $static_src = "http://openweathermap.org/img/w/";
        $weather_main = data.weather[0].main;

        $output = "";
        $(".temperature").html($temp_cel);
      });
    }

    init_geo();
  });
});
