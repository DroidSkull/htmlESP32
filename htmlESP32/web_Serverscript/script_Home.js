function logout() {

    window.location.replace("Index.html");

}
var teste = new Boolean(true)

function mudaBackground() {

    teste = !teste;
    if (teste === false) {
        document.getElementById("teste").style.backgroundColor = "#fff";
    }
    if (teste === true) {
        document.getElementById("teste").style.backgroundColor = "#191A1F";
    }
}