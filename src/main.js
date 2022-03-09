/* Efecto boton de scroll */
$(document).ready(function () {
  $("#boton_main").click(function () {
    console, log("click");
    var C = document.getElementById("here");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
