function fibonacci(num) {
let first=0;
	let second=1
for(i=2;i<num;i++){ 
	third=first+second;
	first=second;
	second=third;
}
console.log(third);
	
}

module.exports = fibonacci;
