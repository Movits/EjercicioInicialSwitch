const pagina = document.querySelector("body");
const selectOpcionesColor = document.querySelector("select");
const opcionesImagenes = document.querySelector("opc-img");

IMG_1 = "https://www.cuadrosdekorarte.com/wp-content/uploads/2023/04/cuadro-tulipanes-azules.jpg"

function cambiarColorTexto(){
    switch (parseInt(selectOpcionesColor.value)) {
        case 1:
            console.log("color blue");
            pagina.style.color="blue";
            pagina.style.backgroundColor="yellow";
            selectOpcionesColor.style.color="blue";
            opcionesImagenes.value = IMG_1;
            break;
        case 2:
            console.log("color yellow");
            pagina.style.color="yellow";
            pagina.style.backgroundColor="blue";
            selectOpcionesColor.style.color="yellow";
            break;
        case 3:
            console.log("color green");
            pagina.style.color="green";
            pagina.style.backgroundColor="black";
            selectOpcionesColor.style.color="green";
            break;
        default:
            console.log("default");
            pagina.style.color="black";
            pagina.style.backgroundColor="white";
            break;
    }
}