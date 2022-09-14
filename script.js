function criptografar(){
    let caixaEntrada = document.getElementById('texto-caixaentrada').value.toLowerCase();
    let textocripto = caixaEntrada  .replaceAll("a", "”") .replaceAll("b", "!")  .replaceAll("c", "@")  .replaceAll("d", "#")  .replaceAll("e", "$") .replaceAll("f", "%") .replaceAll("g", "&") .replaceAll("h", "*") .replaceAll("i", "(") .replaceAll("j", ")")  .replaceAll("k", "-") .replaceAll("l", "+") .replaceAll("m", "=") .replaceAll("n", "§") .replaceAll("o", "?") .replaceAll("p", "<") .replaceAll("q", ">") .replaceAll("r", "~") .replaceAll("s", "^") .replaceAll("t", ",") .replaceAll("u", "{") .replaceAll("v", "}") .replaceAll("w", "[") .replaceAll("x", "]") .replaceAll("y", ";") .replaceAll("z", ":");
    document.querySelector("#areatextocopiar").innerHTML = textocripto; 
    document.querySelector("#imgcomputador").style.display = "none";   
}
    
function botaoapagar() {
    document.getElementById("texto-caixaentrada").value = "";            
}

function descriptografar(){
    let textoCriptografado = document.getElementById('areatextocopiar').value.toLowerCase();
    let textoDescripto = textoCriptografado  .replaceAll("”", "a") .replaceAll("!", "b")  .replaceAll("@", "c")  .replaceAll("#", "d")  .replaceAll("$", "e") .replaceAll("%", "f") .replaceAll("&", "g") .replaceAll("*", "h") .replaceAll("(", "i")  .replaceAll(")", "j")  .replaceAll("-", "k") .replaceAll("+", "l") .replaceAll("=", "m") .replaceAll("§", "n") .replaceAll("?", "o") .replaceAll("<", "p") .replaceAll(">", "q") .replaceAll("~", "r") .replaceAll("^", "s") .replaceAll(",", "t") .replaceAll("{", "u") .replaceAll("}", "v") .replaceAll("[", "w") .replaceAll("]", "x") .replaceAll(";", "y") .replaceAll(";", "z");
        document.querySelector("#areatextocopiar").innerHTML = textoDescripto;   
}


function botaocopiar(){
    
    let textoCopiado = document.getElementById("areatextocopiar");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("O texto copiado é: " + textoCopiado.value);
}
