function drStrange(arr, res, first, last) {
    if (first <= last + 1 && res != null) {
        console.log(res);
    }
    for (let i = first; i <= last; i++) {
        drStrange(arr, res + " " + arr[i], i + 1, last);
    }
}

function runProgram(input) {
    let n = +input;
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    let res = "";
    let last = arr.length - 1;
    drStrange(arr, res, 0, last);
}


if (process.env.USERNAME === "Ananthu Asokkumar") {
	runProgram(`3`);
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