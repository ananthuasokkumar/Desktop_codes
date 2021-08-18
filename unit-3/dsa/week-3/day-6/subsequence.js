function valid(ipt, op) {
    if (ipt.length == 0) {
        console.log(op);
        return;
    }

    var op1 = op;
    var op2 = op;
    op2 =  op+ipt[0];
    ipt = ipt.substring(1);
    
    valid(ipt, op1);
    valid(ipt, op2);
   
}



function runProgram(input) {
    var newInput = input;
      valid(input,"")
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`abc`);
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
