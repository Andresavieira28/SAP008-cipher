const cipher = {encode,decode};

function encode(offset,text){
  if(typeof parseInt(offset) !== 'number' || typeof text != 'string') {
    throw TypeError()
  }
  let msg =""
  for (let i = 0; i< text.length; i++){

    const numberASCII = text.charCodeAt(i);
    //1° condição MAIUSCULA 65-90, 2° MINUSCULA CONDIÇÃO 97-122, 3° CONDIÇÃO CARACTERES 32-64
    if(numberASCII >= 65 && numberASCII <= 90) {
      const calc = (((numberASCII - 65) + parseInt(offset)) % 26) + 65;
      msg += String.fromCharCode(calc);
    } else if(numberASCII >= 97 && numberASCII <= 122) {
      const calc = (((numberASCII - 97) + parseInt(offset)) % 26) + 97;
      msg += String.fromCharCode(calc);
    } else if (numberASCII >= 32 || numberASCII <= 64) {
      msg += String.fromCharCode(numberASCII);
    }
  } return msg;
}

function decode(offset,text) {
  if(typeof parseInt(offset) !== 'number' || typeof text != 'string') {
    throw TypeError()
  }
  let msgdec =""
  for (let a = 0; a< text.length; a++){

    const numberASCII = text.charCodeAt(a);

    //1° condição MAIUSCULA 65-90, 2° MINUSCULA CONDIÇÃO 97-122, 3° CONDIÇÃO CARACTERES 32-64

    if(numberASCII >= 65 && numberASCII <= 90) {
      const calcDecode = (((numberASCII + 65) - parseInt(offset)) % 26) + 65;
      msgdec += String.fromCharCode(calcDecode);

    } else if(numberASCII >= 97 && numberASCII <= 122) {
      const calcDecode = (((numberASCII - 97) - parseInt(offset)) % 26) + 97;
      msgdec += String.fromCharCode(calcDecode);

    } else if(numberASCII >= 32 || numberASCII <= 64) {
      msgdec += String.fromCharCode(numberASCII);
    }
    
  } return msgdec;
}
export default cipher;