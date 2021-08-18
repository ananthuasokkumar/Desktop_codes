var student =
{
    data: [{
        grade: "V",
        students: [
            { name: "Nrupul", marks: [10, 20, 30] },
            { name: "Prateek", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VI",
        students: [
            { name: "Aman", marks: [10, 20, 30] },
            { name: "Albert", marks: [20, 30, 40] }
        ]
    },
    {
        grade: "VII",
        students: [
            { name: "Yogesh", marks: [10, 20, 30] },
            { name: "Sandhya", marks: [20, 30, 40] }
        ]
    }
    ],
    highest: function () {
      
        for (var i = 0; i < this.data.length; i++) {
           
            for (var j = 0; j < this.data[i].students.length; j++) {
                var temp = 0; pos = 0;
                var sum = this.data[i].students[j].marks.reduce(function (ac, el) {
                    return ac + el;

                }, 0);
                if (temp < sum) {
                    temp = sum;
                    pos = j;
                   
                }
            }
            console.log(this.data[i].grade + "-" + this.data[i].students[pos].name + "-" + temp);
        }
    }
};
student.highest();
    