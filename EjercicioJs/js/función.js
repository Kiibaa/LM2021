function multi() {

    num = document.getElementById("numero").value;

    for (let i = 1; i <= 10; i++) {
        multi = num * i;
        document.getElementById("multiplicar").innerHTML += num + "x" + i + "=" + multi + "</br>";
    }
}