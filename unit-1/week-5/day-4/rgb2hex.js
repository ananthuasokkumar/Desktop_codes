function r2h(x) {
    var h = "";
    var rem = x % 16;
  var data = {
        A:10,B:11,C:12,D:13,E:14,F:15
    }
    for (key in data) {
        if (data[key] == rem) {
            rem = key;
        }
    }
    if (x < 10)
        h += "0"+ x;
    else if (x > 10 && x < 16)
        h += 0+ ""+rem;
    else {
        if (Math.floor(x / 16) > 9) {
            for (key in data) {
                if (data[key] == Math.floor(x / 16)) {
                    h += key + "" + rem;
                }
            }
        }
        else {
            h += Math.floor(x / 16) + "" + rem;
        }
    }
    return h;
}

function rgb(x) {
    var r = "";
    for (var i = 0; i < x.length; i++){
        r += r2h(x[i]);
    }
    console.log(r);
}



function runProgram(input) {
    var newInput = input.split("\n");
    var data1 = newInput[0].split(" ").map(Number);
    var data2 = newInput[1].split(" ").map(Number);
     var data3 = newInput[2].split(" ").map(Number);
    rgb(data1);
    rgb(data2);
    rgb(data3);
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`45 0 210
0 255 0
12 24 36`);
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
