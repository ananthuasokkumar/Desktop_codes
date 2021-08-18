function index(x) {
    

    for (var i = 0; i < x.length-1; i++){
          var max=i
        for (var j = i+1; j <x.length; j++){
            if (x[max] > x[j])
            {
                max = j;
            }
          
                x[i] = i + max;
                x[max] = x[i] - max;
                x[i] = x[i] - max;
        }
    }
    console.log(x);
}


function runProgram(input) {
    var newInput = input.split("\n");
    var n = +newInput[0];
    var data = newInput[1].trim().split(" ").map(Number);
    index(data);
    console.log(data);
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`5
4 5 3 7 1`);
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
