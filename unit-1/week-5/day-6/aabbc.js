function countabc(x) {
    var r="";
    for (var i = 0; i < x.length; i++){
        var count = 0;
        temp = x[i];
        

        if (i != 0 && temp == x[i - 1]) {
            count++;
        }
        else if(count==0) {
            for (var k = i; k < x.length; k++)
            {
                if (temp == x[k])
                    count++;
                else break;
            }
            r += x[i] + count;
        }
        
    }
    console.log(r);
}


function runProgram(input) {
    var newInput = input;
    countabc(newInput);
    
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`aaaabbaacc`);
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
