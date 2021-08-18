function anagram(x,y){
    var a=x.length,b=y.length;
var data1={};
var data2={};
for(var i=0;i<x.length;i++){
    if(data1[x[i]]==undefined)
    data1[x[i]]=1;
    else data1[x[i]]+=1;

}
for(var j=0;j<y.length;j++){
    if(data2[y[j]]==undefined)
    data2[y[j]]=1;
    else data2[y[j]]+=1;
    
}
var check=[];

for(key1 in data1)
{
    for(key2 in data2)
    {
        if(key1==key2&&data1[key1]==data2[key2])
        check.push(key2);
        
    }
}
var count=0;
for(var l=0;l<x.length;l++){
    for(var m=0;m<check.length;m++)
    {
        if(x[l]==check[m])
    count++;
    }
}
for(var o=0;o<y.length;o++){
    for(var p=0;p<check.length;p++)
    {
        if(y[o]==check[p])
    count++;
    }
}

  if(count==a+b)
  console.log("True");
  else console.log("False")


}

anagram("listen","silent");
anagram("here", "heir");
anagram("wind", "dwine");
