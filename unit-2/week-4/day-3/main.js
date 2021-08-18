var dataDiv = document.getElementById("data");

function storeLocation() {
    let form = document.getElementById("myForm");
    // alert("Hello world!!")
    let name = form.name.value;
    let rating = form.rating.value;
    let image = form.img.value;

    let location = {
        name,
        rating,
        image
    }
    // console.log("location:", location);

    let arr;   // first visit
    arr = localStorage.getItem("locations");
    if(arr == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(localStorage.getItem("locations"));
    }

    arr.push(location);
    localStorage.setItem("locations", JSON.stringify(arr));
}

function appendLocations(el) {
    var div = document.createElement('div');
    let pName = document.createElement('p');
    pName.innerHTML = el.name;

    let pRating = document.createElement('p');
    pRating.innerHTML = el.rating;

    let img = document.createElement("img");
    img.src = el.image;

    let btn = document.createElement("button");
    btn.textContent = "Add to Visited";
    btn.addEventListener("click", function () {
        addtovisited(el);
    })
    btn.style.display = "block";

    div.append(pName, pRating, img, btn);
    dataDiv.append(div);
}

function showLocations() {
    dataDiv.innerHTML = null;
    let data = JSON.parse(localStorage.getItem("locations"))
    data.forEach(function (el) {
        appendLocations(el);
    })
}

function addtovisited(obj) {
    let arr;   // first visit
    arr = localStorage.getItem("visited");
    if (arr == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(localStorage.getItem("visited"));
    }

    arr.push(obj);
    localStorage.setItem("visited", JSON.stringify(arr));
}

function showVisited() {
    window.location.href = "visited.html"
}

showLocations();