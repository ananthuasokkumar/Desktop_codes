var arr = [1, 2, 3];
var odd = function (x) {
    var z = x%2==1;
    return z;
}
var result = arr.filter(odd);
console.log(result);