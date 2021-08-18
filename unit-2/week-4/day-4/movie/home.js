 function goToSignup() {
 window.location.href = "signup.html";
}
function goToHome() {
window.location.href = "home.html";
}
function goToLogin() {
window.location.href = "login.html";
}


function slides() {

    let arr = ["https://i.insider.com/5f578371e6ff30001d4e76be?width=1136&format=jpeg",
        "https://observer.com/wp-content/uploads/sites/2/2021/05/summer-movies-2021-new-e1620919489437.jpg?quality=80",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUMR1J-22KlgHKP-uBVUX38Bs4NvCF-kxHQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1E1wNFGXGXLTEgjJxiTOehlfV3Qlbmm5Odw&usqp=CAU"
        
    ];


    //let mainDiv = document.createElement('div');
    let subDiv = document.createElement('div');
    subDiv.setAttribute("class", "slideshow")
    let img = document.createElement('img');
    img.setAttribute("class", "slideshow")
    let i = 0;
    img.src = arr[0];
    subDiv.append(img)
    document.body.append(subDiv);

    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }

        img.src = arr[i];
        i++;
    }, 3000)

}
slides();
console.log("hello");

const dataBase = [
    {
        name: 'The GodFather',
        date: 2017,
        ratin: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBp210yHw6wZK-QBhV-qfPESd_br9fjLPyxA&usqp=CAU"
    },
    {
        name: 'The Deadly cop',
        date: 2015,
        ratin: 5.5,
        image: "https://i.ytimg.com/vi/I9GEGXqEoDk/maxresdefault.jpg"
    },
    {
        name: 'Dead drop',
        date: 2013,
        ratin: 6,
        image: "https://lh3.googleusercontent.com/mk5s28IMb-CTGnlAuA6lwaltgun1O3k8r8YQBJhuo07uwEUE3riGqWacLfUvNcFXgNFWDQBY840hQLF-lsLKC56n_f4Edcr4BpseNNsdK13DwS3XMMA96B4rWLU54ZgOEA=s412"
    },
    {
        name: 'The Hitmans Bodygaurd 2',
        date: 2021,
        ratin: 4,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnzFCdKRsun1xBDRu0bbB19XGG1SlUAMI7A&usqp=CAU"
    },
    {
        name: 'The GodFather',
        date: 2011,
        ratin: 7,
        image: "https://i.ytimg.com/vi/0VFHpN1pz3U/maxresdefault.jpg"
    },
    {
        name: 'Wonder Women',
        date: 2014,
        ratin: 4,
        image: "https://images.desimartini.com/media/versions/main/movie_jsarea/2017-5/5e1034c1-c9b3-463d-b6e7-f7b8b9976418_movie_jsarea.png"
    },
    {
        name: 'Robin Hood',
        date: 2010,
        ratin: 9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmtsa8fYp2kUJ6soMfopITFVhd7j_MLh02w&usqp=CAU"
    },
    {
        name: 'Assassins Ceed',
        date: 2007,
        ratin: 8,
        image: "https://i.pinimg.com/originals/41/9b/b9/419bb914d64b3f987acbec2e11270912.jpg"
    },
    {
        name: 'Great Warror',
        date: 2018,
        ratin: 5.6,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFX2R7kEoDYJlkTBQWciPDRt1BM3nrdtVgqZQ_4IgTdlNgN5y31VZVNQG5B5hHF9UCNC0&usqp=CAU"
    }
];


localStorage.setItem("movies", JSON.stringify(dataBase));
  

function btns() {
    let btnDiv = document.createElement("div");
    document.body.append(btnDiv);
    btnDiv.setAttribute("id", "btnDiv");

    let lowToHigh = document.createElement("button");
      lowToHigh.innerText = "Low to High";
      lowToHigh.setAttribute("id", "l2h");
    btnDiv.append(lowToHigh);

    let highToLow = document.createElement("button");
      highToLow.innerText = "High to Low";
     highToLow.setAttribute("id","h2l")
      btnDiv.append(highToLow);


     // low2high.addEventListener("click", low2high);
}

btns();
//let d = dataBase;
//let movieData = ;
let shodiv = document.createElement('div');
  
     function shows(d) {
        let dataBase = d;

        shodiv.innerHTML = null;
        shodiv.setAttribute("class", "gridShow")
        dataBase.forEach(function (el) {

        let movieDiv = document.createElement("div");
        movieDiv.innerHTML = null;
        movieDiv.setAttribute("class","movdiv")
        let pName = document.createElement("p");
        pName.innerText = el.name;

        let pDate = document.createElement("p");
        pDate.innerHTML = `Release Date:${el.date}`;

        let pRating = document.createElement("p");
        pRating.innerHTML = `IMDB Rating:${el.ratin}`;


        let image = document.createElement("img");
        image.src = el.image;

        movieDiv.append(image, pName, pRating, pDate)
        shodiv.append(movieDiv);
        
    })
   // subDiv.append(shodiv);
document.body.append(shodiv);
}





shows(JSON.parse(localStorage.getItem("movies")));

function low2high() {
        document.querySelector('.gridShow').innerHTML = null;

    let movieData = JSON.parse(localStorage.getItem("movies"));
     movieData = movieData.sort(function (a, b) {
        return a.ratin - b.ratin;
    });
    shows(movieData);
 //console.log(movieData);
 
}

document.querySelector("#l2h").addEventListener("click", low2high);

 //document.querySelector('.gridShow').innerHTML = null;
function high2low() {
    document.querySelector('.gridShow').innerHTML = null;
      let movieData = JSON.parse(localStorage.getItem("movies"));
    movieData = movieData.sort(function (a, b) {
        return b.ratin - a.ratin;
    });
    shows(movieData);
 //console.log(movieData);
 
}

document.querySelector("#h2l").addEventListener("click", high2low);

 //document.querySelector('.gridShow').innerHTML = null;