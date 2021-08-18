var calc = {
    a: 5,
    b: 9,
    addition: function () {
        return this.a + this.b;
    },
    sutraction: function () {
        return this.a - this.b;

    },
    multiplication: function () {
        return this.a * this.b;
    },
    division: function () {
        return this.a / this.b;
    }

}
console.log(calc.addition());
console.log(calc.sutraction());
console.log(calc.multiplication());
console.log(calc.division());