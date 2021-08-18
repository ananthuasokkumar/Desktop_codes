function gcd(x,y){
 if(x==0)
   return y;

         return gcd(y%x,x);
 
 }


function runProgram(input){
      var newInput = input.split("\n");
      var a = Number(newInput[0]);
   for(var i=1;i<=a;i++){
   	var [x,y]=newInput[i].split(" ").map(Number);
     //if(x<y)
     console.log(gcd(x,y,x));
   }
  
      
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`1 2 3 4 5`);
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
