
let productList = document.getElementById("products");
let fruitList = document.getElementById("fruList");
let veganList = document.getElementById("vegList")

fetch("http://localhost5000/product")
.then(function(response){
    return response.json()
})
.then((data) => {
    var list = document.getElementById("products");
    data.results.forEach((item) => {
        products.push(item.name);
        let li = document.createElement("li");
        li.innerText = item.name;
        list.appendChild(li);
    })
    console.log(products)
})
.catch((err) => {
    console.log(`Error fetching: ${err}`)
});