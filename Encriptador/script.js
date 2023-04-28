function encriptar(){
   var texto = document.getElementById("textoEncriptado").value.toLowerCase();
   
   var textoEcriptado = texto.replace(/e/img, "enter");
   var textoEcriptado = textoEcriptado.replace(/i/img, "imes");
   var textoEcriptado = textoEcriptado.replace(/a/img, "ai");
   var textoEcriptado = textoEcriptado.replace(/o/img, "ober");
   var textoEcriptado = textoEcriptado.replace(/u/img, "ufat");

   document.getElementById("textoDesencriptado").innerHTML = textoEcriptado;
   document.getElementById("muneco").style.display = "none";
   document.getElementById("imgmuneco").style.display = "none";
   document.getElementById("textoDesencriptado").style.display = "inherit";
   document.getElementById("botonCopiar").style.display = "inherit";
}

function desencriptar(){
   var texto = document.getElementById("textoEncriptado").value.toLowerCase();
   
   var textoEcriptado = texto.replace(/enter/img, "e");
   var textoEcriptado = textoEcriptado.replace(/imes/img, "i");
   var textoEcriptado = textoEcriptado.replace(/ai/img, "a");
   var textoEcriptado = textoEcriptado.replace(/ober/img, "o");
   var textoEcriptado = textoEcriptado.replace(/ufat/img, "u");

   document.getElementById("textoDesencriptado").innerHTML = textoEcriptado;
   
}

function copiar(){
   var textoCopiado = document.querySelector("#textoDesencriptado");
   textoCopiado.select();
   document.execCommand("copy");
}