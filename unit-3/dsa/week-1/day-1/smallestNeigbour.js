function smallNg2Left(arr) {
    
    var stk = [], ans = [];
    for (var i = 0; i < arr.length; i++){
        if (stk.length == 0)
            ans.push(-1);
        else if (stk.length > 0 && stk[stk.length - 1] < arr[i])
            ans.push(stk[stk.length - 1]);
        else if (stk.length > 0 && stk[stk.length - 1] >= arr[i])
        {
            while (stk.length > 0 && stk[stk.length - 1] >= arr[i]) {
                stk.pop();

            }
            if (stk.length == 0)
                ans.push(-1);
            else
                ans.push(stk[stk.length - 1]);
            
       
        }
        stk.push(arr[i]);
    }
    console.log(ans.join(" "));
    
}


function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].trim().split(" ").map(Number);
    smallNg2Left(data);
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`8
39 27 11 4 24 32 32 1`);
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
