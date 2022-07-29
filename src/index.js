import cipher from './cipher.js';

const deslocamento = document.getElementById('deslocamento')

const encode = document.getElementById('codificar')
console.log(encode)

const button = document.getElementById('button-encode')
function encodemsg() {
   console.log(encode.value,deslocamento.value)
   let encoded = cipher.encode(deslocamento.value,encode.value)
   console.log(encoded)
   document.getElementById('resencode').innerHTML = encoded;
}
button.addEventListener('click', encodemsg)

const decode = document.getElementById('decodificar') 
console.log(decode.toUpperCase)

const buttondecode = document.getElementById('button-decode')
function decodemsg() {
   console.log(deslocamento.value,decode.value)
   let decoded = cipher.decode(deslocamento.value,decode.value)
   console.log(decoded)
   document.getElementById('resdecode').innerHTML = decoded;
 }
 buttondecode.addEventListener('click', decodemsg)

console.log(cipher); 