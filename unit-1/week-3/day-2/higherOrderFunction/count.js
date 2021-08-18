 var data="bbbaaaaaa  bbbcc  caa"
var n = data.length;
    var r="";
    var temp=data[0];
  var a=0;
for (var i = 0; i < n; i++) {
    var count = 0;
      
    for (var j = 0; j < a; j++)
        if (temp == data[j])
            count++;
        if (i != 0 && temp == data[i - 1])
          count++;
        else if (count == 0) {
            for (var k = i; k < n; k++) {
                if (temp == data[k])
                    count++;
                //else break;
            }
            r += data[i] + count;
        }
    a = i + 1;
    temp = data[i + 1];

}
     console.log(r);
 