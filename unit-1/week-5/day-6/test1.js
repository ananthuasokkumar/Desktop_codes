//[[1, 2, 3], [1, 2, 3], [1, 2, 3]];
//var temp = [];

var array1=[],k=1;
for (var i = 0; i < 3; i++){
    var temp = [];
    for (var j = 0; j < 3; j++)
    {
        temp.push(k);
         k++;
    }
    array1.push(temp);
   // k++;
}
console.log(array1);
// when i=0; array1[[1,2,3]]
//i=1;array1=[[1,2,3],[1,2,3]]
//i = 2; array1[[[1, 2, 3], [1, 2, 3], [1, 2, 3]];
//[[[1, 1, 1], [2, 2, 2], [3, 3, 3]]
//[[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//array1[2][2]=8;

// i = 0, j = 0, 1
// i = 1, j = 1, 5
// // i = 2, j = 2, 9
// for (var i = 0; i < array1.length; i++)
// {
//     for (var j = 0; j < array1[i].length; j++){
        
//         if (i == j)
//             console.log(array1[i][j]);
//     }
// }
// 1234
// 4567
// 7890
// 1234
//  // i = 0, j = 2, 1
// // i = 1, j = 1, 5
// // i = 2, j = 0, 9   
// i = 0;j= 3 - 1-i
// i = 1, j=3 - 1 - i
// i=2,j=3-1-i
// for (var i = 0; i < array1.length; i++){
    
//         console.log(array1[i][array1.length-1-i])
    
// }
// 123
// 456
// 789

// 123
// 056
// 009 j=0 to j<i
// 1, 0 = 4
// 2, 0 = 7
// 2, 1 = 8
// i = 0,j<i
// i = 1,j<i(1,0)
// i = 2,j<i(2,0)(2,1)



for (var i = 0; i < array1.length; i++)
{
    for (var j = 0; j < array1[i].length; j++){
        if (j < i)
            array1[i][j] = 0;
            
    }
}
console.log(array1);

//sum of uppertriangle
var sum = 0;
for (var i = 0; i < array1.length; i++)
{
    for (var j = 0; j < array1[i].length; j++){
        if (i<=j) {
            sum += array1[i][j];
        }
            
    }
}
console.log(sum);

