function fact(n) {
    if (n <= 1)
        return 1;
    return n + fact(n - 1);
}





function runProgram(input) {
    var newInput = +input;
    // console.log(newInput);
    console.log(Math.log(fact(newInput)).toFixed(4))
   
       
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
