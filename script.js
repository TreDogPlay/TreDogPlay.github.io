let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu una vez que se selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("c");
        habilidades[5].classList.add("sql");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("equipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("critico");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de animaciones
window.onscroll = function(){
    efectoHabilidades();
}

//Funcion descargar CV
document.getElementById("descargarCV").addEventListener("click", function() {
    var enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = 'Document/CV Martin.pdf'; // Ruta al archivo PDF corregida
    enlaceDescarga.download = 'CV Martin Aguilar.pdf'; // Nombre del archivo PDF
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
});
