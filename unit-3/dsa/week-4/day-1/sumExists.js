function check(arr,start,end,res,sum) {
    if (start <= end + 1 && res.length!=0) {
        var s = 0;
        console.log(res);
        
        for (let i = 0; i < res.length; i++){
            s += res[i];
        }
        if (s == sum)
            return console.log('yes');
        else {
            if (start == end && s != sum)
                return console.log('no');
        }
            
            
    }
    for (var i = start; i <= end; i++){
        res.push(arr[i])
        check(arr,i+1,end,res,sum)
   }
 check(arr,start+1,end,[],sum)
}




function runProgram(input) {
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    var sum = +newInput[2];
    var newArr = [];
    console.log(sum);
    

    check(arr,0,arr.length-1,newArr,sum)
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`9
1 2 3 4 5 6 7 8 9
5`);
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