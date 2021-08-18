function greaterEv(x) {
    var stk = [],ans=[],count=0;
    for (var i = x.length-1; i >=0; i--){
        if (stk.length == 0)
            ans.push(-1);
        else if (stk.length != 0 && stk[stk.length - 1] > x[i] && stk[stk.length - 1] % 2 == 0)
            count += x[i];
        else if (stk.length != 0 && stk[stk.length - 1] <= x[i])
        {
            while (stk.length != 0 && stk[stk.length - 1] <= x[i])
                stk.pop()
            if (stk.length == 0)
                ans.push(-1)
            else {

                if(stk[stk.length - 1]%2==0)
                count += x[i];
            }

        }
        stk.push(x[i]);
    }
    console.log(count);
}




function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 1; i <= +newInput[0]; i++){
        var data = newInput[i * 2].trim().split(" ").map(Number);
        greaterEv(data);
        //console.log(data);
    }
    
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`1
5
2 3 5 8 3`);
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
