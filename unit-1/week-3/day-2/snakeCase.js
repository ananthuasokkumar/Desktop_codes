var fruit = ["Apple", "Windows", "UBUNTU"];
;
 var snake = function (x,y) {
    
     var k = x.toLowerCase() + "_" + y.toLowerCase();
    return k;
}
var result = fruit.reduce(snake);
console.log(result);