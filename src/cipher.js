const cipher = {encode,decode};

function encode(offset,text){
  if(typeof parseInt(offset) !== 'number' || typeof text != 'string') {
    
  throw TypeError()
  }
  let msg =""
  for (let i = 0; i< text.length; i++){
    const encodecharCode = ((text.charCodeAt(i) - 65) + parseInt(offset)) %26 + 65
    msg += String.fromCharCode(encodecharCode)
  }
  return msg;
  }
function decode(offset,text) {
  if(typeof parseInt(offset) !== 'number' || typeof text != 'string') {
  throw TypeError()
  }
  let msgdec =""
  for (let a = 0; a< text.length; a++){
    const decodecharCode = ((text.charCodeAt(a) - 90) - parseInt(offset)) %26 + 90;
    msgdec += String.fromCharCode(decodecharCode)
  }
  return msgdec;
  }
export default cipher;