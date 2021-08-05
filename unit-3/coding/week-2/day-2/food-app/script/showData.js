


async function getData(url) {

    try {
        let res = await fetch(url)
     let data = await res.json()
        // console.log('hello',data);
        // console.log('resss',res);
        
        return data;
    }
    catch (e) {
        console.log("error here:", e);
    }
    
}
// export { getData }
function appendData(items, parent) {
   let products = items.meals
    products.forEach(({strMealThumb, strMeal, strCategory, strTags}) => {
        let div = document.createElement("div");
        div.setAttribute("class", "dataDiv")
        let title = document.createElement("p");
        title.setAttribute("class", "name");
        let category = document.createElement("p");
        category.setAttribute("class", "cat");
        let tags = document.createElement("p");
        tags.setAttribute("class", "cat");
        let img = document.createElement("img");
        img.src = strMealThumb;
        title.innerText = strMeal;
        if (strCategory == undefined) {
            category.innerText = null;
        }
        else {
            category.innerText = strCategory;
        }
        if (strTags == undefined) {
            tags.innerText = null;
        }
        else {
            tags.innerText = strTags;
        }

        div.append(img, title, category, tags);

        parent.append(div);
    })
}
function appendCategories(items, parent) {
    let products = items.categories;
    products.forEach(({strThumb,strMeal,strCategory}) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let img = document.createElement("img");
        img.src = strCategoryThumb;
        p.innerText = strCategory;

        div.append(img, p);


        parent.append(div);
    })
}




export {getData,appendData}