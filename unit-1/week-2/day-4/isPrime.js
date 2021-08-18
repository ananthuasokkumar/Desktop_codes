var isPrime =true;
var n=17;
for(var i=2;i*i<n;i++)
{
    if(n%i==0)
    isPrime =false;

}
if(isPrime==true)
console.log("Prime");
else console.log("Not Prime");