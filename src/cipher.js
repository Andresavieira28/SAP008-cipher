const cipher = {encode,decode};

function encode(offset,text){

  let msg =""
  for (let i = 0; i< text.length; i++){
    const encodecharCode = ((text.charCodeAt(i) - 65) + parseInt(offset)) %26 + 65
    msg += String.fromCharCode(encodecharCode)
    console.log(encodecharCode)
  }
  return msg;
}  
  
function decode(offset,text) {

  let msgdec =""
  for (let a = 0; a< text.length; a++){
    const decodecharCode = (((text.charCodeAt(a) + 65) - parseInt(offset)) %26) + 65
    msgdec += String.fromCharCode(decodecharCode)
    console.log(decodecharCode)
  }
  return msgdec;
} 
export default cipher;