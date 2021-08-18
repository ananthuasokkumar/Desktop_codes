function sum(x) {
   
    for (var i = 0; i < x.length; i++)
    {
         var s = 0;
        for (var j = 0; j < x[0].length; j++)
        {
            s += x[j][i];
        }
        console.log(s);
        
        }
}


function transform(x) {
    return x.split(" ").map(Number);
}



function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput.slice(0);
    //console.log(data);
    var array1 = data.map(transform);
    sum(array1);
    
       
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
