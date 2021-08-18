var calender = {
    jan: {},
    feb: {},
    mar: {},
    apr: {},
    may: {},
    jun: {},
    jul: {},
    aug: {},
    sep: {},
    oct: {},
    nov: {},
    dec: {},
    createrJn: function (sun, mon, thu, wed, thur, fri, sat) {
        this.jan={ sun, mon, thu, wed, thur, fri, sat };
        
    },
    createrFb: function (sun, mon, thu, wed, thur, fri, sat) {
        this.feb={ sun, mon, thu, wed, thur, fri, sat };
        
    },
      createrMar: function (sun, mon, thu, wed, thur, fri, sat) {
        this.mar={ sun, mon, thu, wed, thur, fri, sat };
        
    },
    createrApr: function (sun, mon, thu, wed, thur, fri, sat) {
        this.apr={ sun, mon, thu, wed, thur, fri, sat };
        
    },
    createrMay: function (sun, mon, thu, wed, thur, fri, sat) {
        this.may={ sun, mon, thu, wed, thur, fri, sat };
        
    },
    createrJun: function (sun, mon, thu, wed, thur, fri, sat) {
        this.jun={ sun, mon, thu, wed, thur, fri, sat };
        
    },
    createrJul: function (sun, mon, thu, wed, thur, fri, sat) {
        this.jul={ sun, mon, thu, wed, thur, fri, sat };
        
    },
    createrAug: function (sun, mon, thu, wed, thur, fri, sat) {
        this.aug={ sun, mon, thu, wed, thur, fri, sat };
        
    },
    createrSep: function (sun, mon, thu, wed, thur, fri, sat) {
        this.sep={ sun, mon, thu, wed, thur, fri, sat };
        
    },
    createrOct: function (sun, mon, thu, wed, thur, fri, sat) {
        this.oct={ sun, mon, thu, wed, thur, fri, sat };
        
    },
    createrNov: function (sun, mon, thu, wed, thur, fri, sat) {
        this.nov={ sun, mon, thu, wed, thur, fri, sat };
        
    },
    createrDec: function (sun, mon, thu, wed, thur, fri, sat) {
        this.dec={ sun, mon, thu, wed, thur, fri, sat };
        
    }
}


function firstPos(x) {
    var days = ['sun', 'mon', 'thu', 'wed', 'thur', 'fri', 'sat']
    
    for (var i = 0; i < 7; i++) {
        if (x == days[i])
            return i;
    
    }
}


function thirty(x) {
   // console.log(x);
     if (x == 6 || x == 7) {
        var p = 0;
        if(x!=7)
            var row = Math.ceil((30 - (7 - (x + 1))) / 7) ;
        else
            var row = Math.ceil((30 - (7 - (p + 1))) / 7)+1;
       
    }
    else {
         var row = Math.ceil((30 - (7 - (x + 1))) / 7) + 1;
         var p = x;
    }
    var newCal = [];
           
    for (var i = 0; i < row; i++) {
        var cal1 = [];
        for (var j = 0; j < 7 ; j++) {
            if (p == 0&& x==7&&i==0&&j<=p) {
                    cal1.push("null");
                    var k = 1;
             }
            else if(p == 0&& x==6&&i==0&&j<=p){
                    var k = 1;
                        cal1.push(k);
                   k++;
             }
            else if (i == 0 && j <= p) {
                 cal1.push("null");
                 var k = 1;
                }
            else {
                if (k <= 30)
                    cal1.push(k);
                else cal1.push("null");
                k++;
            }
            
        }
       newCal.push(cal1);

    }
   
    var week = [];
    for (var l = 0; l < 7; l++)
    {
        var temp1 = [];
        for (var m = 0; m < row; m++)
        {
            if(typeof(newCal[m][l]) != "string")
            {
                temp1.push(newCal[m][l]);

            }
        }
        week.push(temp1);

    }
   
    return week;
}


function thirtyOne(x) {
    if (x == 6 || x == 7) {
        var p = 0;
        if(x!=7)
            var row = Math.ceil((31 - (7 - (x + 1))) / 7);
        else
            var row = Math.ceil((31 - (7 - (p + 1))) / 7)+1;
       
    }
    else {
        var row = Math.ceil((31 - (7 - (x + 1))) / 7) + 1;
        var p = x;
    }
    var newCal = [];
   // console.log(x, p);
    for (var i = 0; i < row; i++) {
        var cal1 = [];
           
        for (var j = 0; j < 7 ; j++) {
           
            if (p == 0&& x==7&&i==0&&j<=p) {
                  
                    var k = 1;
            }
             if(p == 0&& x==6&&i==0&&j<=p){
                    var k = 1;
                        cal1.push(k);
                   k++;
            }
            else if (i == 0 && j <= p) {
                 cal1.push("null");
                 var k = 1;
            }
            else {
                if (k <= 31)
                    cal1.push(k);
                else cal1.push("null");
                k++;
            }
            
        
            
        }
       newCal.push(cal1);

    }
    
    //To eliminate empty Spaces
    var week = [];
    for (var l = 0; l < 7; l++)
    {
        var temp1 = [];
        for (var m = 0; m < row; m++)
        {
            if(typeof(newCal[m][l]) != "string")
            {
                temp1.push(newCal[m][l]); 

            }
        }
        week.push(temp1);

    }
    
    return week;
    
}


