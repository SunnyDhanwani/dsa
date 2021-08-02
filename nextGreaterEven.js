function nextGreaterEven (arr) {
	let sum = 0;
	let greaterElements = [];
  
  	for (let i = 0; i < arr.length-1; i++) {
      	let flag = 0;
    	for (let j = i + 1; j < arr.length; j++) {
        	if (arr[j] > arr[i]) {
            	greaterElements.push(arr[j]);
              	flag = 1;
              	break;
            }
        }
      	if (flag == 0) {
        	greaterElements.push(-1);
        }
    }
  	greaterElements.push(-1);
  	
  	for (let i = 0; i < greaterElements.length; i++) {
    	if (greaterElements[i] % 2 == 0) {
        	sum += arr[i];
        }
    }
  	return sum;
}

function runProgram(input){
    var newInput = input.split("\n");
  
	for (let i = 2; i < newInput.length; i += 2) {
    	let arr = newInput[i].trim().split(" ").map(Number);
      	
      	let ans = nextGreaterEven(arr);
      	console.log(ans);
    }
}

if (process.env.username === 'HP') {
    runProgram(`1
5
2 3 5 8 3`)
} else {

    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
    });

    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
        process.exit(0);
    });
}