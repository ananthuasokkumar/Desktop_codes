function rowcolCheck(x) {
    var pass = 0;
    //row & column length check;
    if (x.length == 9) {
        for (var i = 0; i < x.length; i++) {
            if (x[i].length == 9) {
                pass = 1;
            }
            else {
                pass = 0;
                return pass;
            }
        }
    }
        return pass;
        
}
// check whether x[i][j]==0||x[i][j]>9;;
function elementCheck(x) {
    for (var i = 0; i < x.length; i++){
        var pass = 0;
        for (var j = 0; j < x[i].length; j++)
        {
            if (x[i][j] < 10 && x[i][j] > 0)
            {
                pass = 1;
            }
            else {
                pass = 0;
                return pass;
            }
        }

    }
    return pass;
}

//Check for unique elements in rows and check it with sum;
function rowElementCheck(x) {
    var pass = 0;
    for (var i = 0; i < x.length; i++)
    {
        var unique = {};
        for (var j = 0; j < x[i].length; j++)
        {
            if (unique[x[i][j]] == undefined)
            {
                unique[x[i][j]]=1
            }
            else {
                unique[x[i][j]] = 1;
            }
        }
        var sum = 0;
        for (keys in unique) {
            sum += unique[keys];
        }
        if (sum == 9)
            pass = 1;
        else {
            pass = 0;
            return pass;
        }

    }
   
    return pass;
    
}



//Check for unique elements in columns and check it with sum;
function colElementCheck(x) {
    var pass = 0;
    for (var i = 0; i < x[0].length; i++)
    {
        var unique = {};
        for (var j = 0; j < x.length; j++)
        {
            if (unique[[j][i]] == undefined)
            {
                unique[x[j][i]]=1
            }
            else {
                unique[x[j][i]] = 1;
            }
        }
        var sum = 0;
        for (keys in unique) {
            sum += unique[keys];
        }
        if (sum == 9)
            pass = 1;
        else {
            pass = 0;
            return pass;
        }

       
    }
 
    return pass;
    
}


function transform(x) {
    return x.split(" ").map(Number);
}

function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput.slice(0);
    
    var array1 = data.map(transform);
   
    var pass1 = rowcolCheck(array1);
    var pass2 = elementCheck(array1);
    var pass3 = rowElementCheck(array1);
    var pass4 = colElementCheck(array1);
    
    if (pass1 + pass2 + pass3 + pass4 == 4)
        console.log("CORRECT");
    else console.log("WRONG");
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`3 9 4 1 7 2 5 8 6
1 5 7 3 8 6 2 4 9
2 8 6 9 4 5 7 1 3
5 3 8 7 9 4 6 2 1
9 4 1 2 6 3 8 7 5
7 6 2 8 5 1 3 9 4
4 1 3 5 2 8 9 6 7
6 2 9 4 3 7 1 5 8
8 7 5 6 1 9 4 3 2`);
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
