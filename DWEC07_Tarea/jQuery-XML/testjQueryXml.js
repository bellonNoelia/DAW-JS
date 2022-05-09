$().ready(() => {
  $.get(
    "https://api.openweathermap.org/data/2.5/weather?&mode=xml&lat=43.6797100&lon=-8.0208800&appid=dc7981aec1f47398a6c8627724b52ea1",
    function (data, status) {
      console.log("Data" + data + "\n Estado" + status);
      console.log(data);
      $(data).find("city").each(function () {
          let name = $(this).attr("name");
          $("#nombre").append(name);
        });
        $(data).find("coord").each(function () {
            let long = $(this).attr("lon");
            let lat = $(this).attr("lat");
            $("#coord").append("Longitud "+ long + " Latitud " +lat );
          });
    }
  );
});
