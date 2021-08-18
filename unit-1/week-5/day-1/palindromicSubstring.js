function palindromefromsubsring(string) {
  var res = "";
  for (var i = string.length - 1; i >= 0; i--) {
    res = res + string[i];
  }
  if (string == res) {
    return string.length;
  }
}
function runProgram(input) {
  var a = input;
  var n = a.length;
  var len = 0;
  for (var i = 0; i < n; i++) {
    for (j = i + 1; j <= n; j++) {
      var str = " ";
      for (var k = i; k < j; k++) {
        str = str + a[k];
      }
      var length1 = palindromefromsubsring(str);
        console.log(length1);
      if (len < length1) {
        len = length1;
      }
    }
  }
  console.log(len);
}if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`reacecar`);
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

