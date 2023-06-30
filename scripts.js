const pagina = document.querySelector("body");
const selectOpcionesColor = document.querySelector("select");
const opcionesImagenes = document.querySelector("#opc-img");

IMG_1 = "https://s2.glbimg.com/zbKdK16j8c0zZqWUMy8QD4H2GAc=/e.glbimg.com/og/ed/f/original/2021/08/19/van_gogh_girassois.jpeg";
IMG_2 = "https://cdn.culturagenial.com/imagens/quadro-a-noite-estrelada-de-vincent-van-gogh-og.jpg";
IMG_3 = "https://1.bp.blogspot.com/-BMgBNonbRZ0/TiI09tk6o2I/AAAAAAAAAFQ/yemTFVHLFkc/w1200-h630-p-k-no-nu/Skull+with+Burning+Cigarette+by+Van+Gogh.jpg";

function cambiarColorTexto(){
    switch (parseInt(selectOpcionesColor.value)) {
        case 1:
            console.log("color blue");
            pagina.style.color="blue";
            pagina.style.backgroundColor="yellow";
            selectOpcionesColor.style.color="blue";
            opcionesImagenes.src = IMG_1;
            break;
        case 2:
            console.log("color yellow");
            pagina.style.color="yellow";
            pagina.style.backgroundColor="blue";
            selectOpcionesColor.style.color="yellow";
            opcionesImagenes.src = IMG_2;
            break;
        case 3:
            console.log("color green");
            pagina.style.color="green";
            pagina.style.backgroundColor="black";
            selectOpcionesColor.style.color="green";
            opcionesImagenes.src = IMG_3;
            break;
        default:
            console.log("default");
            pagina.style.color="black";
            pagina.style.backgroundColor="white";
            break;
    }
}