function noofways(n) {
    if (n < 0)
        return 0;
    if (n == 0)
        return 1;
    else
        return noofways(n - 4) + noofways(n - 8);
}


function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 1; i <= +newInput[0]; i++){
        var n = +newInput[i];
       // noofways(n);
        console.log(noofways(n));
        
    }
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`1
12`);
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
