/*var data = {
    printDetails: function () {
        console.log(this.a=5+this.b)
 }   
}
var A = ['a', 'b', 'c', 'd'];
var n = [1, 2, 3, 4];
for (var i = 0; i < A.length; i++)
{
    data[A[i]] = n[i];
}
console.log(data);
var name='kk';
data[name] = 0;

data[name[0]]=1
console.log(data.k);
for (keys in data) {
    console.log(keys + "--"+ data[keys]);
}
console.log(Object.keys(data));
console.log(Object.values(data));
data.printDetails();*/

/*var data = {};
var items = ['A', 'V', 'X', 'A', 'D', 'W', 'X'];
for (var i = 0; i < items.length; i++) {
    if (data[items[i]] == undefined) {
        data[items[i]] = 1;
    }
    else {
        data[items[i]] += 1;
    }
}
    for (keys in data) {
        console.log(keys + " " + data[keys]);
    }*/

/*var data = {
    name: "Nrupul",
    addresses: [{ city: "BLR",state:"KA" },
        { city: "HYD", state: "TL" },
    {city: "MUM",state:"MH"}]
}
console.log(data.addresses);
console.log(data.addresses[0]);
console.log(data.addresses[1]);
console.log(data.addresses[2]);
for (var i = 0; i < data.addresses.length; i++)
{
    console.log(data.addresses[i].city);
    }
*/
var square = {
    side: 4,
    area: function () {
        console.log(this.side * this.side);
    }
}
square.area();