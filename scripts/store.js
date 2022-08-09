


var MobileData = JSON.parse(localStorage.getItem("mobile_data")) || [];

DisplayProductData(MobileData);


function selectPrice() {
    var selected = document.querySelector("#filter").vlaue;
    if (selected === "HTL") {
        MobileData.sort(function(a, b) {
            return b.price - a.price;
        });
        // console.log(jobArr)
        DisplayProductData(MobileData);
    }
    if (selected === "LTH") {
        MobileData.sort(function(a, b) {
            return a.price - b.price;
        });

        DisplayProductData(MobileData);
    }
}



function selectBrand() {
    var selected = document.querySelector("#select_filter").vlaue;
    // console.log(selected);

    // console.log("clicked inside sort");

    if (selected === "apple") {
        var x = a.brand.toUpperCase();
        var y = b.brand.toUpperCase();
        MobileData.sort(function(a, b) {
            if (x > y) {
                return 1;
            }
            if (x < y) {
                return -1;
            }
            return 0;
        });
        console.log(MobileData);
        DisplayProductData(MobileData);
    }
    if (selected === "nokia") {
        var x = a.brand.toUpperCase();
        var y = b.brand.toUpperCase();
        MobileData.sort(function(a, b) {
            if (x > y) {
                return -1;
            }
            if (x < y) {
                return 1;
            }
            return 0;
        });
        console.log(MobileData);
        DisplayProductData(MobileData);
    }
}


function DisplayProductData(data){
    let container = document.getElementById("mobile_list")
    container.innerHTML= "";


    data.forEach((elem, index)=>{

        let box = document.createElement("div");
        box.setAttribute("class", "mobile");

        let image = document.createElement("img");
        image.src = elem.Image_url;

        let name = document.createElement("p");
        name.innerText = elem.Name;

        let brand = document.createElement("p");
        brand.innerText = elem.Brand;

        let price = document.createElement("p");
        price.innerText = elem.Price;

        let button = document.createElement("button");
        button.innerText = "Remove Product";
        button.setAttribute("class", "remove");
        
        button.addEventListener("click", ()=>{
            removeItem(elem, index);
        });

        box.append(image, name, brand, price, button);
        container.append(box);
    });

}

// apply firtering Property HEre



function removeItem(elem, index){
    MobileData.splice(index, 1);
    localStorage.setItem("mobile_data", JSON.stringify(MobileData));
    window.location.reload();
}


