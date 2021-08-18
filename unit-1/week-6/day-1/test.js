// var a = ['a','b','c','d','c','b'];
// ///unique a d
// ///repeated b c
// var data = {}
// for (var i = 0; i < a.length; i++){
//     if (data[a[i]] == undefined)
//         data[a[i]] = 1;
//     else
//         data[a[i]] += 1;
// // }
// // console.log(data);
// // for (key in data) {
// //     if (data[key] != 1)
// //         console.log(key);//a d
   
// // }
// var str = "aaabccddd";
// //i=0 str[0]=a;
// //i=1 
// var res="";
// for(var i=0;i<str.length-1;i++)
// {   var count=1;
    
//     for(var j=i+1;j<str.length;j++)
//     {
//         if(str[i]==str[j])
//         {
//             count++;
//         }
//         else
//         {
//             console.log(i,j);
//             break;
//         }
//     }
//     console.log(count);
//     if(count%2==1)
//         {
//             res=res+str[i];
//         }
    
// }
// // console.log(res);


// var obj={
//     ary_0f_Num:[1, 2, 6, 7, 3, 4, 9, 0],
//     less_than_num:function(x)
//     {
//         var res = "";
//          console.log(this.ary_0f_Num);
//         for(var i=0;i<this.ary_0f_Num;i++)
//         {
//             console.log(this.ary_0f_Num);
//             if(x>this.ary_0f_Num[i])
//             {
//                 res=res+this.ary_0f_Num[i]

//             }
//         }
//         console.log(res);
//     }

// }
// var item=5;
// obj.less_than_num(4)
// // console.log(obj);
function transform(x) {
    return x.split(" ").map(Number);
}


function runProgram(input) {
    var newInput = input.split("\n");
    var testCase = Number(newInput[0]);
    // var dim = newInput[0].split(" ").map(Number);
    // var row = dim[0];
   // var arr = [];
    var j = 1;

    for (var i = 1; i <= testCase; i++) {
        var [row, col] = newInput[j++].split(" ").map(Number);
        var arr = [];
        console.log(row, col);
        for (var k = 0; k < row; k++) {
            arr.push(newInput[j++].split(" ").map(Number));
         
        }
        console.log(arr);
    }
    //console.log(arr);

//     4sole.log(arr);
// 3 3    
// 1 2 3  //i =2
// 5 6 7
// 7 8 9
    
// 2 2     //5= 2+3
// 12 10   // 6
// 5 8
    
// 1 3    ///8=6+2
// 8 9 15  //9

// 2 3     //10 =9+1
// 1 2 3
// 4 5 6
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`2
3 3
1 2 3
5 6 7
7 8 9
2 2
4 5
6 7`);
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


