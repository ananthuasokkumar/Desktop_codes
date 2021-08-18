// New Year Celebration
// Description

// New Year Celebration is coming near and DG is hosting a party for it, To make sure the party goes well she wants order in the party.There are two counters one of ice-cream and other for Cold-drinks.

// On ice-cream counter the line was formed in form of Queue and on drinks counter the line was formed in order of Stacks.

// She gave the management of the party to NV, NV made a plan to ask the manager following types of query.

// Query types:

// 1 X : Number X enter the Queue.

// 2 X : Number X enter the Stack.

// 3: Output whoever is in-front of the queue.

// 4: Output whoever is on-top of the stack

// 5: Which person is in-front of queue get out of queue and enters the stack.

///i/p
//////////////////
// 7
// 1 4
// 2 3
// 1 2
// 3
// 4
// 5
// 4
//////////////
////o / p
/////////////
// 4
// 3
// 4
///////////////////

function stkQue(x) {
    
    let stk = [], que = [];

    for (var i = 0; i < x.length; i++){
        var q = x[i].trim().split(" ").map(Number);
        var query = q[0];
        if (query == 1)
            que.push(q[1]);
        else if (query == 2)
            stk.push(q[1]);
        else if (query == 3) {
            if (que.length > 0)
                console.log(que[0]);
            else console.log("-1")
        }
        else if (query == 4){
            if (stk.length > 0)
                console.log(stk[stk.length-1]);
            else console.log("-1")
        }
        else if (query == 5)
        {
            var k = que[0];
            que.shift();
            stk.push(k)
            }
    }

}


function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput.slice(1);
    stkQue(data);
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`7
1 4
2 3
1 2
3
4
5
4`);
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
