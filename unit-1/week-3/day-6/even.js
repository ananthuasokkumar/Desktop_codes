var a = [2, 4, 5, 3, 6, 8]
function even(x,i) {
    return x % 2 == 0 && i % 2 == 0;
        
    
    
    
}
var k = a.filter(even);
console.log(k);