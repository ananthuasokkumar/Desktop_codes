function famSum(num) {
    if (num.length == 0) {
        return 0;
    }
    else if (num.length == 1) {
        return +num;
    }
    let temp = 0;
    for (let i = 0; i < num.length; i++) {
        temp = temp + (+num[i]);
    }
    return famSum(temp.toString());
}

// function sum(concat, len, s) {
//     if (len == 0) {
//         return;
//     }
//     newConcat = +concat[len];
//     if (newConcat.length >= 1) {
//         s + sum(concat, len, s);
//     }
// }

function runProgram(input) {
    var [num, n] = input.trim().split(" ");
    // var nNew = Number(n)
    // console.log(num, nNew);

    // console.log(famSum(num, nNew));
    // let concat = famSum(num, nNew);
    // console.log(sum(concat, concat.length - 1, 0));
    let res = famSum(num);
    res *= n;

    console.log(famSum(res.toString()));

}


if (process.env.USERNAME === "hp") {
	runProgram(`123 3`);
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