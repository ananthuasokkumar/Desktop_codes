function diaSumDiff(x) {
    var sum1 = 0,sum2=0;
    for (var i = 0; i < x.length; i++)
    {
        for (var j = i; j < x[0].length; j++) {
            if (i == j) {
                sum1 += x[i][j];
                break;
            }
        }
           
                sum2+=x[i][x[i].length - i-1];
    
        
    }
    return sum1-sum2;
}



function transform(x) {
    return x.split(" ").map(Number);
}


function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput.slice(0);
    var array1 = data.map(transform);
   // console.log(array1);
   var difference = diaSumDiff(array1);
    console.log(difference);

   
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
runProgram(`1 2 3 4
5 6 7 6
7 8 9 9
2 4 1 3`);
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
