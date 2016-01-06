function login() {
  //Variables que vamos a obtener del Formulario
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var nombres = [ 'leo',
                  'a@a.com',
                  'the_liontaker@hotmail.com',
                  'momo7153@gmail.com',
                  'andrew'
                ];

  if( isInArray(email,nombres) == true){
    if ( isInArray(password,nombres) == true) {
      alert("Bienvenido a el mejor sistema de Transporte privado.");
      return true;
    }else {
      alert("Tú password es erroneo")
      return false;
    }
  }else{
    alert("El e-mail que has introducido no es válido")
    return false;
  }
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
