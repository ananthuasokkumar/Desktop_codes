var itemstring = {
    item: "FireFox",
    vowelsCount: function () {
        var count = 0;
        var low = this.item.toLowerCase();
        for (var i = 0; i < this.item.length; i++){
            if (low[i] == 'a' || low[i] == 'e' || low[i] == 'i' || low[i] == 'o' || low[i] == 'u')
                count++
        }
        return count;
    },
    changeCase: function () {
        var a = "abcdefghijklmnopqrstuvwxyz";
        var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var r = "";
        for (var i = 0; i < this.item.length; i++)
        {
            for (var j = 0; j < A.length; j++) {
                if (this.item[i] == a[j])
                    r+=(A[j]);
                else if(this.item[i]==A[j])
                    r+=(a[j]);
            }
        }
        return r;
    },
    reverse: function () {
        var r = "";
        for (var i = this.item.length - 1; i >= 0; i--){
            r += this.item[i];
        }
        return r;
    }

}
console.log(itemstring.reverse());
console.log(itemstring.vowelsCount());
console.log(itemstring.changeCase());
//console.log(itemstring);