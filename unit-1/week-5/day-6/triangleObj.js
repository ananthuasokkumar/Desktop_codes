var triangle = {
    side1: 3,
    side2: 4,
    hypotenuse: function () {
        var side3 = Math.sqrt(this.side1 ** 2 + this.side2 ** 2);
        console.log(side3);
    }
}

triangle.hypotenuse();