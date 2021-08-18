var input = `2
3
1 2 3
5
2 2 2 2 1
`;

var item=input.split("\n");
    var tc=Number(item[0]);
    for(var i=1;i<=tc;i++)
    {
        var n=Number(item[i*2-1]);
        var arr=item[2*i].split(" ").map(Number);
       oddpairs(arr);
    }
function oddpairs(x) {
  for (var i = 0; i < x.length; i++)
  {
    if (x[i] % 2 != 0){
      var temp = x[i];
      for (var j = 0; j < x.length; j++) {
        if (x[j] % 2 == 0)
          console.log(temp, x[j])
      }
    }
    }
}