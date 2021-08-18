let cartItems = document.getElementById("cartItems");

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
    btn.textContent = "Check Out";
    btn.setAttribute("class", "cartBtn");
    btn.addEventListener("click", function () {
        addToCart(el);
    })
    btn.style.display = "block";
    div.append(image, pName, pPrice, btn);
    cartItems.append(div);    
}

function showProducts() {
    cartItems.innerHTML = null;
    let data = JSON.parse(localStorage.getItem("cart"));
    data.forEach(function (el) {
        getProducts(el);
    })
}

showProducts();


let displayDiv = document.getElementById("rightDiv");

function displayPrice() {
    let totalItems = document.createElement("p");
    let subTotal = document.createElement("p");
    let couponText = document.createElement("p");
    let finalPrice = document.createElement("p");

    let couponInput = document.createElement("input");
    let apply = document.createElement("button");
    couponText.innerText = "Apply Coupon Code";
    apply.innerText = "Apply";

    apply.style.backgroundColor = "limegreen";
    apply.addEventListener("click", applyNow);

    let checkOut = document.createElement("button");
    checkOut.innerText = "CheckOut";
    checkOut.setAttribute("class", "apply");
    checkOut.addEventListener("click", success);


    displayDiv.append(totalItems, subTotal,finalPrice, couponText, couponInput, apply,checkOut);
    let data = JSON.parse(localStorage.getItem("cart"));
    let sum = 0;
    let count = data.length;
    let total = data.forEach(function (el) {
        sum += +(el.price);
    })
    // console.log(sum);
    // console.log(count);
    totalItems.innerText = `Total Items: ${count}`;
    subTotal.innerText = `Sub Total: ${sum}`;

    function applyNow() {
        if (couponInput.value === "Masai30") {
            sum = Math.ceil(sum - (sum * 0.3));
        }
        subTotal.style.textDecoration = "line-through"
        finalPrice.innerText = `Final Price: ${sum}`;

        console.log(couponInput.value);
    }

    function success() {
        window.location.href = "success.html"
    }


}
displayPrice();