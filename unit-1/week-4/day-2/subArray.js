function subArray(x, r, c) {
    var realArr = [];
    
    for (var i = r; i < x.length; i++) {
        var aray1=[];
        for (var j = c; j < x[i].length; j++)
        {
            aray1.push(x[i][j]);
        }

            realArr.push(aray1);
        }
    return realArr;
}


function transform(x) {
    return x.split(" ").map(Number);
}


function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput.slice(0);
    //console.log(data);
    var array1 = data.map(transform);
    var r1 = 1;
    var c1 = 1;
    var result = subArray(array1, r1, c1);
    console.log(result);
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`1 2 3
5 6 7
7 8 9`);
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
