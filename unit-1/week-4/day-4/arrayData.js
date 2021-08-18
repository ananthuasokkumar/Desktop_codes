var arrayData = {
    data : [1, 2, 6, 7, 3, 4, 9, 0],
    
    lessThanItems: function (x) {
        var data1 = [];
        for (var i = 0; i < this.data.length; i++)
        {
            if (this.data[i] < x)
                data1.push(this.data[i]);
        }
        return data1;
    },
greaterThanItems: function (x) {
        var data2 = [];
        for (var i = 0; i < this.data.length; i++)
        {
            if (this.data[i]> x)
                data2.push(this.data[i]);
        }
        return data2;
    },
}
console.log(arrayData.lessThanItems(4));
console.log(arrayData.greaterThanItems(6));


