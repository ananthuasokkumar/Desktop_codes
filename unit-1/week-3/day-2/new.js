/*function masai(s) {
    console.log("masai"+s);

}
var school = function () {
    console.log("School");

}
//school();
//masai();
function sum(a, b, c) {
    var s = a + b;
    console.log(s);
    masai(s);
}
sum(2, 2, masai);*/
var arr = [1, 2, 3, 6, 7, 8, 5, 0];
var sum = function (e) {
    var s = e*e;
    console.log(s);
}
arr.forEach(sum);