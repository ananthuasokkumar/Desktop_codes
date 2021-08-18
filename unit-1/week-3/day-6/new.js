var n = 4;
for (var i = 1; i <= n; i++) {
    var r = "";
    for (j = 1; j <= n - i; j++) {
        r += " ";
    }
    r += "/";
    var m = '\\';
    for (var l = 1; l <= 2 * i - 2; l++) {
        r += " ";
    }
    r += m;
    console.log(r);
}

      
  