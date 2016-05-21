  var   n1 = 3;
var nombre = "alas";
function suma () {
  n1 = document.querySelector("#primerValor").value;
  n2 = document.querySelector("#segundoValor").value;
  var  resultado = parseInt(n1) + parseInt(n2);
  alert(resultado);
  if (resultado > 15) {
    document.querySelector("#colorido").style.backgroundColor = "yellow";
  } else if (resultado === 15) {
        document.querySelector("#colorido").style.backgroundColor = "green";
  } else {
      document.querySelector("#colorido").style.backgroundColor = "blue";
  }

};
alert(nombre);
function resta() {

  var    n2 = document.querySelector("#segundoValor").value;
  var  resultado = parseInt(n1) - parseInt(n2);
    alert(resultado);

}

function colorNuevo() {
  document.querySelector("#colorido").style.backgroundColor = "red";  
    document.querySelector("#colorido").style.fontFamily = "verdana";
};


compu =Math.random()*3
if (compu< 1) {
  compu Tirada
}
