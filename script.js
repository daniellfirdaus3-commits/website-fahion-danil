const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const emptyCart = document.getElementById("emptyCart");

const toast = document.getElementById("toast");

let cart = [];
let total = 0;

/* OPEN CART */

cartBtn.addEventListener("click", () => {

cartSidebar.style.right = "0";

overlay.classList.remove("hidden");

});

/* CLOSE CART */

closeCart.addEventListener("click", () => {

cartSidebar.style.right = "-500px";

overlay.classList.add("hidden");

});

overlay.addEventListener("click", () => {

cartSidebar.style.right = "-500px";

overlay.classList.add("hidden");

closeProductModal();

});

/* TOAST */

function showToast(text){

toast.innerText = text;

toast.style.opacity = "1";

setTimeout(() => {

toast.style.opacity = "0";

},2500);

}

/* ADD CART */
document.querySelectorAll(".buyBtn").forEach(btn=>{

btn.addEventListener("click",()=>{

const card =
btn.closest(".product-card");



/* CEK UKURAN */

const selectedSize =
card.querySelector(".sizeBtn.active");

if(!selectedSize){
    showToast("Pilih ukuran dulu!");
    return;
}
const size = selectedSize.innerText;

const title =
card.querySelector("h3").innerText;

const priceText =
card.querySelector(".font-bold").innerText;

const image =
card.querySelector("img").src;

const item = document.createElement("div");

item.className =
"flex gap-3 mb-4 bg-gray-100 p-3 rounded-xl";

item.innerHTML = `

<img
src="${image}"
class="w-20 h-20 object-cover rounded-lg">

<div class="flex-1">

<h4 class="font-semibold">
${title}
</h4>

<p class="text-sm cartSize">
Ukuran: ${size}
</p>

<p class="cartPrice">
${priceText}
</p>

</div>

<button class="removeItem">
🗑
</button>

`;

cartItems.appendChild(item);

emptyCart.style.display = "none";

let number =
parseInt(
priceText.replace(/\D/g,"")
);

total += number;

cartTotal.innerText =
"Rp " +
total.toLocaleString("id-ID");

cart.push(title);

cartCount.innerText =
cart.length;

showToast(
title + " masuk keranjang"
);

item.querySelector(".removeItem")
.addEventListener("click",()=>{

item.remove();

cart = cart.filter(product => product !== title);

cartCount.innerText =
cart.length;

total -= number;

cartTotal.innerText =
"Rp " +
total.toLocaleString("id-ID");

if(
cartItems.querySelectorAll(".removeItem")
.length === 0
){

emptyCart.style.display =
"block";

}

});

});

});

/* DETAIL PRODUK */

const modal =
document.getElementById("productModal");

const modalImg =
document.getElementById("modalImg");

const modalTitle =
document.getElementById("modalTitle");

const modalPrice =
document.getElementById("modalPrice");

const modalCategory =
document.getElementById("modalCategory");

const modalDescription =
document.getElementById("modalDescription");

const modalMaterial =
document.getElementById("modalMaterial");

const modalStock =
document.getElementById("modalStock");

const closeModal =
document.getElementById("closeModal");

document.querySelectorAll(".detailBtn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

const card =
btn.closest(".product-card");

modalImg.src =
card.querySelector("img").src;

modalTitle.innerText =
card.querySelector("h3").innerText;

modalPrice.innerText =
card.querySelector(".font-bold").innerText;

modalCategory.innerText =
"Fashion Premium";

modalDescription.innerText =
"Produk fashion premium dengan kualitas terbaik, nyaman dipakai dan cocok untuk berbagai aktivitas.";

modalMaterial.innerText =
"100% Cotton Premium";

modalStock.innerText =
"50 pcs";

modal.classList.remove("hidden");
modal.classList.add("flex");

overlay.classList.remove("hidden");

});

});

closeModal.addEventListener("click",()=>{

closeProductModal();

});

function closeProductModal(){

modal.classList.add("hidden");
modal.classList.remove("flex");

overlay.classList.add("hidden");

}

/* SEARCH */

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",()=>{

const keyword =
searchInput.value.toLowerCase();

document
.querySelectorAll(".product-card")
.forEach(card=>{

const title =
card.querySelector("h3")
.innerText
.toLowerCase();

const category =
card.dataset.category
.toLowerCase();

if(
title.includes(keyword) ||
category.includes(keyword)
){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

/* FILTER */

document
.querySelectorAll(".filterBtn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

    searchInput.value = "";

const filter =
btn.dataset.filter;

document
.querySelectorAll(".product-card")
.forEach(card=>{

if(
filter === "all" ||
card.dataset.category === filter
){

card.style.display =
"block";

}else{

card.style.display =
"none";

}

});

});

});
/* DARK MODE */

const darkBtn = document.getElementById("darkBtn");
const darkIcon = darkBtn.querySelector("i");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkIcon.classList.remove("fa-moon");
        darkIcon.classList.add("fa-sun");
    }else{
        darkIcon.classList.remove("fa-sun");
        darkIcon.classList.add("fa-moon");
    }

});

/* PILIH UKURAN */

document.querySelectorAll(".sizeContainer").forEach(container=>{

    const buttons =
    container.querySelectorAll(".sizeBtn");

    buttons.forEach(btn=>{

        btn.addEventListener("click",()=>{

            buttons.forEach(b=>{
                b.classList.remove("active");
            });

            btn.classList.add("active");

        });

    });

});

