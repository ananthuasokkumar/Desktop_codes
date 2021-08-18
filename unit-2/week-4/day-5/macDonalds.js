

function placeOrder() {
    console.log("hello")
    let menu = [
        {
            id: 1234,
            name: 'Sandwitch',
            Image:"https://static.toiimg.com/thumb/54714340.cms?width=1200&height=900"
        },
        {
            id: 1235,
            name: "Chicken Kebab",
            Image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Kebab.jpg"
        },
    
        {      id: 1236,
             name: 'Coca Cola',
            Image: "https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_70/v1555172501/shape/mentalfloss/iStock-487787108.jpg?itok=s3FHpO_M"
        },
        {      id: 1237,
             name: 'French Fries',
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEsCwikDwD_flpXR3lzqupoeah0YC0rd6BA&usqp=CAU"
        },
        {
        id: 1238,
        name: "Pop Corn",
        Image: "https://images-na.ssl-images-amazon.com/images/I/91TTPGBEeNL._SX425_.jpg"
        }

    ]
    let pos = 0;
    localStorage.setItem("menu", JSON.stringify(menu));
    let foodItem = document.getElementById("food");
    console.log(foodItem.value);
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
          for (let i = 0;i< menu.length;i++) {
              if (foodItem.value == menu[i].name) {
                  pos = i;
                  resolve(`${menu[i].name}`);
              }
           }
      
         
    }, 5000); //receptionist setting time to each
    
    });

    promise.then(function (res) {
        let div = document.createElement('div');
        div.setAttribute("class","container")
        let msg = document.createElement('div')
        msg.setAttribute("class", "id");
        let image = document.createElement('img');
        image.src = menu[pos].Image;
        msg.innerHTML = `Order id :${menu[pos].id}`
        
        div.append(image,msg);
        document.body.append(div);
   })

}