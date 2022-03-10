/* Navbar */
const nav = document.querySelector("nav");
const delay = () => {
  nav.classList.toggle("sticky", window.scrollY > 0);
};
window.addEventListener("scroll", function () {
  delay();
});

$(document).ready(function () {
  /* Inicio */
  $("#boton_main").click(function () {
    var C = document.getElementById("Conocenos");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  /* Efecto boton de scroll */
  $("#Inicio").click(function () {
    var C = document.getElementById("header");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  /* Toogle formulario */
  $(".formulario").click(function () {
    $("form").toggle("slow");
  });

  /* BASE DE DATO */
  $("#Formulario").submit(function (e) {
    const Data = {
      name: $("#name").val(),
      last_name: $("#last_name").val(),
      cantidad: $("#cantidad").val(),
      fecha: $("#fecha").val(),
    };
    e.preventDefault();
    const url = "DATABASE/Create.php";
    $.post(url, Data, function (response) {
      console.log(response);
    });
  });
});
