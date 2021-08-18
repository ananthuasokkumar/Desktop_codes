function stacks(x) {
    var stk = [], ans = [];
    function pusher(y) {
        stk[stk.length] = y;
    }

    function poper() {
        stk.length = stk.length - 1;
    }
     
    for (var i = 0; i < x.length; i++){
        if (stk.length == 0) {
            ans.push(-1);
            
        }
           else if (stk.length > 0 && stk[stk.length - 1] > x[i])
            ans.push(stk[stk.length-1]);
        else if (stk.length > 0 && stk[stk.length - 1]<= x[i]) {
            while (stk.length > 0 && stk[stk.length - 1] <= x[i]) {
                poper()
               
            }
            if (stk.length == 0)
                ans.push(-1)
            else
                ans.push(stk[stk.length - 1]);
        }
        pusher(x[i]);
    }
    console.log(ans.join(" "));
    console.log(x);
}


function runProgram(input) {
      var newInput = input.split("\n");
 
  for(var i=1;i<=+newInput[0];i++){
   var data=newInput[i*2].trim().split(" ").map(Number);
//   console.log(data);
    stacks(data);
  }
 }
 if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`1
4
1 3 2 4`);
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
