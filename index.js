var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setadir = window.document.getElementById("setadir")
var setaesq = window.document.getElementById("setaesq")


function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaesq.style = "display:flex"
    setadir.style = "display:none"
}

function RolarParaEsquerda() {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setadir.style = "display:flex"
    setaesq.style = "display:none"
}

