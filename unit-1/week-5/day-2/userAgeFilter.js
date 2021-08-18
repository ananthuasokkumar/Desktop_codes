var user = {
    data: [],
    createUser: function (name, age) {
        this.data.push({ name, age });
        
    },
    agefilter: function (x) {
        var newData = [];
        for (var i = 0; i < this.data.length; i++)
        {
            if (this.data[i].age > x)
            {
                newData.push(this.data[i].name);
                }
        }
        return newData;
    }
};

user.createUser("Nrupul", 32);
user.createUser("Prateek", 30);
user.createUser("Aman", 26);
user.createUser("Ankur", 34);
user.createUser("Albert", 28);
user.createUser("Yogesh", 44);
user.createUser("Sidharth",22)
console.log(user.agefilter(30));
//console.log(user);

// Nrupul 32
// Prateek 30
// Aman 26
// Albert 28
// Yogesh 44
