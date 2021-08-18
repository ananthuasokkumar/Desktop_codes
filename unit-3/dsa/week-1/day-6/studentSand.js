function studentCount(x, y) {
    var count = 0;
    var stQue = x, swQue = y;
    while(swQue.length != 0 && count < stQue.length) {
        if (stQue[0] == swQue[0]) {
            stQue.shift();
            swQue.shift();
            count = 0;
        }
        else {
            count++;
            var p = stQue.shift();
            stQue.push(p);       
        }
    }
    console.log(stQue.length);
}

function runProgram(input) {
    var input = input.trim().split("\n");
    var students = input[1].trim().split(" ").map(Number);
    var sandwich = input[2].trim().split(" ").map(Number);

     console.log(students);
     console.log(sandwich);
    studentCount(students, sandwich);
}


if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`2
1 1 0 0
0 1 0 1`);
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