var cart = {
    data: [],
    crateCart: function (name, quantity, price) {
       this.data.push({ name, quantity, price });
    },
    total: function () {
        var sum = this.data.reduce(function (ac, el) {
            return ac + el.quantity * el.price;
        }, 0);
        return sum;
    }
}
cart.crateCart("Rice", 2, 60);
cart.crateCart("Dal", 3, 50);
cart.crateCart("Salt", 1, 20);
console.log(cart.total());
//console.log(cart);


// Rice 2 60
// Dal 3 50
// Salt 1 20