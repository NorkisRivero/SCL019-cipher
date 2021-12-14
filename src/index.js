import cipher from "./cipher.js";

//Botón cifrar mensaje
let cypher = document.getElementById("cipher");
cypher.addEventListener("click", function () {
  let inicio = document.getElementById("home");
  inicio.style.display = "none";
  let paginaCifrado = document.getElementById("pageCipher");
  paginaCifrado.style.display = "block";
  let mensajeCifrado = document.getElementById("encryptedMessage");
  mensajeCifrado.style.display = "none";
});

//Botón descifrar mensaje
let decipher = document.getElementById("decipher");
decipher.addEventListener("click", function () {
  let inicio = document.getElementById("home");
  inicio.style.display = "none";
  let paginaDescifrado = document.getElementById("pageDecipher");
  paginaDescifrado.style.display = "block";
  let mensajeDescifrado = document.getElementById("decryptedMessage");
  mensajeDescifrado.style.display = "none";
});

//Botón Cifrar
let encrypt = document.getElementById("encryptMessage");
encrypt.addEventListener("click", function () {
  let message1 = document.getElementById("message");
  let paginaCifrado = document.getElementById("pageCipher");
  paginaCifrado.style.display = "none";
  let mensajeCifrado = document.getElementById("encryptedMessage");
  mensajeCifrado.style.display = "block";
  let resultEncrypt = message1.value;
  let selectNumber = document.getElementById("number");
  let resultEncrypt1 = parseInt(selectNumber.value);
  document.getElementById("message1").innerHTML = cipher.encode(
    resultEncrypt,
    resultEncrypt1
  );
});

//Botón Descifrar
let decrypt = document.getElementById("decryptMessage");
decrypt.addEventListener("click", function () {
  let message2 = document.getElementById("message2");
  let paginaDescifrado = document.getElementById("pageDecipher");
  paginaDescifrado.style.display = "none";
  let mensajeDescifrado = document.getElementById("decryptedMessage");
  mensajeDescifrado.style.display = "block";
  let resultEncrypt2 = message2.value;
  let selectNumber = document.getElementById("number1");
  let resultEncrypt3 = parseInt(selectNumber.value);
  document.getElementById("message2").innerHTML =
    "" + cipher.encode(resultEncrypt2, resultEncrypt3);
});

//Botón Volver a Home desde Mensaje Cifrado
let volver = document.getElementById("goBack");
volver.addEventListener("click", function () {
  let paginaCifrado = document.getElementById("pageCipher");
  paginaCifrado.style.display = "none";
  let inicio = document.getElementById("home");
  inicio.style.display = "block";
  let mensajeCifrado = document.getElementById("encryptedMessage");
  mensajeCifrado.style.display = "none";
});

//Botón Volver a Home desde Mensaje Descifrado
let volver1 = document.getElementById("goBack2");
volver1.addEventListener("click", function () {
  let paginaCifrado = document.getElementById("pageCipher");
  paginaCifrado.style.display = "none";
  let inicio = document.getElementById("home");
  inicio.style.display = "block";
  let mensajeDescifrado = document.getElementById("decryptedMessage");
  mensajeDescifrado.style.display = "none";
});
