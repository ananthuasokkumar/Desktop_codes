function check(x) {
    var stk = [];
    for (var i = 0; i < x.length; i++){
        
        var n = x[i].trim().split(" ").map(Number);
        if (n[0] == 1)
            stk.push(n[1]);
        else if (n[0] == 2)
        {
            if (stk.length == 0)
                console.log('No Books');
            else {
                console.log(stk[stk.length - 1]);
                stk.pop();
            }
        }
         else if (n[0] == 3)
        {
             if (stk.length == 0)
                console.log('No Books');
            else {
                console.log(stk[stk.length - 1]);
                
            }
        }   
        
    }
 }





function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput.slice(1);
    check(data);
    //console.log(data);
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`6
1 1
2 
1 2
3
2
3`);
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
