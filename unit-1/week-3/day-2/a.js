var array = ["apple", "windows", "ubuntu", "cola", "system"];
var a = function (x) {
    if(x.charAt([0])=="a"||x.charAt([x.length-1])=="a")
    return x;
}
var output = array.filter(a);
console.log(output);