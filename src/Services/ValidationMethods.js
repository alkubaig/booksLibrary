export function convertNumbers(val){

  let arabicNumbers = {
    '٠':'0','١':'1','٢':'2','٣':'3','٤':'4','٥':'5','٦':'6','٧':'7','٨':'8','٩':'9',
    '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9'
  }

  let myVal = val
  let convertNumbers = (myVal.split('').map(c => arabicNumbers[c])).join('');

  return convertNumbers
}


export function regToString(str){
  return String(str).replace("/^", "").replace("$/", ""); 
}
