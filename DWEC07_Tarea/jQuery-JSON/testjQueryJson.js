$().ready(() => {
  $.getJSON(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
    function (data) {
      console.log("Data" + data);
      console.log(data);
      for (let i = 0; i < data.results.length; i++) {
        $("#tabla").append(
          "<tr> <td>" + (i + 1) + "</td> <td>" + data.results[i].name + "</td></tr>"
        );
      }
    }
  );
});
