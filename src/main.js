const nav = document.querySelector("nav");
const delay = () => {
  nav.classList.toggle("sticky", window.scrollY > 0);
};
window.addEventListener("scroll", function () {
  delay();
});
/* Efecto boton de scroll */
console.log("Hola");
$(document).ready(function () {
  $("#boton_main").click(function () {
    var C = document.getElementById("Conocenos");
    C.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  const formulario = document.getElementById("Formulario");
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
    /* $.ajax({
      type: "POST",
      url: "Create.php",
      data: Data,
      success: function (response) {
        console.log(response);
      },
    });
    e.preventDefault(); */

    /* $.post(
      "Create.php",
      Data,
      function (response) {
        
      },
      "dataType"
    ); */
  });
});
