const cipher = {

  encode (string, n) { 
    let result = "", code;
    for (let i=0; i<string.length;i++){
      if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
        code = (((string.charCodeAt(i)-65)+n)%26)+65;
      }
      else if (string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 66) {
        code = (((string.charCodeAt(i) + 33) - n) % 33) + 33; 
      }
      else if (string.charCodeAt(i)===32){
        code = 32;
      }
      result+=String.fromCharCode(code);
    }
    return result;
  },


    decode (string, n) {
    let result = "", code;
    for (let i=0; i<string.length;i++){ 
      if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
        code = (((string.charCodeAt(i)+65)-n)%26)+65;
      }
     else if (string.charCodeAt(i) >= 33 && string.charCodeAt(i) <= 66) {
        code = (((string.charCodeAt(i) + 33) + n) % 33) + 33;
      }
      else if (string.charCodeAt(i)===32){
        code = 32;
      }
      result+=String.fromCharCode(code);
    }
    return result;
  },
}

export default cipher;


