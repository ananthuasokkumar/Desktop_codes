var mainDiv = document.getElementById("data");
mainDiv.setAttribute("class", "container");
//mainDiv.innerHTML="heloooo"
//console.log("hello");
  //setting a local store for products
function addtoGodown() {
 // e.preventDefault;
    let form = document.getElementById("form");

    let name = form.name.value;
    let price = form.price.value;
    let image = form.image.value;
 // access data from browser to js object
    let store = {
        name,
        price,
        image
    }
    //add to my local storage 
    let arr;
    arr = localStorage.getItem("godown");
    if (arr == null)
        arr = [];
    else arr = JSON.parse(localStorage.getItem("godown"));
      //pushing new items from store to godown
    arr.push(store);
    localStorage.setItem("godown", JSON.stringify(arr));
  addtoPage();
  //addtoCart();

}
   

//append fn will append each item to page.

function appendItems(el) {
  let subdiv = document.createElement("div");

  let pName = document.createElement('p');
  pName.innerHTML = el.name;

  let pPrice = document.createElement('p');
  pPrice.innerHTML = el.price;

  let img = document.createElement('img');
  img.src = el.image;

  let btn = document.createElement("button");
    btn.textContent = "Add to Cart";
  btn.addEventListener("click", function () {
    addtoCart(el);
  });

  subdiv.append(img, pName, pPrice,btn);
  mainDiv.append(subdiv);
  document.body.append(mainDiv);
  //mainDiv.innerHTML = "hello123";
  console.log(el.image);

}

///getting each item and passing it to appendfn
function addtoPage() {
  mainDiv.innerHTML = null;
  let data = JSON.parse(localStorage.getItem("godown"));
    data.forEach(function(el) {
      appendItems(el);
    });
   }
 


addtoPage();

///add to cart
// function addtoCart(el) {
//   console.log(el);

//   let crt;
//   crt = JSON.parse(localStorage.getItem("cart"));
//   let count = 0;
//   for (let i = 0; i < crt.length; i++){
//     if (crt[i].name == el.name) {
//       count = 1;
//       break;
//     }
//   }
  
  
//   if (count >= 1) {
//     alert("item already exits")
//   }
//   else {
//     if (crt == null)
//       crt = [];
//     else
//       crt = JSON.parse(localStorage.getItem("cart"));
//     crt.push(el);
//     localStorage.setItem("cart", JSON.stringify(crt));
//   }
// }


// ///cart
// function gotoCart() {
//   window.location.href = "cart.html";
// }