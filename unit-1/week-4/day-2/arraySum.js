function sum(x,y) {
    var s= "";
    for (var i = 0; i < x.length; i++)
    {
        for (var j = 0; j < x[i].length; j++)
        {
            s+= x[i][j] +y[i][j]+" ";
        }
        s+="\n"
    }
    return s;
    
}


function transform(x) {
    return x.split(" ").map(Number);
}
function runProgram(input) {
    var newInput = input.split("\n");
    var data1 = newInput.slice(0, 3);
    var data2 = newInput.slice(3);
    
    //console.log(data1);
    var array1 = data1.map(transform);
    var array2 = data2.map(transform);
    var total = sum(array1, array2);
    console.log(total);
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`1 2 3
5 6 7
7 8 9
2 1 2
1 2 1
2 1 2`);
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
