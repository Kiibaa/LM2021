function calcularMayor() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var mensaje = "";
    if (num1 > num2) {
        mensaje = num1 + " es mayor que " + num2;
    } else if (num2 > num1) {
        mensaje = num2 + " es mayor que " + num1;
    } else {
        mensaje = num1 + " es igual que " + num2;
    }
    document.getElementById("resultadoMayor").innerHTML = mensaje;
}

function calcularMenor() {
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;

    var mensaje = "";
    if (num3 < num4) {
        mensaje = num3 + " es menor que " + num4;
    } else if (num4 < num3) {
        mensaje = num4 + " es menor que " + num3;
    } else {
        mensaje = num3 + " es igual que " + num4;
    }
    document.getElementById("resultadoMenor").innerHTML = mensaje;
}

function calculadora(operacion, numero5, numero6) {
    //alert(operacion);

    var numero5 = document.getElementById("num5").value;
    var numero6 = document.getElementById("num6").value;

    var res = 0;
    
    if (operacion == 'suma') {
        res = eval(numero5) + eval(numero6);
    }