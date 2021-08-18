function rev(x)
{
  var r="";
  var l="";
  //console.log(x.length);
 // if((x.lenght)%2)==0)
  //{
  for(var i=Math.floor((x.length/2))-1;i>=0;i--)
  {
    r+=x[i];
  }
   for(var j=(x.length)-1;j>=Math.ceil(x.length/2);j--)
  {
     l+=x[j];
    }
    if (x.length % 2 == 0)
        console.log(r + l);
    else {
        var s = Math.floor(x.length / 2)
        
        console.log(r+x[s]+l);
    }
  }
 /* else
  {
  for(var i=Math.floor(x.length/2);i>=0;i--)
  {r+=x[i];
  }
   for(var j=(x.length)-1;j>Math.ceil(x.length/2);j--)
  {
     l+=x[j];
  }
    console.log(r+x[(x.length+1)/2]+l);
  }
}
/*function print(x)
{
  r="";
  for(var i=0;i<x.lemgth;i++)
    r+=x[i];
  console.log(r);
}*/
   
var data = "abcxyzf";
console.log(data[6]);
   rev(data);
    // console.log(data.length)
     //print(z);
     // var data = newInput;
      
