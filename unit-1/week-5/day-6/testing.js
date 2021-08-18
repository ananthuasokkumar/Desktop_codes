function sum(Arr) {
    
    var s = 0;
    for (var i = 0; i < Arr.length; i++) {
        for (var j = 0; j < Arr[i].length; j++) {
            s = s + Arr[i][j]
        }

    }
    console.log(s);
}




function transform(x) {
    return x.split(" ").map(Number);
}


function runProgram(input) {
    var newInput = input.split("\n");
    var n = Number(newInput[0]);
    var row1 = newInput[1].split(" ").map(Number);
    row1 = [3, 3]
    var r = row1[0];
    var data1 = newInput.slice(2,2+r);//data=[[1 2 3],[5 6 7],[7 8 9]]
    //console.log(data);
    var array1 = data1.map(transform);//[[1,2,3],[5,6,7],[7,8,9]]

    var data2 = newInput.slice(r + 3);
    var array2 = data2.map(transform);


    sum(array1);
    sum(array2);
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`2
3 3
1 2 3
5 6 7
7 8 9
2 2
1 2
3 4`);
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
