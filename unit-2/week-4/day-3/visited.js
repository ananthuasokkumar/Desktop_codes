var dataDiv = document.getElementById("data");

function appendLocations(el) {
    var div = document.createElement('div');
    let pName = document.createElement('p');
    pName.innerHTML = el.name;

    let pRating = document.createElement('p');
    pRating.innerHTML = el.rating;

    let img = document.createElement("img");
    img.src = el.image;

    div.append(pName, pRating, img);
    dataDiv.append(div);
}

function showVisited() {
    dataDiv.innerHTML = null;
    let data = JSON.parse(localStorage.getItem("visited"))
    data.forEach(function (el) {
        appendLocations(el);
    })
}
showVisited();
