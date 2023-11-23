function fibonacci(num) {
		let v=[0,1];

	if(n==0)
		return 0;
	if(n==1)
		return 0;

	for(let i=2;i<=n;i++)
		{
			let sum=v[i-1]+v[i-2];
			v.push(sum);
		}

	return v[n-1];
}

// your code here
	// if(num==1 || num==0){
	// 	return 0;
	// }
	// if(num==2){
	// 	return 1;
	// }

	// return (fibonacci(num-1)+fibonacci(num-2));
	// let num1= fibonacci(num-1);
	// let num2= fibonacci(num-2);
	// let result= num1+num2;
	// console.log(result);
	// return result;
}
// console.log(fibonacci(0));
module.exports = fibonacci;
