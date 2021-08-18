function threed(dat, l, r, c) {
    var finalArray=[]
    for (i = 0; i < l; i++){
              var arr1=[]
            for (j = 0; j < r; j++){
                    var arr2 = [];
                        for (var k = 0;k<c;k++){
                                arr2.push(dat[k])
                        }
                arr1.push(arr2);
         
            }
        finalArray.push(arr1);
        }
  console.log('fianal',finalArray);
  
}
function runProgram(input){
      var newInput = input.split("\n");
      var num= newInput[0].split(" ").map(Number);
      var layer=num[0];
      var row= num[1];
      var col=num[2];
      var data=newInput[1].split(" ").map(Number);
 threed(data,layer,row,col);
  console.log(data);
}
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
     read += input;
 });
 process.stdin.on("end", function () {
     read = read.replace(/\n$/,"")
    runProgram(read);
 });
 
 process.on("SIGINT", function () {
     read = read.replace(/\n$/,"")
     runProgram(read);
     process.exit(0);
 })