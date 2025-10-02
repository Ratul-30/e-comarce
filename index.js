

console.log("hello world")
const product = document.getElementById("products")
const cartitem = document.getElementById("cart-items")
let cart = []
let totalPrice = document.getElementById("total-price")



fetch("https://fakestoreapi.com/products")
.then(data => data.json())
.then( data => {
    console.log(data)
   data.forEach((element) => {
        const div = document.createElement("div")
        div.innerHTML = `
           <div class=" rounded-md space-y-2 shadow-lg p-5 font-saira">
      <div class=" bg-gray-300 flex justify-center">
      <img class="h-[250px]" src="${element.image}" alt="">
      </div>
      
      <h1 class="text-xl line-clamp-2 h-[50px]  !font-semibold">${element.title}</h1>
       
    <p class="line-clamp-3">${element.description}</p>
    <div class="flex justify-between">
      <h1 class="text-2xl  font-semibold">$${element.price}</h1>
          <div class="p-2 rounded-full bg-yellow-300 text-black text-sm">
            ${element.category}
          </div>
        </div>
         <button class="btn btn-primary bg-orange-600 border-0 w-full add-to-cart">Add to Cart</button>
    </div>
        `

        product.appendChild(div)
        const button = div.querySelector(".add-to-cart")
        button.addEventListener("click", () =>{
          handleClick(element)
        })

    })
})

const cartData=localStorage.getItem("cart")
const parsedCartData=(JSON.parse(cartData))

parsedCartData.forEach((item) => {
  const li = document.createElement("li")
li.innerHTML = `
<h3 class="line-clamp-2"> ${item.title} </h3>
<p class="text-nowrap  text-xl font-semibold font-saira">$ ${item.price} </p>
`

li.style.display = "flex "
li.style.gap = "15px"
li.style.justifyContent = "space-between"
li.classList.add("font-saira")
li.style.marginTop="16px"
cartitem.appendChild(li)
})



const handleClick = (element) => {
cart.push(element)
localStorage.setItem("cart",JSON.stringify(cart))
let total = cart.reduce ((acc , cv) => acc + cv.price, 0)
totalPrice.innerText = total
console.log(total)

console.log(cart)
cartitem.innerHTML = ""

cart.map((item) => {
const li = document.createElement("li")
li.innerHTML = `
<h3 class="line-clamp-2"> ${item.title} </h3>
<p class="text-nowrap  text-xl font-semibold font-saira">$ ${item.price} </p>
`

li.style.display = "flex "
li.style.gap = "15px"
li.style.justifyContent = "space-between"
li.classList.add("font-saira")
li.style.marginTop="16px"
cartitem.appendChild(li)
})
}



    
