function duplicate(str) {

    if (str.length == 1) {
        return str;
    }
    if (str.length == 0)
        return "Empty String"
    var res = '';
    for (var i = 0; i < str.length; i++){
        if (i == 0) {
            if (str[i] != str[i + 1])
                res = res + str[i];
        }
        else if (i == str.length - 1) {
            if (str[i] != str[i -1])
                res = res + str[i];
        }
        else {
            if (str[i] != str[i - 1] && str[i] != str[i + 1])
                res += str[i];
        }
    }
    if (str.length == res.length)
        return res;
    else
        return duplicate(res);
}
/// aaabbbc



function runProgram(input) {
    var newInput = input.split("\n");
    for (var i = 1; i <= +newInput[0]; i++){
        var data = newInput[i].trim();
        //duplicate(data);
        console.log(duplicate(data));
        
    }
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`4
azxxxzy
caaabbbaac
gghhg
aaaacddddcappp`);
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
