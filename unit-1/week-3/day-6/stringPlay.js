function camelCase(x) {
    var A = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var count = 0;
    var r = "";
    for (var j = 0; j < x.length; j++) {
        for (var k = 0; k < 26; k++) {
            if (count == 1&&x[j]!=" ")
            {
                if (x[j] == A[k] || x[j] == a[k]) {
                
                    r += A[k];
                    count = 0;
                }
            }
            else if (x[j] == A[k] && count == 0||x[j]==a[k])
               {
                
                r+= a[k];
                count = 0;
               }
                else if(x[j]==" ")
                {

                count=1;
                 }
        }
    }
    console.log(r);
}





    


function snakeCase(x) {
   var A = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var count = 0;
    var r = "";
    for (var j = 0; j < x.length; j++) {
        for (var k = 0; k < 26; k++) {
            if (count == 1&&x[j]!=" ")
            {
                if (x[j] == A[k] || x[j] == a[k]) {
                    r+= "_";
                    r += a[k];
                    count = 0;
                }
            }
            else if (x[j] == A[k] && count == 0||x[j]==a[k])
               {
                
                r+= a[k];
                count = 0;
               }
                else if(x[j]==" ")
                {

                count=1;
                 }
        }
    }
    console.log(r);
}





    



function hypenCase(x) {
    
var A = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var count = 0;
    var r = "";
    for (var j = 0; j < x.length; j++) {
        for (var k = 0; k < 26; k++) {
            if (count == 1&&x[j]!=" ")
            {
                if (x[j] == A[k] || x[j] == a[k]) {
                    r+= "-";
                    r += a[k];
                    count = 0;
                }
            }
            else if (x[j] == A[k] && count == 0||x[j]==a[k])
               {
                
                r+= a[k];
                count = 0;
               }
                else if(x[j]==" ")
                {

                count=1;
                 }
        }
    }
    console.log(r);
}





    
   



function runProgram(input) {
    var data1 = input.trim();
    var data2 = input;
    camelCase(data1);
    snakeCase(data1);
    hypenCase(data1);
    
       
            
 }
    if (process.env.USERNAME === "Ananthu Asokkumar") {
        runProgram(`Early Monday     morning   MUSIC `);
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