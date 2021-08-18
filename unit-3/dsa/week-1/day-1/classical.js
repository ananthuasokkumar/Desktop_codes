function check(x) {
   
    var stk = [];

    for (var i = 0; i < x.length; i++){
        if (x[i] == '[' || x[i] == '(' || x[i] == '{')
            stk.push(x[i]);
        else if (stk.length > 0 && x[i] == '}' && stk[stk.length - 1] == "{" || x[i] == ')' && stk[stk.length - 1] == '(' || x[i] == ']' && stk[stk.length - 1] == '[') {
            stk.pop();
        }
        else if (stk.length == 0 && x[i] == ']' || x[i] == '}' || x[i] == ')')
            return console.log('not balanced');
    }
    if (stk.length == 0)
        console.log("balaced");
    else
    {
        console.log("not balanced");
    }

}


function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 1; i <= +newInput[0]; i++){
        var data = newInput[i];
       // console.log();
        check(data)
    }
    
   
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`3
{([))}
()
([]`);
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
