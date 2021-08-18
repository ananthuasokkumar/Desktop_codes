

var mainDiv = document.getElementById("cartItem");
mainDiv.setAttribute("class", "container");
   


let cartData = JSON.parse(localStorage.getItem("cart"));

// append to cart

function appendcartItems(el) {

  let subdiv = document.createElement("div");

  let pName = document.createElement('p');
  pName.innerHTML = el.name;

  let pPrice = document.createElement('p');
  pPrice.innerHTML = el.price;

  let img = document.createElement('img');
  img.src = el.image;

  let btn = document.createElement("button");
    btn.textContent = "Click to checkOut";
  btn.addEventListener("click", function () {
    addtoCart(el);
  });

  subdiv.append(img, pName, pPrice,btn);
  mainDiv.append(subdiv);
  document.body.append(mainDiv);
  //mainDiv.innerHTML = "hello123";
  console.log(el.image);

}



function addtoPage() {
  mainDiv.innerHTML = null;
  let data = JSON.parse(localStorage.getItem("cart"));
    data.forEach(function(el) {
      appendcartItems(el);
    });
   }
addtoPage();