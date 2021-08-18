
var array = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
var a = function (x) {
    if (x.length % 2 == 1)
        //console.log(x);
        return x;
}
 var length=function(j) {
     var s = j.length ;
     //console.log(s);
     return s;
}
var sum = function (j, k) {
    return j + k;
}
var output = array.filter(a).map(length).reduce(sum);
console.log(output);