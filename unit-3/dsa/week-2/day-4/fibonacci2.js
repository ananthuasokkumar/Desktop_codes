function fibonacci(x) {
    
    if (x == 1)
        return 1;
    else
        return fibonacci(x - 1) + fibonacci(x - 2);
    
}




function runProgram(input) {
    var newInput = +input;
    console.log(fibonacci(newInput));
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`5`);
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
