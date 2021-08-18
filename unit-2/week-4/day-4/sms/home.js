
function slideShow() {

    var arr = ["https://cdn.kenzie.academy/wp-content/uploads/prod/2020/11/02155935/AdobeStock_241083104-1400x934.jpg",
                "https://tngwebsolutions.ca/wp-content/uploads/2019/12/web-development-trends-2018-header-1.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUJpkkAAgJhF5FfBvb510FODUc_qeAunA7Q&usqp=CAU"]
    let div = document.getElementById("slideshow");
    let img = document.createElement('img');
    let i = 0;
    img.src = arr[0];
    div.append(img)

    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }

        img.src = arr[i];
        i++;
    }, 3000)
}

slideShow();

const students = [
    {
        name: "Rabia",
        Attendance: 99,
        img: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
        name: "Pranali",
        Attendance: 96,
        img: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
        name: "Ananthu",
        Attendance: 100,
        img: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
        name: "Rinku",
        Attendance: 85,
        img: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
        name: "Kabi",
        Attendance: 98,
        img: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
        name: "Rahul",
        Attendance: 78,
        img: "https://www.w3schools.com/howto/img_avatar2.png"
    }
]

if (localStorage.getItem("students") == null) {
    localStorage.setItem("students", JSON.stringify(students))
}

function showStudents(d) {
    let students = d;

    let studentsDiv = document.getElementById("students");
    studentsDiv.innerHTML = null;

    students.forEach(function (el) {
        let div = document.createElement("div");

        let pName = document.createElement("p");
        pName.innerText = el.name;

        let pAttendance = document.createElement("p");
        pAttendance.innerHTML = `${el.Attendance}`;

        let img = document.createElement("img");
        img.src = el.img;

        div.append(img, pName, pAttendance)
        studentsDiv.append(div);
    })

}

showStudents(JSON.parse(localStorage.getItem("students")));

function sortLH() {
    let students = JSON.parse(localStorage.getItem("students"));
    students = students.sort(function (a, b) {
        return a.Attendance - b.Attendance;
        
    })
    showStudents(students);
    // console.log("students:", students);
}

function sortHL() {
    let students = JSON.parse(localStorage.getItem("students"));
    students = students.sort(function (a, b) {
            return b.Attendance - a.Attendance;
    })
    // console.log("students:", students);

    showStudents(students);
}