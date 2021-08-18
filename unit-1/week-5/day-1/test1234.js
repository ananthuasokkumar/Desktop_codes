var a = [1,2,3,4,5,6];
//indexOff()
//syntax:String.indexOf('search',start)
//charAt()
//syntax::string.charAt(index);
//include
//replace()
//substr()
//slice() copy paste//for arrays
//splice cut and paste.//for arrays
//var result = a.slice(0,2);
//console.log(result);
//console.log(a.indexOf("aasc"));
//filter(),map,forEach(),reduce()
// var odd = function (el, i)
// {
//     return el%2==1
//     }
// var result = a.filter(function(el, i){
//     return i % 2 == 1 && el%2==1;
// });
// var result = a.forEach(function (el) {
//     ;
//     console.log(el + 1);
    
//     //0+1
//     //1+2

// })
// console.log(result);
var result = a.map(function (el,i) {
    return i * 2;
})
console.log(result);