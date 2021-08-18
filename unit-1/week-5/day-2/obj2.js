var data = [["Nripul", 32, "M"], ["Pratheek", 30, 'M'], ['Hello', 33, 'M']];
var users = [];
for (var i = 0; i < data.length; i++){
    var user = createUser(data[i][0], data[i][1], data[i][2]);
    users.push(user);
}
function createUser(Name, age, gender) {
    return  { Name, age, gender };
    
}
//console.log(users);
//var ss = 90, g = 0;
//var s = { ss, g };
console.log(users);
users.Name.sort();

console.log(users);