function validarFormulario() {
    var errores = "";
    var nombre = document.getElementById("nombre").value;
    if (nombre.length <5 || nombre.length > 30 || nombre) {
    errores = errores + "<li>El nombre debe tener entre 5 y 30 caracteres</li>";
    }else if (nombre == null || email.length == 0) {
    errores = errores + "<li>Campo vacío</li>";
    }
    var email = document.getElementById("email").value;
    if (email.indexOf("@iestriana.com") == -1) {
    errores = errores + "<li>La dirección debe contener @iestriana.com</li>";
    }else if (email == null || email.length == 0) {
    errores = errores + "<li>Campo vacío</li>";
    }
    var edad = document.getElementById("edad").value;
    if (edad < 18 || edad >100) {
    errores = errores + "<li>La edad debe estar comprendida entre 18 y 100</li>";
    }else if (web == null || web.length == 0) {
    errores = errores + "<li>Campo vacío</li>";
    }
    var web = document.getElementById("web").value;
    if (web.indexOf("https://") == -1) {
    errores = errores + "<li>La dirección debe comenzar por hhtps://</li>";
    } else if (web == null || web.length == 0 ) {
    errores = errores + "<li>Campo vacío</li>";
    }
    if (errores.length == 0) {
    return true;
    }else {
    verErrores(errores);
    return false;
    }
    }
    function verErrores(errores) {
    document.getElementById("errores").innerHTML = errores;
    document.getElementById("capaerrores").style.visibility =
    "visible";
    
    }
