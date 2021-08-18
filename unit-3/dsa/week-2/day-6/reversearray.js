// //reverse an array using recursion
// function newReverse(x, s, e) {
    
//     if (s >= e)
//         return;
//     [x[s], x[e]] = [x[e], x[s]];

//     console.log(newReverse(x, s++, e--));
//  }


function runProgram(input) {
    var newInput = input.split(" ").map(Number);
    var l = 0;
  newReverse(newInput,l,newInput.length-1);
    // console.log(newReverse(newInput,0,newInput.length));
    
    console.log(newInput);
    
       function newReverse(x, s, e) {
    
    if (s >= e)
        return;
    else {
            [x[s], x[e]] = [x[e], x[s]];

             newReverse(x, s+1, e-1);
    }
 }
 }
if (process.env.USERNAME =="Ananthu Asokkumar") {
    runProgram(`1 2 3`);
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
