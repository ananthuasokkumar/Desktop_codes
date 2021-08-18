 function goToSignup() {
 window.location.href = "signup.html";
}
function goToHome() {
window.location.href = "home.html";
}
function goToLogin() {
window.location.href = "login.html";
}


    function signup(e) {
    e.preventDefault();
    let count = 0;
    let form = document.getElementById('form');

    let email = form.email.value;
    let password = form.pass.value;


    let details = {
    email,
    password
    }
    
    if (details.email == "") {
        alert("Please provide email");
    }
    else if (details.password == "") {
        alert("Password cannot be empty");
    }
        
        let data = JSON.parse(localStorage.getItem("signup"));
        var len = data.length;
        //console.log(len);
       
        data.forEach(function (el) {
         count+=check(el, details);
        });
        
        if (count == len)
        alert("invalid credential");
        else
        window.location.href = "home.html";
}

function check(el, obj) {
    
        if (el.email != obj.email || el.password != obj.password)
        return 1;
        
}
