function fibonacci(num) {
// your code here
	if(num==1 || num==0){
		return 0;
	}
	if(num==2){
		return 1;
	}

	return (fibonacci(num-1)+fibonacci(num-2));
	// let num1= fibonacci(num-1);
	// let num2= fibonacci(num-2);
	// let result= num1+num2;
	// console.log(result);
	// return result;
}
// console.log(fibonacci(0));
// module.exports = fibonacci;
