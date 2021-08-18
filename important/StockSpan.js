function index(x, y) {
    for (var i = 0; i < x.length; i++){
        if (x[i] == y)
            return i;
    }
}

function stacks(x) {
    var stk = [], ans=[];
    for (var i = 0; i < x.length; i++){
        if (stk.length == 0) {
            ans.push(-1);
        
        }
        else if (stk.length > 0 && stk[stk.length - 1] >x[i])
             ans.push(index(x,stk[stk.length-1]));
        else if (stk.length > 0 && stk[stk.length - 1] <= x[i]) {
            var count = 0;
            while (stk.length > 0 && stk[stk.length - 1] <= x[i]) {
                stk.pop();
                count++;
            }
            if (stk.lenght == 0)
                ans.push(-1);
            else
            {
                ans.push(index(x,stk[stk.length-1]));

            }
            
        }
        stk.push(x[i]);

    }
    console.log(ans);

    for (var i = 0; i < ans.length; i++){
        ans[i] = i - ans[i];
    }
   // console.log(x);
    
    console.log(ans.join(' '));
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
100 80 60 70 60 76 85`);
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
