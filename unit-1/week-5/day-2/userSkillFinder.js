var user = {
    createUser: function (x, y) {
        user[x] = y;
        
    },
    skillFinder: function (skil) {
        for (key in user) {
            for (var i = 0; i < user[key].length; i++){
                if (user[key][i] == skil) {
                    console.log(key)
                }
            }
            
        }
        
    }
}
user.createUser('Nrupul', ["cmd", "python","sql"])
user.createUser('Prateek', ["js", "html"])
user.createUser('Aman', ["ds", "algo"])
user.createUser('Albert', ["js", "react"])
user.skillFinder("ds");
console.log(Object.values(user));
//console.log(user);
//   Nrupul : ["cmd", "python", "sql"],
//   Prateek: ["js", "html"],
//   Aman: ["ds", "algo"],
//   Albert: ["js", "react"]
////////////////////////////////
