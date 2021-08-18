var array1 = [1, 2, 3, 4];
var array2 = [2, 4, 6, 8];
var data1 = {};
var data2 = {};
for (var i = 0; i < array1.length; i++)
{
    if (data1[array1[i]] == undefined) {
        data1[array1[i]] = 1;
    }
    else
        data1[array1[i]] += 1;
}
for (var j = 0; j < array2.length; j++)
{
    if (data2[array2[j]] == undefined) {
        data2[array2[j]] = 1;
    }
    else
        data2[array2[j]] += 1;
}
for (key1 in data1) {
    for (key2 in data2) {
        if (key1 == key2)
        {
            console.log(key1);
            }
    }
}