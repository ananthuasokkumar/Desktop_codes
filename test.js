

//abaab abab
step 1; check whether it is equal to prev Element(i = 1to last)
var res="";
for (from 1 to n)
{
    if (x[i] != x[i - 1])
        res += x[i-1];
   
}
res += x[x.length - 1];
console.log(res);
 