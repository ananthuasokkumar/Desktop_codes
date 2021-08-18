function big(x,y){
  var diff=[];
  for(var i=0;i<x.length;i++)
  {
    diff.push(x[i]-y);
  }
              
  return diff;
   }

   function ascent(x){
     for(var i=0;i<x.length;i++)
     {
       var min=x[i];
       for(var j=0;j<x.length;i++)
       {
         if(min<x[j+1])
         {
           continue;
         }
         else 
         {
           x[j]=x[j+1];
           x[j+1]=x[j];
         }
       }
       }
     return x;
     }


     function print(x,y){
       var count=0;
       for(var i=0;i<x.lenght;i++)
       {
         if(x[i]>0)
         {console.log(x[i]+y);
          count++;
          break;
         }
       }
         if(count==0)
           console.log("-1");
     }


        function runProgram(input){
      var newInput = input.split("\n");
       var data=newInput[1].split(" ").map(Number);
      var k = Number(newInput[2]);
      //var b = Number(newInput[1]);
          for(var i=3;i<=k+2;i++)
          {
            var qurry=Number(newInput[i]);
            var u=big(data,qurry);
            var v=ascent(u);
            print(v,qurry);
          }
            
            
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`10
13 89 81 66 81 63 71 76 73 81
2
65
15
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