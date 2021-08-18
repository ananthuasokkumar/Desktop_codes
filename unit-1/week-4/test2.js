var a = 'abcd';
var A = "ABCD";
var k = "acD";
for (var i = 0; i < k.length; i++) {
    for (var j = 0; j < A.length; j++) {
        
        if (k[i] == a[j])
            k[i] = A[j];
        else k[i] = a[j];
    }
}
    console.log(k);