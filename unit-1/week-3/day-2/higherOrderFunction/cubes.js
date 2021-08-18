var arr = [1, 2, 3, 4, 5,6];
var div = function (x) {
    return x % 3 == 0;
}
var cube = function (x) {
    return x ** 3;
}
var sum = function (x,y) {
    var z = x+y;
    return z;
}
var result = arr.filter(div).map(cube).reduce(sum);
console.log(result);