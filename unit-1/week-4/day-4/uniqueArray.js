var data={};
var items = ['a', 'b', 'c', 'd', 'a', 'c'];
for(var i=0;i<items.length;i++){
    if(data[items[i]]==undefined)
    data[items[i]]=1;
    else 
    data[items[i]]+=1;
}
var newItem=[];
for(keys in data)
{
    if(data[keys]!=1)
    newItem.push(keys);
}
console.log(newItem);