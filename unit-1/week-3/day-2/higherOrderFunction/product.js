var arr = [1, 2, 3,4,5];
var product = function (x,y) {
    var z = x*y;
    return z;
}
var result = arr.reduce(product);
console.log(result);