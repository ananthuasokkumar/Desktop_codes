function ways(n) {
    
    if (n < 0)
        return 0;
    if (n == 0)
        return 1;
    else
        return ways(n-1)+ways(n-2)+ways(n-3)
}



function runProgram(input) {
    var newInput = +input;
    console.log(ways(newInput));
    
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`4`);
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
