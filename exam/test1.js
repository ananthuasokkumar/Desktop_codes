function check(x, q) {
    var y = x.sort(function (a, b) {
        return a - b;
    })
    var r = x.length - 1;
    var l = 0;
    var count = 0;
    while (l < r) {
        if (y[l] + y[r] < q) {
            count++;
            r--;
        }
        // else if (y[l] + y[r] >= q) {
            
        // }
           
    }
    console.log(count);
    
}




function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    for (var i = 1; i <= n; i++){
        var q = +newInput[2 * i]
        var data = newInput.trim().split(" ").map(Number);
        check(data, q);
    }
    
 
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`2
5
1 2 3 4 5
7
3
30 10 20
15`);
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
