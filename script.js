var input1 = document.querySelector("#textoEntrada");
var input2 = document.querySelector("#textoSaida");
var message = document.getElementById("msg");

document.getElementById("none").innerHTML = "";
input1.focus();

// Função criptografar//
function encrypt() {
  if (input1.value.length == 0) {
    document.getElementById("none").innerHTML =
      '<h2 id="none">Nenhuma mensagem encontrada</h2>';
    input1.focus();
  } else {
    //limpa textarea2 (descriptografar)//
    document.getElementById("none").innerHTML = "";
    document.querySelector("img.icone").style.display = "none";

    //chaves pra criptografar
    var text = input1.value;
    var txt = text.replace(/e/gim, "enter");
    var txt = txt.replace(/i/gim, "imes");
    var txt = txt.replace(/a/gim, "ai");
    var txt = txt.replace(/o/gim, "ober");
    var txt = txt.replace(/u/gim, "ufat");

    document.querySelector("#textoSaida").innerHTML = `${txt}`;

    // Botão copiar é exibido na tela quando é chamado a função criptograr()
    document.getElementById("copy").innerHTML =
      '<button class="button btn-3" onclick="copy()">Copiar</button>';
  }
}
// função descriptografar o texto inserido pelo usuário se o valor nao for vazio, se for mostra msg
function decrypt() {
  if (input1.value.length == 0) {
    document.getElementById("none").innerHTML =
      ' <h2 id="none">Nenhuma mensagem encontrada</h2>';
    document.querySelector("img.icone").style.display;
    input1.focus();
  } else {
    //retira a imagem quando o botão é clicado pra poder exibir o resultado
    document.getElementById("none").innerHTML = "";
    document.querySelector("img.icone").style.display = "none";
    document.querySelector("#textoEntrada").innerHTML = "";

    //chaves pra criptografar
    var text = input1.value;
    var txt = text.replace(/enter/gim, "e");
    txt = txt.replace(/imes/gim, "i");
    txt = txt.replace(/ai/gim, "a");
    txt = txt.replace(/ober/gim, "o");
    txt = txt.replace(/ufat/gim, "u");

    document.querySelector("#textoSaida").innerHTML = `${txt}`;

    // Botão de copiar é exibido na tela quando a função "criptografar()" é chamada
    document.getElementById("copy").innerHTML =
      '<button class="button btn-3" onclick="copy()">Copiar</button>';
  }
}

function copy() {
  document.querySelector("#textoSaida").select();
  document.execCommand("copy");
  message.innerHTML = "O texto copiado!";
  document.querySelector("#textoEntrada").value = "";
}
