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
    let C = document.getElementById("Conocenos");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  /* Efecto boton de scroll */
  $(".Inicio").click(function () {
    let C = document.getElementById("header");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  /* Scrool del navbar */
  $("#Conocenos0").click(function () {
    let C = document.getElementById("Conocenos");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  $("#Thebest0").click(function () {
    let C = document.getElementById("Thebest");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  $("#servicios0").click(function () {
    let C = document.getElementById("servicios");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  $("#Comentarios0").click(function () {
    let C = document.getElementById("Comentarios");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  $("#Reservacion0").click(function () {
    let C = document.getElementById("Reservacion");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  $("#Contacto0").click(function () {
    let C = document.getElementById("Contacto");
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
