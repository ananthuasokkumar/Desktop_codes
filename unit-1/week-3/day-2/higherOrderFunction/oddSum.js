var arr = [1, 2, 3, 4, 5];
var odd = function (x) {
    return x % 2 == 1;
}
var sum = function (x,y) {
    var z = x+y;
    return z;
}
var result = arr.filter(odd).reduce(sum);
console.log(result);