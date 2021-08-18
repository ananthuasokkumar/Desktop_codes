function duplicate(x) {
    var stk = [];

 for (var i = 0; i < x.length; i++){
     if (x[i] != ')')
         stk.push(x[i]);
     else {
         var count = 0;
         while (stk.length != 0 && stk[stk.length - 1] != '(') {
             count++;
             stk.pop();
         }
         if (stk.length != 0 && count != 0)
             stk.pop();
         else if (stk.length != 0 && count == 0)
             return console.log('duplicate');
         
     }
        

 }
    console.log("unique pranthesis")


}

function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 1; i <= +newInput[0]; i++){
        var data = newInput[i];
        duplicate(data);
    }
    //console.log(data);
  
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`3
 a+(a+(b)+c+d)
((a+b)+(c+d))
((a+(b))+(c+d))`);
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
