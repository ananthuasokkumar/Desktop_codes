function b2d(x) {
    var decimal = 0;
    for (var i = 0, j = x.length - 1; i < x.length; i++, j--)
    {
        decimal += x[i] * 2 ** j;
    }
    return decimal;
}


function runProgram(input) {
    
    var data = input.split("").map(Number);
    console.log(b2d(data));

    
   
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`10001`);
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
