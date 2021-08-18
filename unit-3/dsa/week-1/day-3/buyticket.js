
function queue(x) {
    let que = [];

    for (var i = 0; i < x.length;i++)
    {
        var arr = x[i].trim().split(" ");
        if (arr[0] == "E") {
            que.push(arr[1]);
            console.log(que.length);
            
        }
        else if (arr[0] == "D") {
            if (que.length == 0)
                console.log(-1, que.length);
            else {
                let q = que.shift();
                console.log(q,que.length);
                
            }
            
        }
}    
}


function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput.slice(1);
    queue(data);
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`5
E 2
D
D
E 3
D`);
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
