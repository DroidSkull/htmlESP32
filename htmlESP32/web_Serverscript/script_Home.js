var Nome = 0;
var SSID = 0;
var PWD = 0;
var text;

function config() {

    PWD = document.getElementById("config_PWD").value;

    if (isNaN(PWD)) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}