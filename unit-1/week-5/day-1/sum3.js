var nums = [-1, 0, 1, 2, -1, -4];
var newArr = [];
    for(var i=0;i<nums.length;i++)
        {
            for(var j=i+1;j<nums.length;j++)
                {
                    for(var k=j+1;k<nums.length;k++)
                        {var newArr1=[];
                            if(nums[i]+nums[j]+nums[k]==0){

                            newArr1.push(nums[i],nums[j],nums[k]);
                            newArr.push(newArr1);

                            }
                        }
                }
            
        }
   var data = {};
var newArr2=[]
for (var l = 0; l < newArr.length; l++)
{
    newArr2.push(newArr[l].sort(function (a, b) {
        return a - b;
   }));
}
//return newArr2;

for (var m = 0; m <newArr2.length; m++)
{
    if (data[newArr2[m]] == undefined)
        data[newArr2[m]] = 1;
}
   // return data;
var newItem=[];
for(keys in data)
{
    if(data[keys]==1)
    newItem.push(keys.split(",").map(Number));
}

console.log(newItem);
    //expected output:::: [[-1,-1,2],[-1,0,1]]
   
  
    
    
