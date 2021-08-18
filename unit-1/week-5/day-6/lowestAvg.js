/*var student = {

 data:[],

    createUser: function (name, marks) {
        this.data.push({ name, marks });
        
    },
    lowAvg: function () {
        var total = 0,low=100000,pos=0;
        for (var i = 0; i < this.data.length; i++){
            var sum = 0;
            for (var j = 0; j < this.data[i].marks.length; j++)
            {
                sum += this.data[i].marks[j];
            }
            
            if (low > sum)
            {
                low = sum;
                pos = i;
            }
        }
        console.log(this.data[pos].name)
        console.log(low/3)
    }
};
student.createUser("Nrupul", [30, 40, 50]);
student.createUser("Prateek", [20, 10, 10]);
student.createUser("Yogesh", [40, 20, 20]);
student.createUser("Aman", [10, 20, 40]);
student.createUser("Albert", [25, 15, 25]);
student.lowAvg();
console.log(student);
*/


var input = `V
Nrupul 10 20 30
Prateek 20 30 40
VI
Aman 10 20 30
Albert 20 30 40
VII
Yogesh 10 20 30
Sandhya 20 30 40`


var newInput = input.split("\n");
var array = [];
for (var i = 0; i < newInput.length; i += 3)
{
    var grade = newInput[i];
    var student1 = newInput[i + 1].split(" ");
    var student2 = newInput[i + 2].split(" ");
    
    var name1=
}