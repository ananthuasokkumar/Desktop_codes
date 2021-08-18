var container = document.getElementById("productsContainer")
console.log("Hello!!");
function addProducts() {
    let form = document.getElementById("eForm");
    let name = form.name.value;
    let price = form.price.value;
    let image = form.image.value;

    let product = {
        name,
        price,
        image
    }
    // console.log("product:", product);

    let arr = [];
    arr = localStorage.getItem("products");
    if (arr == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(localStorage.getItem("products"));
    }
    // if (name == "") {
    //     return;
    // }
    // if (price == "") {
    //     return;
    // }
    // if (image == "") {
    //     return;
    // }
    arr.push(product); 
    localStorage.setItem("products", JSON.stringify(arr))
    // console.log("arr:", arr);
    addToCart();
}

function getProducts(el) {
    let div = document.createElement("div");
    div.setAttribute("class", "productDiv");
    let pName = document.createElement("p");
    pName.innerHTML = el.name;
    

    let pPrice = document.createElement("p");
    pPrice.innerHTML = el.price;

    let image = document.createElement("img");
    image.src = el.image;

    let btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.setAttribute("class", "cartBtn");
    btn.addEventListener("click", function () {
        addToCart(el);
    })
    btn.style.display = "block";
    div.append(image, pName, pPrice, btn);
    container.append(div);    
}

function showProducts() {
    container.innerHTML = null;
    let data = JSON.parse(localStorage.getItem("products"));
    data.forEach(function (el) {
        getProducts(el);
    })
}
showProducts();


function addToCart(el) {
    console.log("hello")
    let arr;   // first visit
    arr = localStorage.getItem("cart");
    if (arr == null) {
        arr = [el];
        localStorage.setItem("cart", JSON.stringify(arr));
    }
    else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    if (arr.length == 0) {
        arr = [];
        arr.push(el);
        localStorage.setItem("cart", JSON.stringify(arr));
    }
    else {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (el.name == arr[i].name) {
                count = 1;
            }
        }
        if (count >= 1) {
            alert("Item is already added!")
        }
        else {
            arr.push(el);
            localStorage.setItem("cart", JSON.stringify(arr));
        }
    }
    // console.log(arr);
    
    // localStorage.setItem("cart", JSON.stringify(arr));
}
// showProducts();


let cartBtn = document.getElementById("cartBtn");
function goToCart() {
    window.location.href = "cartPage.html";
}