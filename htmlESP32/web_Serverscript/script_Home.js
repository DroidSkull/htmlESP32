var Nome = 0;
var SSID = 0;
var PWD = 0;

function config() {
    var text = 0;
    PWD = document.getElementById("config_PWD").value;

    if (PWD != 1) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}