var numPattern = /\d+/g;
var input = 'I am 25 years old. I was born in 1991.';
console.log(input.match(numPattern));

//email pattern is from the internet. I will be doing it myself 
//again on weekend.
var validateEmail = function(a) {
	var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var input = 'shero95@gmail.com';
	console.log(input.match(emailPattern));
	var input = 'shero95@gmailcom';
	console.log(input.match(emailPattern));
};