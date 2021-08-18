function subSequence(newStr, strInput, low, high, ) {
    if (low <= high + 1 && newStr != "") {
        console.log(newStr);
    }
    for (let i = low; i <= high; i++) {
        subSequence(newStr + strInput[i], strInput, i + 1, high);
    }
}

function runProgram(input) {
    var input = input.trim().split("\n");
	var n = +input[0];
	var str = input[1];
    strInput = [...str];
    // console.log(strInput);
	// var newStr = "";

	subSequence("", strInput, 0, strInput.length-1);
}


if (process.env.USERNAME === "Ananthu Asokkumar") {
	runProgram(`4
abcd`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}