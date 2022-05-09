$().ready(() => {
  $.getJSON(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
    function (data) {
      console.log("Data" + data);
      console.log(data);
      for (let i = 0; i < data.results.length; i++) {
        $("#datos").append(
          "<br>" + (i + 1) + " " + data.results[i].name + "</br>"
        );
      }
      /*
      $.each(data.results, function(key, value){  
        $("#datos").append("<br>" +  (key+1) + " "+value.name+"</br>");  
    });  */
    }
  );
});
