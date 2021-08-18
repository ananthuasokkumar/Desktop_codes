var object1 = { name: "ananthu", age: 2 };//this is my original object
//Object.freeze(object1);
function change(x) {
    var object2 = Object.assign({}, x);//copying the object to new object2
    // Object.freeze(x);
    //object2 = x;
   
    object2.name = "Manu"//Change value of new Object;
   
    console.log(object2, x);
    //{ name: 'Manu', age: 2 } { name: 'ananthu', age: 2 }the original object remains the same even though it is abstract data type
}
change(object1);