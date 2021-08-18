function index(q,x) {
    for (var i = 0; i < q.length; i++){
        if (q[i] == x)
            return i;
         
    }
     return "a";
}
function queue(arr) {
   // console.log(arr);
    var q1 = [], q2 = [], q3 = [], q4 = [], mainQue = [];
    for (var i = 0; i < arr.length; i++){
        var query = arr[i].trim().split(" ");
        // console.log(query);
        if (query[0] == "E") {
            switch (query[1]) {
                case '1': if (mainQue.length == 0 || index(mainQue, query[1]) == "a")
                    mainQue.push(query[1]);
                    q1.push(query[2]);
                    break;
                 case '2': if (mainQue.length == 0 || index(mainQue, query[1]) == "a")
                    mainQue.push(query[1]);
                    q2.push(query[2]);
                    break;
                 case '3': if (mainQue.length == 0 || index(mainQue, query[1]) == "a")
                    mainQue.push(query[1]);
                    q3.push(query[2]);
                    break;
                 case '4': if (mainQue.length == 0 || index(mainQue, query[1]) == "a")
                    mainQue.push(query[1]);
                    q4.push(query[2]);
                    break;
                
            }
           
        }
        else if (query[0] == 'D') {
            switch (mainQue[0]) {
                  case '1':
                        var y = q1.shift();
                        console.log(mainQue[0],y)
                        if (q1.length == 0)
                         mainQue.shift();
                        // console.log(mainQue[0],y);
                        break;
                  case '2':  var y = q2.shift();
                        console.log(mainQue[0],y)
                        if (q2.length == 0)
                         var z = mainQue.shift();
                        // console.log(z,y)
                        break;
                  case '3': var y = q3.shift();
                        console.log(mainQue[0],y)
                        if (q3.length == 0)
                         var z = mainQue.shift();
                        // console.log(z,y)
                        break;
                 case '4': var y = q4.shift();
                        console.log(mainQue[0],y)
                        if (q4.length == 0)
                        var z = mainQue.shift();
                        // console.log(z,y)
                        break;
                }
        
        
            }
    }
    //  console.log(q1,q2,q3,q4,mainQue);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput.slice(1);
   queue(data);
    // console.log(data)
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`5
E 1 1
E 2 1
E 1 2
D
D
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
