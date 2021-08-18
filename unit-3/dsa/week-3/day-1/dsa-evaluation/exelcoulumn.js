function excel(x, n,i,s) {
    var A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   // console.log(n);
    
    if (i > n)
        return 0;
    s = search(x, A, i, 0,0,n)
     return s+excel(x,n,i+1,0)
}
function search(x,A,i, j,s,n) {
    if (x[i] == A[j]) {
       
        s = (j + 1) * 26 ** (n - i )
//console.log(i,j,s,n);
        
        return s;

    }
    return search(x,A,i,j+1,0,n)

}


function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 1; i <= +newInput[0]; i++){
        var data = newInput[i];
       // console.log(data);
        
        //excel(data, data.length, 0, 0);
        console.log(excel(data, data.length-1, 0, 0));
        
    }
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`3
A
AB
ZY`);
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
