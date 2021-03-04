// Task 6. Function superSum() ============================================>
function superSum(num1, num2) {
	alert(num1 + num2);
}
// superSum func test:
// superSum(2, 4);

// Task 7. Find max and min elements in numbers array =====================>
// creating numbers array
let numberArr = [3, 66, 28, -5, 32, 104, -13, 66, 125];
// creating max and min variables
let maxNum = numberArr[0];
let minNum = numberArr[0];
// cycle for() (logic)
for(let i = 0; i < numberArr.length; i++) {
	if(maxNum < numberArr[i]) {
		maxNum = numberArr[i];
	} else if (minNum > numberArr[i]){
		minNum = numberArr[i];
	}
}
// test:
console.log('Task 7 test:');
console.log(`Min number is: ${minNum} / Max number is: ${maxNum}`);

// Task 8. Replace values of two variables =================================>
let a = "XXX";
let b = "YYY";
// replacing process
let c = a;
a = b;
b = c;
//test:
console.log('Task 8 test:');
console.log(a); // то что было изначально в b
console.log(b); // то что было изначально в a

// Task 9. findMax function for numbers arrays =============================>
function findMax(arr) {
	// creating maxNum variable inside function visability
	// so it doesn't conflict with global maxNum variable
	let maxNum = arr[0];
	for(let i = 0; i < arr.length; i++) {
		if(maxNum < arr[i]) {
			maxNum = arr[i];
		}
	}	
	return maxNum;
}
// test:
console.log('Task 9 test:');
console.log(findMax(numberArr));