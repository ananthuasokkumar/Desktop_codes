function neg(s,e,x)
{
    for (var i = s; i <= e; i++){
        if (x[i] < 0)
            return x[i];
        
    }
 return 0;
}

function check(x, k) {

    var l = 0,count="";

    while (l <= x.length - k) {
        var s = l;
        var e = l + k - 1;
        // if (neg(s,e,x))
        //     count += neg(s,e,x);
        // else count += -1;
        // l++;
        console.log(neg(s, e, x));
        l++;
        
}
   
// console.log(x,k);


}


function runProgram(input) {
    var newInput = input.split("\n");
    var k = +newInput[0];
var data = newInput[1].trim().split(" ").map(Number);

   check(data,k);
    
   console.log(data,k)    
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`3
12 -1 -7 8 -18 30 16 28`);
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
