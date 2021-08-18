function ct(x) {
    var r = '';
    var c = 0;
    var b = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var i = 0; i < x.length; i++) {
        r += x[i];
    }
    // console.log(r[1]);
    // console.log(b.length);
    for (var j = 0; j < r.length; j++) {
        for (var k = 0; k < b.length; k++) {
            if (r[j] == b[k])
                c++;
        }
       
    } console.log(c);
}
var a = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"];
ct(a);