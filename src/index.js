import cipher from './cipher.js';

const deslocamento = document.getElementById('deslocamento')
const encode = document.getElementById('codificar')
const button = document.getElementById('button-encode')
function encodemsg() {
   let encoded = cipher.encode(deslocamento.value,encode.value)
   document.getElementById('resencode').innerHTML = encoded;
}
button.addEventListener('click', encodemsg)

const decode = document.getElementById('decodificar')
const buttondecode = document.getElementById('button-decode')
function decodemsg() {
   let decoded = cipher.decode(deslocamento.value,decode.value)
   document.getElementById('resdecode').innerHTML = decoded;
}
buttondecode.addEventListener('click', decodemsg) 