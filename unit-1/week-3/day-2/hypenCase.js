var fruit = ["Masai", "School"];
;
 var snake = function (x,y) {
    
     var k = x.toLowerCase() + "-" + y.toLowerCase();
    return k;
}
var result = fruit.reduce(snake);
console.log(result);