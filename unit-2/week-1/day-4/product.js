// OnePlus Electronics 29000
// Coffee Grocery 400
// Pen Office 30
// Book Office 60
// Rice Grocery 100
// Earphones Electronics 1000
function low(x) {

   var product = {};
    for (var j = 0; j < x.length; j++) {
        if (product[x[j].category] == undefined)
        {

            product[x[j].category] = [x[j]];
        }
        else
            product[x[j].category].push(x[j]);
    }
    console.log(product);
    for (key in product)
    {
        var low = Infinity;
        for (i = 0; i < product[key].length; i++)
        {
            if (product[key][i].price < low) {
                low = product[key][i].price;
               var pos = i;
            }
            
        }
        console.log(key+" "+product[key][pos].name)
    }

    
}







function runProgram(input) {
    var newInput = input.split("\n");
    var data = newInput.slice(0);
    var items = [];
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var obj = {};
        var temp = data[i].split(" ");
        //  console.log(data[i]);
        obj.name = temp[0];
        obj.category = temp[1];
        obj.price = +temp[2];
        items.push(obj);
    }
    low(items);
    console.log(items);

 
    
       
 }
if (process.env.USERNAME === "Ananthu Asokkumar") {
    runProgram(`OnePlus Electronics 29000
Coffee Grocery 400
Pen Office 30
Book Office 60
Rice Grocery 100
Earphones Electronics 1000`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
