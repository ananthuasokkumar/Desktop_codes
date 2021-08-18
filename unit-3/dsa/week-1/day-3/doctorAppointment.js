function queueMoves(a1, a2) {
    var count = 0;
    var q1 = a1;
    var q2 = a2;

    while (q1.length != 0) {
        var temp = q1.shift();
        for (var i = 0; i < q2.length; i++){
            if (temp == q2[i]) {
                q2.splice(i, 1);
                count++;
                break;
            }
            else {
                count++;
            }
        }
    }
    console.log(count-1);
    
}



function runProgram(input) {
    var newInput = input.split("\n");
    var data1 = newInput[1].trim().split(" ").map(Number);
    var data2 = newInput[2].trim().split(" ").map(Number);

    queueMoves(data1,data2)

       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`4
1 2 3 4
4 2 3 1`);
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
