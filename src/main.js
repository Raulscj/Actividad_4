/* Navbar */
const nav = document.querySelector("nav");
const delay = () => {
  nav.classList.toggle("sticky", window.scrollY > 0);
};
window.addEventListener("scroll", function () {
  delay();
});

$(document).ready(function () {
  /* Carrusel automático */
  let i = 0;
  setInterval(function () {
    i += 1;
    console.log("entro");
    if (i == 1) {
      $("#header").addClass("bg-1");
      $("#header").removeClass("bg-2");
      $("#header").removeClass("bg-3");
      $("#header").removeClass("bg-4");
    } else if (i == 2) {
      $("#header").removeClass("bg-1");
      $("#header").removeClass("bg-3");
      $("#header").removeClass("bg-4");
      $("#header").addClass("bg-2");
    } else if (i == 3) {
      $("#header").removeClass("bg-1");
      $("#header").removeClass("bg-2");
      $("#header").removeClass("bg-4");
      $("#header").addClass("bg-3");
    } else if (i == 4) {
      $("#header").removeClass("bg-1");
      $("#header").removeClass("bg-2");
      $("#header").removeClass("bg-3");
      $("#header").addClass("bg-4");
    }
    if (i > 4) {
      i = 0;
    }
  }, 1500);
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
      $("#Formulario").trigger("reset");
    });
  });
});
