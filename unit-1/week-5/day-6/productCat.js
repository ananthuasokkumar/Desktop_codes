var product = [];

function createpod(x, y, z) {
    product.push({ name: x, category: [y, z] });
    
}


createpod("Electronics", ",OnePlus", 2900);
createpod("Electronics", ",Earphones", 1000)
// OnePlus Electronics 29000
// Coffee Grocery 400
// Pen Office 30
// Book Office 60
// Rice Grocery 100
// Earphones Electronics 1000
console.log(product);