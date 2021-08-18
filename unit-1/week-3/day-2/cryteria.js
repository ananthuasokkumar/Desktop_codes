var fruit = [2, 4, 5, 3, 6, 8];
var even = function (x) {
    //var k = fruit.indexOf(x);
    //console.log(k);
    
    return x % 2 == 0; 
    
}
var index = function (x) {

    var z = fruit.indexOf(x);
    return z % 2 == 0;
    
}
var result = fruit.filter(even).filter(index);
console.log(result);