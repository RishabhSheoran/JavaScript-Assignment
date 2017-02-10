var student = {
  name:'Rishabh',
  address:'KP',
  department:'Coe',
  mobile:'+919988425953',
  reverse : function(){
              console.log("yo");
              var a = this.name;
              var arr = a.split("");
              var i,temp,j=arr.length;
              for(i=0;i<j;i++,j--){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
              }
              a=String(arr.join(""));
              return a;
            }
};
console.log(student.reverse());

