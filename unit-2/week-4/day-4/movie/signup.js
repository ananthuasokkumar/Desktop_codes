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
    let form = document.getElementById('form');
    let name = form.name.value;
    let number = form.num.value;
    let email = form.email.value;
    let password = form.pass.value;


    let details = {
        name,
        number,
        email,
        password

    }
    
    let arr;
    arr = localStorage.getItem("signup");
    if (arr == null)
        arr = [];
    else
        arr = JSON.parse(localStorage.getItem("signup"));
    

   if (details.name == "") {
        alert("Name field should not be empty!");
    }
    else if (details.number == "") {
        alert("Contant field should not be empty!");
    }
    else if (details.email == "") {
        alert("Please provide email");
    }
    else if (details.password == "") {
        alert("Password cannot be empty");
    }
    arr.push(details);
    
    localStorage.setItem("signup", JSON.stringify(arr));

    window.location.href = "login.html";
}


