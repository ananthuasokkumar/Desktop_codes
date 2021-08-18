// Consonant sort
// Description

// Given an array A having N number of strings each having M lowercase characters. Sort the array using the following rule:

// String starting with a consonant should come first.
// If two strings X and Y start with a vowel, the order of their occurrences should be the same as that of array A.
// If two strings X and Y start with a consonant, the order of their occurrences should be the same as that of array A.

// Input
// First line: Single integer denoting the value of T - the number of test cases.

// For each test case:

// First line: Single integer denoting the value of N and M.

// N lines follow:

// Each of the lines consists of a string S having M characters.

// Constraints:

// 1 <= T <= 100
// 1 <= N,M <= 100


// Output
// For each test case, print N strings, each in a new line, denoting the final sorted array.


// Sample Input 1 

// 1
// 4 4
// ebcd
// fghr
// aaaa
// bbbb
// Sample Output 1

// fghr
// bbbb
// ebcd
// aaaa

function conSort(x) {
    // var newArr = [...x];
    var stk1 = [], stk2 = [];
    // console.log(newArr);
    
    for (var i = 0; i < x.length; i++){
        if (x[i][0] == 'a' || x[i][0] == 'e' || x[i][0] == 'i' || x[i][0] == 'o' || x[i][0] == 'u')
            stk1.push(x[i])
        else {
            stk2.push(x[i])
        }
        // console.log(x[i][0]);
        
    }
    let finalStk = [...stk2, ...stk1];
    
    for(var i=0;i<finalStk.length;i++){
    console.log(finalStk[i]);
    }
    
    
}
function runProgram(input) {
    var newInput = input.split("\n");
    var j = 0;
    for (var i = 1; i <= +newInput[0]; i++){
        var [r, c] = newInput[i + j].trim().split(" ").map(Number);
        var data = newInput.slice(i + j + 1, i + j + r + 1);
        j += r;
        // console.log(data);
        conSort(data)
    }
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`1
4 4
ebcd
fghr
aaaa
bbbb
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
