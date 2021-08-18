//Minimum Add to Make Parentheses Valid
function count(x) {
    var open = 0, dead = 0;
    for (var i = 0; i < x.length; i++){
        if (x[i] == '(')
            open++;
        else {
            if (open > 0)
                open--;
            else
                dead++
        }
    }
    console.log(open + dead);
}


function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 1; i <= +newInput[0]; i++){
        var data = newInput[i];
        count(data);
    }
    
        
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`2
())
()))((
`);
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
