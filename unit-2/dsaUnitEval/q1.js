function check(x) {
    
    var stk = [], ans = [];
    for (var i = 0; i < x.length; i++){
        if (stk.length == 0)
            ans.push(0);
        else if (stk.length > 0 && stk[stk.length - 1] < 0)
            ans.push(stk[stk.length - 1]);
        else if (stk.length > 0 && stk[stk.length - 1] >= 0) {
            while (stk.length > 0 && stk[stk.length - 1] >= 0) {
                stk.pop();
            }
            if (stk.length == 0)
                ans.push(0);
            else
                ans.push(stk[stk.length - 1]);
        }
        stk.push(x[i]);
        
    }
    console.log(ans);
}


function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 1; i < +newInput[0]; i++){
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        check(arr);
        console.log(arr);
    }
       
}//
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`1
5
-2 -1 5 4 -3`);//0 -2 -1 -1 0
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
