var User = 0;
var PWD = 0;
var text;

function login() {

    User = document.getElementById("config_User").value;
    PWD = document.getElementById("config_PWD").value;

    if (isNaN(PWD)) {
        text = "Senha invalida";
    } else if (PWD != "Adimin") {
        text = "Senha invalida";
    }

    if (User != "Adimin") {
        text = "Usuario invalido";
    }
    document.getElementById("error").innerHTML = text;
}