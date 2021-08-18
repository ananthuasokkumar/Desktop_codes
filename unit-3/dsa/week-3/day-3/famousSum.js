// The Famous Sum
// Description

// You are given two numbers nand k. The number p iscreated by concatenating the string n k times.

// we need to find thesuper digit ofthe integer p

// We definesuperdigit of an integer pusing the following rules:

// If p has only 1 digit, then itssuperdigit is 1.
// Otherwise, thesuperdigit of p is equal to thesuperdigit of the sum of the digits of p.
// Read the Sample input explanation for better understanding

// Sample Input 1 

// 148 3
// Sample Output 1

// 3
// Sample Input 2 

// 123 3
// Sample Output 2

// 9
// Hint

// Sample Input 1 Explanation

// Here n = 148 and k = 3 ,so p = 148148148.

// super_digit(P) = super_digit(148148148) 
//                = super_digit(1+4+8+1+4+8+1+4+8)
//                = super_digit(39)
//                = super_digit(3+9)
//                = super_digit(12)
//                = super_digit(1+2)
//                = super_digit(3)
//                = 3.
// Sample Input 2 Explanation

// Here n = 123 and k = 3 ,so p = 123123123

// super_digit(P) = super_digit(123123123) 
//                = super_digit(1+2+3+1+2+3+1+2+3)
//                = super_digit(18)
//                = super_digit(1+8)
//                = super_digit(9)

function digitalSum(n) {
    if (Math.floor(n / 10) == 0) {
        return n;
    }
    
    return n%10+digitalSum(Math.floor(n/10))
}


    function runProgram(input) {
    var [x,k]= input.split(" ").map(Number);
        var n = x * k;
        var res = digitalSum(n);
       // console.log(res);
        
        while (res >= 10){
            res = digitalSum(res);
        }
    console.log(res);
    

 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`123 3`);
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
