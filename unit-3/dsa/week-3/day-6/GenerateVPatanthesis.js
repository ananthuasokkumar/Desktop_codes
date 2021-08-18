function validParanthesis(s, open, close, n) {
    if (s.length == 2 * n) {
       
        console.log(s);
        return;
    }
    if (open < n) {
        validParanthesis(s + "(", open + 1, close, n);
    }
    if (open > close) {
        validParanthesis(s + ")", open, close + 1, n);
    }
}

function getFact(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * getFact(n - 1);
    }
}

function getNumber(n) {
    return getFact(2*n) / (getFact(n) * getFact(n + 1));
}



function runProgram(input) {
    input = input.trim().split("\n");

    for (let i = 1; i <= +input[0]; i++) {
        let n = +input[i];
        console.log(getNumber(n));
        validParanthesis("", 0, 0, n);
       
    }
    
}


if (process.env.USERNAME === "Ananthu Asokkumar") {
	runProgram(`3
3
2
1
`);
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