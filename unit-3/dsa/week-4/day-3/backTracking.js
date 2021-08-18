// possible cominations of a string
function permute(str,l,r){
    if(l==r)
        console.log(str.split("").join(" "));
    else {
        for (let i = l; i <= r; i++){
            str = swap(str, l, i);
            permute(str,l+1,r)
        }
    }
    
}
let swap = (str, i, j) => {
    let arr = [...str];
    [arr[i], arr[j]] = [arr[j], arr[i]]
//    console.log(arr.join(""));
    
    return arr.join("");
}
// swap('abc', 1, 2);
function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput[1].trim().split(" ").map(Number);
    permute(data, 0, data.length - 1);
    
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`3
1 2 3`);
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
