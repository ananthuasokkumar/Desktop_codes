function trans(x) {
    var newArr = [];

    for (var i = 0; i < x[0].length; i++)
    {
        var temp = [];
        for (var j = 0; j < x.length; j++)
        {
           
            temp.push(x[j][i]);
        }
        newArr.push(temp);
    }
    return newArr;;
}



function transform(x) {
    return x.split(" ").map(Number);
}


function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput.slice(0);
    var array1 = data.map(transform);
   //console.log(array1);
    var real = trans(array1);
   console.log(real);

   
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
runProgram(`1 2 3
4 5 6
7 8 9
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
