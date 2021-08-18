var n=6;

for(var i=1;i<=n;i++)
{
    var result ="";
for(var j=1;j<=n-i;j++)
{
    result+=" ";

}
for(var k=1;k<=i;k++)
{
result+="* ";
}
console.log(result);
}

