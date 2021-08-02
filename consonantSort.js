function runProgram(input){
    var newInput = input.split("\n");
  	
  	for (let i = 1; i < newInput.length; i++) {
      	let data = newInput[i].split(" ").map(Number);
      	let row = data[0];
      	let consonantStack = [];
		let vowelStack = [];

		for (let j = i+1; j <= i+row; j++) {
        	if (newInput[j][0] == 'a' || newInput[j][0] == 'e' || newInput[j][0] == 'i' || newInput[j][0] == 'o' || newInput[j][0] == 'u') {
            	vowelStack.push(newInput[j]);
            } else {
            	consonantStack.push(newInput[j]);
            }
        }
      
      	for (let k = 0; k < consonantStack.length; k++) {
        	console.log(consonantStack[k]);
        }
      
      	for (let k = 0; k < vowelStack.length; k++) {
        	console.log(vowelStack[k]);
        }
      
      	i += row;
    }
}

if (process.env.username === 'HP') {
    runProgram(`1
4 4
ebcd
fghr
aaaa
bbbb`)
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