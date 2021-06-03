var User = 0;
var PWD = 0;
var text;

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        document.querySelector("#login_bt").click();
    
    }
  });

function login() {

    User = document.getElementById("config_User").value;
    PWD = document.getElementById("config_PWD").value;

    if (PWD != "Admin") {
        text = "Senha invalida";
    }

    if (User != "Admin") {
        text = "Usuario invalido";
    }
    else {
        window.location.replace("home.html");
        text = " ";
    }
    document.getElementById("error").innerHTML = text;
}


