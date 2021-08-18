function sumall(x,i,n,s) {
    if (i > n)
        return 0;
    
    s = Math.abs(x[i] - x[i + 1])
    
    return s+sumall(x, i + 1, n, s);
}

function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 1; i <= +newInput[0]; i++) {
        var data = newInput[i * 2].trim().split(" ").map(Number);
       // sumall(data,0,data.length-2,s);
       // console.log(data);
        var s = 0;
        console.log(sumall(data,0,data.length-2,s));
        
    }
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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
