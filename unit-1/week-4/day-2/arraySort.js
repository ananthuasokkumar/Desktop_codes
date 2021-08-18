function autosort(a,b) {
    return a - b;
}


var a = [[8, 2, 4], [8, 4,2], [9, 3]];
console.log(a[0].sort(autosort));


var data = {};
var newArr=[]
for (var i = 0; i < a.length; i++)
{
    newArr.push(a[i].sort(function (a, b) {
        return a - b;
   }));
}
console.log(newArr);
if (newArr[0] === newArr[1])
    console.log("happy");
for (var j = 0; j < a.length; j++)
{
    if (data[newArr[j]] == undefined)
        data[newArr[j]] = 1;
}
console.log(data);
var newItem=[];
for(keys in data)
{
    if(data[keys]==1)
    newItem.push([keys.split(",").map(Number)]);
}
console.log(newItem);
