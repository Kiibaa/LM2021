function calcularPrecio() {
    var viaje = document.getElementById("viaje").value;
    var kilometros = document.getElementById("km").value;
    var precio = document.getElementById("precio").value;
    var gasto = eval(kilometros) * eval(precio);
    document.getElementById("resultado").innerHTML = "El viaje de " + viaje + " de" + km + "a " + precio + "el precio del kilómetro hace un gasto total de " + gasto + "€";
}