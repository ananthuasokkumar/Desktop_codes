///
function validP(x) {
    var stk = [], result = 0;
    for (var i = 0; i < x.length; i++){
        if (stk.length == 0)
            stk.push(-1);
        if (x[i] == '(')
            stk.push(i);
        else {
            if (stk.length != 0) {
                stk.pop();
                if (result < i - stk[stk.length - 1])
                    result = i - stk[stk.length - 1];
            }
            else {
                stk.push(i);
            }
        }
    }
    console.log(result);;
  
}



function runProgram(input) {
    var newInput = input;
    console.log(newInput);
    
    validP(newInput);
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`((`);
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
