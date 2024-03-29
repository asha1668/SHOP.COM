async function getData(){
   try{
    let api = await fetch(`https://fakestoreapi.com/products`);
    let data  = await api.json();
     append(data);
    console.log("data", data);
   }
   catch{
    console.log("err")
    let div = document.querySelector("#product__div");
    let h1 = document.createElement("h1");
    h1.textContent = "some error from server"
    div.append(h1)
}
}
getData();

function append(data){
    let container = document.querySelector("#product__div");
    container.innerHTML = null;
    data.map((el)=>{
        //html element
        let mainDiv = document.createElement("div");
        let imageDiv = document.createElement("div")
        let contentDiv = document.createElement("div")
        let img = document.createElement("img")
        let category = document.createElement("p");
        let price = document.createElement("p");
        let buttonDiv = document.createElement("div");
        let button = document.createElement("button")
        //setattribute
        img.src = el.image
        category.innerText = el.category
        price.innerText  = el.price
        button.innerText = "BUY"

        //event listner
        button.addEventListener("click" , byButtononclick)

        imageDiv.append(img)
        buttonDiv.append(button)
        contentDiv.append(category, price, button)
        mainDiv.append(imageDiv, buttonDiv, contentDiv)
        //append
      container.append(mainDiv)

    })
}

function byButtononclick(){

    // alert("buy")
    setTimeout(() =>{
        alert("successfully add to cart")
        setTimeout(() =>{
            alert("payment done");
            setTimeout(() =>{
                alert("order delivered")
            },2000)
        },3000)
    },2000)
}

