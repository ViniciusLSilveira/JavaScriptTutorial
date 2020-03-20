const AREA = document.body;
const CIRCLEHEIGHT = document.querySelector('.circleheight');
const CIRCLEWIDTH = document.querySelector('.circlewidth');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Captura o objeto de evento (movimento do mouse).
    // Obtém a coordenada X (distância da borda esquerda da janela de visualização) através da propriedade clientX.
    // Pega a largura total da janela, subtrai a coordenada atual e a largura do círculo.
    // Faz o mesmo para a coordenada Y (distância da borda superior da janela de visualização).
    var horizontalPositionOpossite = e.clientX - 26;
    var verticalPositionOpossite = windowHeight - e.clientY - 26;

    var horizontalPositionSame = windowWidth - e.clientX - 26;
    var verticalPositionSame = e.clientY - 26;

    // Define a posição horizontal e vertical.
    CIRCLEHEIGHT.style.left = horizontalPositionOpossite + 'px';
    CIRCLEHEIGHT.style.top = verticalPositionOpossite + 'px';

    // Define a posição horizontal e vertical.
    CIRCLEWIDTH.style.left = horizontalPositionSame + 'px';
    CIRCLEWIDTH.style.top = verticalPositionSame + 'px';
}

function changeColorCircleHeight() {
    CIRCLEHEIGHT.style.backgroundColor = "green";
    CIRCLEHEIGHT.style.borderColor = "green";

}

function changeColorCircleWidth(){
    CIRCLEWIDTH.style.backgroundColor = "yellow";
    CIRCLEWIDTH.style.borderColor = "yellow";
}
// Quando o mouse se move, executa a função mouseCoordinates.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// Quando o mouse toca o círculo, executa a função changeColorOnTouch.
CIRCLEHEIGHT.addEventListener('mouseenter', changeColorCircleHeight, false);
CIRCLEWIDTH.addEventListener('mouseenter', changeColorCircleWidth, false);

// Quando o mouse sai do círculo, remove estilos embutidos com uma função anônima.
CIRCLEHEIGHT.addEventListener('mouseleave', function () { CIRCLEHEIGHT.removeAttribute("style");}, false);
CIRCLEWIDTH.addEventListener('mouseleave', function () { CIRCLEWIDTH.removeAttribute("style");}, false);
