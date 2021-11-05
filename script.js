function miNombreEs() {
  var nombre = document.getElementById('nombre').value;
  var label = document.getElementById('nombreConcursante');
  label.innerHTML = nombre;
  document.getElementById('empezar').style.display = 'block';
  localStorage.setItem('score', 0);
}


const checkbtn1 = (Option) => {
  var score = new Number(localStorage.getItem('score'));
  switch (Option) {

    case 'Hojas':
      console.log('Hola')
      alert('Respuesta Correcta')
      document.getElementById("boton1").className = 'botonCorrecto';
      document.getElementById("boton2").className = 'botonError';
      document.getElementById("boton3").className = 'botonError';
      score += 50;
      localStorage.setItem('score', score);
      console.log(score);

      break;

    case 'Miel':
      alert('Respuesta Inocrrecta')
      document.getElementById("boton2").className = 'botonError';
      document.getElementById("boton1").className = 'botonCorrecto';
      document.getElementById("boton3").className = 'botonError';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);

      break;

    case 'Pescados':
      alert('Respuesta Incorrecta')
      document.getElementById("boton3").className = 'botonError';
      document.getElementById("boton2").className = 'botonError';
      document.getElementById("boton1").className = 'botonCorrecto';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);
      break;

  }
}



//pregunta 2 

const checkbtn2 = (Option) => {
  var score = new Number(localStorage.getItem('score'));
  switch (Option) {

    case 'Asia':
      alert('Respuesta Incorrecta');
      document.getElementById("boton4").className = 'botonError';
      document.getElementById("boton5").className = 'botonError';
      document.getElementById("boton6").className = 'botonCorrecto';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);

      break;


    case 'Europa':
      alert('Respuesta Incorrecta');
      document.getElementById("boton5").className = 'botonError';
      document.getElementById("boton6").className = 'botonCorrecto';
      document.getElementById("boton4").className = 'botonError';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);
      break;

    case 'América Central':
      alert('Respuesta Correcta');
      document.getElementById("boton6").className = 'botonCorrecto';
      document.getElementById("boton5").className = 'botonError';
      document.getElementById("boton4").className = 'botonError';
      score += 50;
      localStorage.setItem('score', score);
      console.log(score);
      break;

  }
}

//pregunta 3 

const checkbtn3 = (Option) => {
  var score = new Number(localStorage.getItem('score'));
  switch (Option) {

    case '3':
      alert('Respuesta Incorrecta');
      document.getElementById("boton7").className = 'botonError';
      document.getElementById("boton9").className = 'botonError';
      document.getElementById("boton8").className = 'botonCorrecto';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);

      break;


    case '1':
      alert('Respuesta Correcta');
      document.getElementById("boton8").className = 'botonCorrecto';
      document.getElementById("boton7").className = 'botonError';
      document.getElementById("boton9").className = 'botonError';
      score += 50;
      localStorage.setItem('score', score);
      console.log(score);
      break;

    case '2':
      alert('Respuesta Incorrecta');
      document.getElementById("boton7").className = 'botonError';
      document.getElementById("boton9").className = 'botonError';
      document.getElementById("boton8").className = 'botonCorrecto';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);

      break;
  }
}

//pregunta 4

const checkbtn4 = (Option) => {
  var score = new Number(localStorage.getItem('score'));
  switch (Option) {

    case 'Plantas venenosas':
      alert('Respuesta Incorrecta');
      document.getElementById("boton11").className = 'botonError';
      document.getElementById("boton12").className = 'botonError';
      document.getElementById("boton10").className = 'botonCorrecto';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);

      break;


    case 'Los leones':
      alert('Respuesta Incorrecta');
      document.getElementById("boton11").className = 'botonError';
      document.getElementById("boton10").className = 'botonCorrecto';
      document.getElementById("boton12").className = 'botonError';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);
      break;

    case 'La caza':
      alert('Respuesta Correcta');
      document.getElementById("boton10").className = 'botonCorrecto';
      document.getElementById("boton11").className = 'botonError';
      document.getElementById("boton12").className = 'botonError';
      score += 50;
      localStorage.setItem('score', score);
      console.log(score);
      break;

  }
}

//pregunta 5

const checkbtn5 = (Option) => {
  var score = new Number(localStorage.getItem('score'));
  switch (Option) {

    case '2.500':
      alert('Respuesta Incorrecta');
      document.getElementById("boton13").className = 'botonError';
      document.getElementById("boton14").className = 'botonError';
      document.getElementById("boton15").className = 'botonCorrecto';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);

      break;


    case '130.000':
      alert('Respuesta Incorrecta');
      document.getElementById("boton13").className = 'botonError';
      document.getElementById("boton14").className = 'botonError';
      document.getElementById("boton15").className = 'botonCorrecto';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);
      break;

    case '40.000':
      alert('Respuesta Correcta');
      document.getElementById("boton13").className = 'botonError';
      document.getElementById("boton14").className = 'botonError';
      document.getElementById("boton15").className = 'botonCorrecto';
      score += 50;
      localStorage.setItem('score', score);
      console.log(score);
      break;

  }
}

//pregunta 6

const checkbtn6 = (Option) => {
  var score = new Number(localStorage.getItem('score'));

  switch (Option) {

    case '15 horas':
      alert('Respuesta Incorrecta');
      document.getElementById("boton18").className = 'botonError';
      document.getElementById("boton16").className = 'botonError';
      document.getElementById("boton17").className = 'botonCorrecto';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);

      break;


    case '7 horas':
      alert('Respuesta Incorrecta');
      document.getElementById("boton18").className = 'botonError';
      document.getElementById("boton16").className = 'botonError';
      document.getElementById("boton17").className = 'botonCorrecto';
      score -= 10;
      localStorage.setItem('score', score);
      console.log(score);
      break;

    case '2 horas':
      alert('Respuesta Correcta');
      document.getElementById("boton18").className = 'botonError';
      document.getElementById("boton16").className = 'botonError';
      document.getElementById("boton17").className = 'botonCorrecto';
     
      score += 50;
      localStorage.setItem('score', score);
      console.log(score);
      break;

  }
}

function puntajeFinal(){
var score = new Number(localStorage.getItem('score'));
  var label = document.getElementById('puntajeFinal');
  label.innerHTML = score;
  document.getElementById('puntaje').style.display = 'block';

}
