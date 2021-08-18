function validP(x) {
    var stk = [];
   for (var i = 0; i < x.length; i++){
       if (x[i] == '[' || x[i] == '(' || x[i] == '{')
           stk.push(x[i]);
       else if (stk.length > 0 && x[i] == '}' && stk[stk.length - 1] == "{" || x[i] == ')' && stk[stk.length - 1] == '(' || x[i] == ']' && stk[stk.length - 1] == '[') {
           stk.pop();
       }
       else if (x[i] == ']' || x[i] == '}'|| x[i] == ')') {
           return console.log('unbalanced');
       }

    }
    if (stk.length == 0)
        console.log("balanced");
    else
    {
        console.log("unbalanced");
    }

}



function runProgram(input) {
    var newInput = input;
    
    validP(newInput)
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`{(([])[])[]}`);
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
