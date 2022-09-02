function addTwoNumbers(a, b) {
	let number = a + b;
	return number;
}

function isLeftGreaterThanRight(leftNumber, rightNumber) {
	let comparison = leftNumber> rightNumber;
	return comparison;
}
	
function sayHello(name) {
	let some = "Hello, " +name+ "!"
	return some;
}


//DO NOT MODIFY THE FOLLOWING PART
module.exports = {
	addTwoNumbers,
	isLeftGreaterThanRight,
	sayHello
};

addTwoNumbers();
isLeftGreaterThanRight();
sayHello();