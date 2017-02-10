var reverse = function(a){
	var k = typeof(a);
  var l;
  var x = String(a);
  var arr = x.split("");
  var i,temp,j=arr.length;
  for(i=0;i<j;i++,j--){
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  switch(k){
    case "number":
      l = Number(arr.join(""));
      break;
    case "string":
      l = String(arr.join(""));
      break;
   }
  return l;
};
console.log(reverse(1234));
console.log(reverse("AppDirect"));

var palindrome = function isPalindrome(a){
  var i,j=a.length-1; 
  for(i=0;i<j;i++,j--){
    if(a[i]!=a[j]){ 
      return false;
    }
  }
  return true;
};
console.log(palindrome("abbba"));

var firstNonRepChar = function(str){
  var i;
  for(i=0;i<str.length;i++){
    var ch = str.charAt(i);
    if(str.indexOf(ch) == i && str.indexOf(ch,i+1)==-1){
      return ch;
    }  
  }
  return null;
};
console.log(firstNonRepChar("xxydym"));
