var d1 = new Date('1995/07/14');
var d2 = new Date('1995/07/14');
if(d1.getTime() > d2.getTime()){
  console.log('Pranava');
}
else if(d1.getTime() < d2.getTime()){
  console.log('Rishabh');
}
else{
  console.log('Pranava'+' '+'Rishabh');
}

function isVowel(a){
  var i;
  switch(a){
    case "a":
      return "vowel";
      break;
    case "e":  
      return "vowel";
      break;
    case "i":
      return "vowel";
      break;
    case "o":
      return "vowel";
      break;
    case "u":
      return "vowel";
      break;
    default:
      return "consonant";
  }
}
var alphaType = isVowel("l");
console.log(alphaType);