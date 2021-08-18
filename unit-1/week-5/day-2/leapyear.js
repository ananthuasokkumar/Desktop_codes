function leapyear(x)
{
    if ((x % 4==0) && (x % 100!=0) || (x % 400==0) )
        return 1;
    else return 0;
}
var z=leapyear(2000);
console.log(z);