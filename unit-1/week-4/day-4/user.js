var user = {
    name: "Ironman",
    year_of_birth: 1974,
    age: function () {
        return 2020 - this.year_of_birth;
    }
}
console.log(user.age());