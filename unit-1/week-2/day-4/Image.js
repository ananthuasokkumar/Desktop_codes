var n=5;
for(var i=1;i<=n;i++)
{
    var result ="";
    for(var j=1;j<=n-1;j++)
    {
        if(i==n)
        result+="* ";
        else result+="  ";
    }
    result+="*";
    console.log(result);
    }
