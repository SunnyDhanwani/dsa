function checkBalance(arr) {
  
  	let stack = [];

  	for (let i = 0; i < arr.length; i++) {
      	if (arr[i] == '(' || arr[i] == '[' || arr[i] == '{' || arr[i] == ')' || arr[i] == ']' || arr[i] == '}') {
      		stack.push(arr[i]);
        }
    	if (arr[i] == ')') {
        	if (stack[stack.length - 2] == '(') {
            	stack.pop();
              	stack.pop();
            }
        } else if (arr[i] == ']') {
        	if (stack[stack.length - 2] == '[') {
            	stack.pop();
              	stack.pop();
            }
        } else if (arr[i] == '}') {
        	if (stack[stack.length - 2] == '{') {
            	stack.pop();
              	stack.pop();
            }
        }
      	//console.log(stack);
    }
  	if (stack.length == 0) {
    	return 'balanced';
    } else {
    	return 'unbalanced';
    }
}

function runProgram(input){
    var arr = input.split("");
  
  	var ans = checkBalance(arr);
  	console.log(ans);
}

if (process.env.username === 'HP') {
    runProgram(`((((((((((one))))))))))`);
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