//1. Callbacks

//Without using Callbacks
function getValue() {
	let value = 0;
	setTimeout(function() { 
	  value = 10;
	},1000);
	
	return value;
}

 console.log(getValue());

 //getValue() is a simple JavaScript function, and when it is called it returns the value of '0' instead of '10'
 //The reason for this, is including the code where the value gets incremented to '10' in a SetTimeOut().
 //using callbacks we can get the value as '10'
 
 
 //Using Callbacks
 
 function getValue(callback) {
	let value = 0;
	setTimeout(function() { 
	  value = 10;
	  callback(value);
	},1000);
}

getValue(function (value) {
	console.log(value);
});

//Here it returns '10', because we used a callback function here.
//But having too many nested callbacks create something called 'Callback Hell'
//Now we can use Promises to avoid that.


//2. Promises


//The Promise is created here
let promise = new Promise(function (resolve, reject) {
	resolve();
	reject();
});

//The same function getValue() in the previous example is used here.
//This function returns a Promise with a value.
function getValue() {
	let value = 0;
	//resolve for success and reject for failure
	return new Promise(function (resolve,reject) {
		setTimeout(function() { 
			value = 10;
//because it's success we use resolve
			resolve(value);
		},1000);
})
	
getValue().then(function (value) {
	console.log(value);
});

//Here the function 'then' is used to resolve or reject a Promise.






























 