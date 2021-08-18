/*2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89
var newInput = input.split('\n');
console.log(newInput);
newInput = ['2', '6 3', '8 2 3 11 11 10',]*/
function money(array, amount) {
    var count = 1;
    var temp = array[0];
    for (var i = 1; i < array.length; i++){
        if (temp < array[i]) {
            count++;
            temp = array[i];
        }
       // else continue;
    }
    var result = count * amount;
        console.log(result);

    
}







 function runProgram(input) {
     var newInput = input.split("\n");
     var n = Number(newInput[0]);
     for (var i = 1; i <= n;i++)
     {
         var rate = newInput[i * 2 - 1].split(" ").map(Number);
         var rate1 = rate[1];
         var data = newInput[i * 2].split(" ").map(Number);
         money(data, rate1);
      }  
     
     
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`3
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89
4 5
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