function sum(x) {
    var row = 0;
    for (var i = 0; i < x.length; i++){
        var obj = {},count=0;
        for (var j = 0; j < x[i].length; j++) {
            if (obj[x[i][j]] == undefined) {
                obj[x[i][j]] = 1;
            }
            else {
                obj[x[i][j]] += 1;
            }
        }
        for (key in obj) {
            if (obj[key] == 1)
                count++;
        }
        if (count != 0)
            row++;
        
    }
    
    console.log(row);
}



function transform(x) {
    return x.trim().split(" ").map(Number);
}


function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    var j = 0;
    for (var i = 1; i <= n; i++) {
        var row = newInput[i + j].trim().split(" ").map(Number);
         var r = row[0];
        var data = newInput.slice(i + j + 1, i + j + r + 1);
        
        var array1 = data.map(transform);
        console.log(array1);
        sum(array1);
        j += r;
    }
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`1
3 3
1 2 3
1 6 1
1 1 1`);
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
