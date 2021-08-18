function lengthTest(x) {
        if (x.length==2 && x[1].length!=0 &&x[0].length!=0) 
            return 1;
            else
            return 0;
}

function legalCharTest(x) {
    var count = 0;
    var r = '';
    for (var i = 0; i < x.length; i++) {
        r += x[i];
    }
    for (var j = 0; j < r.length; j++) {
        if (48 <= r.charCodeAt(j) && r.charCodeAt(j) <= 57) {
            count++;

        }
        if (65 <= r.charCodeAt(j) && r.charCodeAt(j) <= 90) {
            count++;
            
        }
        if (97 <= r.charCodeAt(j) && r.charCodeAt(j) <= 122) {
            count++;
            
        }
        if (r.charCodeAt(j) == 45 || r.charCodeAt(j) == 46 || r.charCodeAt(j) == 95) {
            count++;
            
        }
    }
    //console.log(count);
    if (count == r.length)
        return 1;
    else return 0;
}
       
    

function dotTest(x) {
    var r = x[0];
    var p = x[1];
    var count = 0;

    //check for staring dots
    if (r[0] == "." || p[0] == ".")
        return 0;
    
    
    //Check for consecutive dots
    for (var i = 0; i < r.length; i++) {
        if (r[i] == ".") {
            count++;
            if (count == 2)
                break;
        }
        else {
            count = 0;
        }
    }
    if (count == 2)
        return 0;
    else return 1;
    
}
function tldTest(x) {
    var temp = "";
    var r = x[1];
   // console.log(r.length);
    var count = 0;
    var a = ".com";
    var b = ".net";
    var c = ".org";
    for (var i = r.length - 4; i < r.length; i++){
        temp += r[i];
    }
   // console.log(temp);
    if (a == temp) {
        count++;
    }
    else if (b == temp) {
        count++;
    }
    else if (c == temp) {
        count++;
    }
    return count;
}


function print(x) {
    if (x == 1)
        console.log("valid");
    else console.log("Not Valid");
}
    
    
        
    
function runProgram(input) {
    var newInput = input.split("\n");
    var d = Number(newInput[0]);
    for (var i = 1; i <= d;i++){
        var data1 = newInput[i].split("@");
        var len = data1.length;
        var l = lengthTest(data1);
       // console.log(len);
      //  console.log(l);
       // console.log(data1);
      // console.log(tldTest(data1));
        if (l == 0)
        {
            print(l);
        }
        else {
            var m = legalCharTest(data1);
           // console.log(m);
            if (m == 0)
            {
                print(m);
            
            }
            else {
                var h = dotTest(data1);
               // console.log(h);
                if (h == 0) {
                   print(h);
                }
                else {
                    var t = tldTest(data1);
                    //console.log(t);
                    print(t);
                }
                    
                
            }
        }


    }
            
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`11
mysite@masaischool.com
my.name@masaischool.org
mysite@masai.school.net
masai.school.com
masai@.com
@masai.school.net
name@gmail.b
name@.org.org
.name@masaischool.org
masaischool()*@gmail.com
name..1234@yahoo.com`);
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