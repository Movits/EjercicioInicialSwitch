const pagina = document.querySelector("body");
const selectOpcionesColor = document.querySelector("select");

function cambiarColorTexto(){
    switch (parseInt(selectOpcionesColor)) {
        case 1:
            pagina.style.color="blue";
            pagina.style.backgroundColor="cream";
            break;
    
        default:
            break;
    }
}