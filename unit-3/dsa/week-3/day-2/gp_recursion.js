function gp(n, r,s) {
    if (n == 0)
        return 1;
    s=1/r**n
    return s+gp(n-1,r)

}




function runProgram(input) {
    var [n,r] = input.split(" ").map(Number);
    //console.log(data);
    
    console.log(gp(n,r,0).toFixed(4));
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`3 5`);
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
