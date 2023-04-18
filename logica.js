
function inicio() {
    document.querySelectorAll('.btn-dificuldade').forEach(function(btn) {
      btn.addEventListener('click', function() {
        switch (btn.id) {
          case 'facil':
            Dificuldade(1500);
            break;
          case 'medio':
            Dificuldade(800);
            break;
          case 'dificil':
            Dificuldade(400);
            break;
          case 'impossivel':
            Dificuldade(100);
            break;
        }
      });
    });
  }
 
  inicio();

   function Dificuldade(difuculdade){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'black';
    pincel.fillRect(0, 0, 600, 400);
 
    var raio = 10;
    var xAleatorio;
    var yAleatorio;

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();

    }

    function limpaTela() {

        pincel.clearRect(0, 0, 600, 400);

    }

    function desenhaAlvo(x,y) {

        desenhaCirculo(x, y, raio+20, 'red');
        desenhaCirculo(x, y, raio+10, 'white');
        desenhaCirculo(x, y, raio, 'red');

    }

    function sorteiaPosicao(maximo) {

        return Math.floor(Math.random() * maximo);

    }

function atualizaTela() {
    limpaTela();
    xAleatorio = sorteiaPosicao(600);
    yAleatorio = sorteiaPosicao(400);
    desenhaAlvo(xAleatorio, yAleatorio);
}
var acertos = 0;
var erros = 0;


function dispara(evento) {
    var x = evento.offsetX;
    var y = evento.offsetY;
    var distancia = Math.sqrt(Math.pow(x - xAleatorio, 2) + Math.pow(y - yAleatorio, 2));
  
    if (distancia <= raio) {
        acertos++;
        document.getElementById('acertos').innerHTML = acertos;
        alert('Acertou!');
    } else {
        erros++;
        document.getElementById('erros').innerHTML = erros;
    }
}







setInterval(atualizaTela, difuculdade);
tela.onclick = dispara;



   }
  