function febbb(x, y) {
    var n = y;
    function leapYear(x)
{
    if ((x % 4==0) && (x % 100!=0) || (x % 400==0) )
        return 1;
    else return 0;
}
var z=leapYear(n);

     if (x == 6 || x == 7) {
        var p = 0;
        if(x!=7)
            var row = Math.ceil((28+z - (7 - (x + 1))) / 7);
        else
            var row = Math.ceil((28+z - (7 - (p + 1))) / 7)+1;
       
    }
    else {
        var row = Math.ceil((31 - (7 - (x + 1))) / 7) + 1;
        
            var p = x;;
    }
    var newCal = [];
         
    for (var i = 0; i < row; i++) {
        var cal1 = [];
        for (var j = 0; j < 7; j++) {
             if (p == 0&& x==7&&i==0&&j<=p) {
                     cal1.push("null");
                    var k = 1;
             }
            else if(p == 0&& x==6&&i==0&&j<=p){
                    var k = 1;
                        cal1.push(k);
                   k++;
             }
            else if (i == 0 && j <= p) {
                 cal1.push("null");
                 var k = 1;
                }
            else {
                if (k <= 28+z)
                    cal1.push(k);
                else cal1.push("null");
                k++;
            }
            
        }
       newCal.push(cal1);

    }
   
    //To eliminate empty Spaces
    var week = [];
    for (var l = 0; l < 7; l++)
    {
        var temp1 = [];
        for (var m = 0; m < row; m++)
        {
            if(typeof(newCal[m][l]) != "string")
            {
                temp1.push(newCal[m][l]);
              
            }
        }
        week.push(temp1);

    }
    
    return week;
}



function january(x) {
    if (x == 6 || x == 7) {
        var p = 0;
        if(x!=7)
            var row = Math.ceil((31 - (7 - (x + 1))) / 7);
        else
            var row = Math.ceil((31 - (7 - (p + 1))) / 7);
       
    }
    else {
        var row = Math.ceil((31 - (7 - (x + 1))) / 7) + 1;
        var p = x;
    }
    var newCal = [];

    for (var i = 0; i < row; i++) {
        var cal1 = [];
           
        for (var j = 0; j < 7 ; j++) {
           
            if (p == 0&& x==7&&i==0&&j<=p) {
                    // cal1.push("null");
                    var k = 1;
            }
            else if(p == 0&& x==6&&i==0&&j<=p){
                    var k = 1;
                        cal1.push(k);
                   k++;
            }
            else if (i == 0 && j <p) {
                 cal1.push("null");
                 var k = 1;
            }
            else {
                if (k <= 31)
                    cal1.push(k);
                else cal1.push("null");
                k++;
            }
            
        
            
        }
       newCal.push(cal1);

    }
    
    //To eliminate empty Spaces
    var week = [];
    for (var l = 0; l < 7; l++)
    {
        var temp1 = [];
        for (var m = 0; m < row; m++)
        {
            if(typeof(newCal[m][l]) != "string")
            {
                temp1.push(newCal[m][l]); 

            }
        }
        week.push(temp1);

    }
    
    return week;
    
}



function runProgram(input) {
    var newInput = input.split(" ");
    var year = Number(newInput[0]);
    var day1 = newInput[1];
    var pos = firstPos(day1);
    var month1 = january(pos);
    calender.createrJn(month1[0], month1[1], month1[2], month1[3], month1[4], month1[5], month1[6]);
    
   
    function position(x) {
        var high = x[0][0], pos = 0;
      //  console.log(x[5].length);
        for (var i = 0; i < x.length; i++)
        {
            for (var j = 0; j < x[i].length; j++)
            {
                if (high < x[i][j])
                {
                    high = x[i][j];
                    pos = i;
                    // h = j;
                   
                }
            }
        
        }
       // console.log(pos,h,high);
        if (pos == 0)
            return 7;
        else 
        return pos;
    

    }


    var month2 = febbb(position(month1), year);
    calender.createrFb(month2[0], month2[1], month2[2], month2[3], month2[4], month2[5], month2[6]);
    
    var month3 = thirtyOne(position(month2));
    calender.createrMar(month3[0], month3[1], month3[2], month3[3], month3[4], month3[5], month3[6]);

    
    var month4 = thirty(position(month3));
    calender.createrApr(month4[0], month4[1], month4[2], month4[3], month4[4], month4[5], month4[6]);

    var month5 = thirtyOne(position(month4));
    calender.createrMay(month5[0], month5[1], month5[2], month5[3], month5[4], month5[5], month5[6]);
      
    var month6 = thirty(position(month5));
    calender.createrJun(month6[0], month6[1], month6[2], month6[3], month6[4], month6[5], month6[6]);

     var month7 = thirtyOne(position(month6));
    calender.createrJul(month7[0], month7[1], month7[2], month7[3], month7[4], month7[5], month7[6]);

    var month8 = thirtyOne(position(month7));
    calender.createrAug(month8[0], month8[1], month8[2], month8[3], month8[4], month8[5], month8[6]);

    var month9 = thirty(position(month8));
    calender.createrSep(month9[0], month9[1], month9[2], month9[3], month9[4], month9[5], month9[6]);

    var month10 = thirtyOne(position(month9));
    calender.createrOct(month10[0], month10[1], month10[2], month10[3], month10[4], month10[5], month10[6]);

    var month11 = thirty(position(month10));
    calender.createrNov(month11[0], month11[1], month11[2], month11[3], month11[4], month11[5], month11[6]);

    var month12 = thirtyOne(position(month11));
    calender.createrDec(month12[0], month12[1], month12[2], month12[3], month12[4], month12[5], month12[6]);
    
    
    console.log(calender);

       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`2010 wed`);
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
