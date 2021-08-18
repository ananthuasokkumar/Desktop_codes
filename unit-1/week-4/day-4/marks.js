var marks = {
    name: ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"],
    mark:[10,20,30,5,15],
    average: function () {
        var sum = 0;
        for (var i = 0; i < this.mark.length; i++)
        {
            sum += this.mark[i];
        }
        return sum / this.mark.length;
    
    },
    minimum: function () {
        var temp = this.mark[0], pos = 0;;

          for (var i = 1; i < this.mark.length; i++)
        {
              if (temp > this.mark[i])
              {
                  temp = this.mark[i];
                  pos = i;
              }
        }
              return this.name[pos];

    },
     maximum: function () {
        var temp = this.mark[0],pos=0;
          for (var i = 1; i < this.mark.length; i++)
        {
              if (temp < this.mark[i])
              {
                  temp = this.mark[i];
                  pos = i;
              }
        }
        return this.name[pos];

    }
}
console.log(marks.maximum());
console.log(marks.minimum());
console.log(marks.average());