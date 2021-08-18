function count(xy) {
  var capital = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var result = "";
  for (var i = 0; i < xy.length; i++) {
    result = result + xy[i];
    console.log(xy[i]);
  }
  //
}
function runProgram(input) {
  var newInput = input;
  count(newInput);
  //console.log(newInput);
}
if (process.env.USERNAME === "Ananthu Asokkumar") {
  runProgram(
    ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"]
  );
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
