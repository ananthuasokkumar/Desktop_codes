var items = [1, 2, 4, 4, 5, 6, 7];


var square = function (x) {
        
    var z = x ** 2;
    return z;
    
}
var result = items.map(square);
console.log(result);
