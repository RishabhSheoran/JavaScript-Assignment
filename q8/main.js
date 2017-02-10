var verify = function(text){
  console.log("Verify called");
  var arr = text.split("");
  var brackets = [];
  var i;
  for(i=0;i<arr.length;i++){
    if(arr[i]==="<" || arr[i]==="("  || arr[i]==="[" ){
      brackets.push(arr[i]);
    }
    else if(arr[i]===">" || arr[i]===")"|| arr[i]==="]"){
      if(brackets.length==0){
        return false;
      }
      var popped = brackets.pop();
      if( arr[i]===">" && popped!=="<"){
        return false;
      }
      else if( arr[i]==="}" && popped!=="{"){
        return false;
      }
      if( arr[i]===")" && popped!=="("){
        return false;
      }
    }
  }
  console.log(brackets);
  return (brackets.length === 0);
};
console.log(verify("dasd{sa<ds>ada{}sdads[sdas<d<>[]>]"));
