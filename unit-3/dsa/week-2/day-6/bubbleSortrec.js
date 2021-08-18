//bubble sort using recursion

function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].trim().split(" ").map(Number);
    var i = 0;
    bubble(data,data.length-2,i);
    console.log(data);
    
    /// function bubble sort

    function bubble(x, l, i){
        if (i==l)
            return;
        
        swap(x, l-i+1,0)
        bubble(x,l,i+1)
    }
       
    // swap function
    function swap(x, l, i){
        if (l == i)
            return;
        if (x[i] > x[i + 1]) {
            [x[i], x[i + 1]] = [x[i + 1], x[i]];

        }
        swap(x,l,i+1)
            
    }
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`5
3 5 0 9 8`);
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
