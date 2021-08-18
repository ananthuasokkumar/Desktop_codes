function queue(arr) {
    var que = [];

    for (var i = 0; i < arr.length; i++){
        var q = arr[i].trim().split(" ");
        if (q[0] == 'E') {
            que.push(q[1]);
        }
        else if (q[0] == 'D') {
            if (que.length == 0)
                console.log('Empty');
            else {
                console.log(que[0]);
                que.shift();
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
    runProgram(`4
E 2
E 3
D
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
