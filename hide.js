// capturamos los botones de mostrar y ocultar y los guardamos en variables
var ocultar = document.getElementById("hide");
var mostrar = document.getElementById("show");

// capturamos las imágenes y las guardamos en variables
var imgShow = document.getElementById("showImg");
var imgHide = document.getElementById("hideImg");

// escuchamos el evento click del botón ocultar
ocultar.addEventListener("click", function() {
    // ocultamos la imagen de ocultar
    imgShow.style.display = "none";
    // mostramos la imagen de mostrar
    imgHide.style.display = "block";

    // mostramos el botón de mostrar
    mostrar.style.display = "block";

    // ocultamos el botón de ocultar 
    ocultar.style.display = "none";

});

mostrar.addEventListener("click", function() {
    //ocultamos la imagen de ocultar
    imgHide.style.display = "none";
    //mostramos la imagen de mostrar
    imgShow.style.display = "block";
});