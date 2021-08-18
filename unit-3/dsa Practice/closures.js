let a;

function check(x) {
    var k = 0;
    return () => {
       // a = 1;
//k = 1
        process.nextTick(x)
        return k;
    }
}
// let x=
 let l=check(() => {
    a = 6;
});
console.log(check(),l());
k = 3;


a = 1;
