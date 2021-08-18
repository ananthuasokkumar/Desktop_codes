const admins = [
    {
        username: "nrupul",
        password: "nrupul123"
    },
    {
        username: "swanand",
        password: "swanand123"
    },
    {
        username: "jonny",
        password: "jonny123"
    }
]

if (localStorage.getItem('admins') == null) {
    localStorage.setItem('admins', JSON.stringify(admins));
}

function startLogin(e) {
    e.preventDefault();
    const form = document.getElementById("loginForm");
    const btn = document.getElementById("button");
    const username = form.username.value;
    // console.log("username:", username);
    const password = form.password.value;
    // console.log("password:", password);

    const admins = JSON.parse(localStorage.getItem('admins'));
    
    for (let i = 0; i < admins.length; i++) {
        let u = admins[i].username;
        let p = admins[i].password;

        if (u == username && p == password) {
            // alert("success");
            window.location.href='home.html'
            // break;
        }
     }
}