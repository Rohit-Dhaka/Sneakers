
// navbar
const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
menuicon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflow-hidden")
    menuicon.classList.toggle("active");
})
// tabs
const tabcontant = document.querySelectorAll(".tabcontant");
const firstcontant = document.querySelector(".tabcontant");
const fistactivetab = document.querySelector(".allbtn button");
tabcontant.forEach(e => e.style.display = "none");
firstcontant.style.display = "block";
fistactivetab.classList.add("activetab");
function clickhere(tabs) {
    tabcontant.forEach(e => e.style.display = "none");
    const selectcontant = document.getElementById(tabs)
    selectcontant.style.display = "block";
    const tabsactive = document.querySelectorAll(".allbtn button")
    tabsactive.forEach(e => e.classList.remove("activetab"))
    const selecttab = document.querySelector(`button[onclick="clickhere('${tabs}')"]`)
    selecttab.classList.add("activetab")
}
//   - and + 
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const count = document.getElementById("count");
increaseBtn.addEventListener("click", () => {
    count.innerHTML = +count.innerHTML + 1;
})
decreaseBtn.addEventListener("click", () => {
    if (count.innerHTML > 1) {
        count.innerHTML = count.innerHTML - 1
    }
})
// js fist cards 
const firstcard = [
    {
        cardimg: "./dist/img/foot-locker.webp",
        pricename: "Price:",
        price: "€179,99",
        cardbtn: "Best Price",
        size: "Size",
        btn1: "41",
        btn2: "42",
        btn3: "43",
        btn4: "44",
        btn5: "45",
        btn6: "46",
        view: "View this product as:",
        foot: "Foot Locker NL",
    },
    {
        cardimg: "./dist/img/sidestep.webp",
        pricename: "Price:",
        price: "€179,99",
        cardbtn: "Best Price",
        size: "Size",
        btn1: "41",
        btn2: "42",
        btn3: "43",
        btn4: "44",
        btn5: "45",
        btn6: "46",
        view: "View this product as:",
        foot: "Foot Locker NL",
    },
    {
        cardimg: "./dist/img/foot-locker.webp",
        pricename: "Price:",
        price: "€179,99",
        cardbtn: "Best Price",
        size: "Size",
        btn1: "41",
        btn2: "42",
        btn3: "43",
        btn4: "44",
        btn5: "45",
        btn6: "46",
        view: "View this product as:",
        foot: "Foot Locker NL",
    },
    {
        cardimg: "./dist/img/sidestep.webp",
        pricename: "Price:",
        price: "€179,99",
        cardbtn: "Best Price",
        size: "Size",
        btn1: "41",
        btn2: "42",
        btn3: "43",
        btn4: "44",
        btn5: "45",
        btn6: "46",
        view: "View this product as:",
        foot: "Foot Locker NL",
    },
]
const cardcontainer1 = document.getElementById("cardcontainer1");
firstcard.forEach((firstcard) => {
    const cardfirst = document.createElement("div");
    cardfirst.innerHTML = `  
    
    <div class="card rounded-[10px] max-w-[312px] shadow-card-shadow hover:shadow-card-hover duration-300 ease-linear">
        <div class="flex items-center justify-center py-[27px] px-[44px] border rounded-t-[10px]">
            <img src="${firstcard.cardimg}" alt="card-img" class="hover:scale-[1.1] duration-300">
        </div>
        <div class="flex items-center justify-between px-[19px] pt-[28px]">
            <div class="flex items-center gap-[17px]">
                <p class="font-poppins text-[16px] leading-[20px]">${firstcard.pricename}</p>
                <p class="font-poppins font-semibold text-[20px] leading-[25px]">${firstcard.price}</p>
            </div>
        <div class="flex items-center">
            <button class="before:ease relative overflow-hidden before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-[#FF0000]  before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48  font-poppins text-[10px] leading-[12.5px] bg-[#28A745] text-white py-[4px] px-[11px] rounded-[7px] text-nowrap">
            <span class="relative z-10">${firstcard.cardbtn}</span></button>
        </div>
    </div>
    <div class="px-[19px] pb-[31px]">
    <p class="font-poppins text-[16px] leading-[20px] pt-[14px] pb-[10px]">${firstcard.size}</p>
    <div class="flex justify-between">
        <button
            class="hover:bg-[#28A745] cursor-pointer hover:text-white before:ease relative overflow-hidden  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40 font-poppins font-medium text-[16px] leading-[20px] border border-[#E0E0E0] py-[8px] px-[32px] rounded-[40px]">${firstcard.btn1}</button>
        <button
            class="hover:bg-[#28A745] cursor-pointer hover:text-white before:ease relative overflow-hidden  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40 font-poppins font-medium text-[16px] leading-[20px] border border-[#E0E0E0] py-[8px] px-[32px] rounded-[40px]">${firstcard.btn2}</button>
        <button
            class="hover:bg-[#28A745] cursor-pointer hover:text-white before:ease relative overflow-hidden  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40 font-poppins font-medium text-[16px] leading-[20px] border border-[#E0E0E0] py-[8px] px-[32px] rounded-[40px]">
            ${firstcard.btn3}</button>
    </div>
        <div class="flex justify-between pt-[12px]">
            <button class="hover:bg-[#28A745] cursor-pointer hover:text-white before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40 font-poppins font-medium text-[16px] leading-[20px] border border-[#E0E0E0] py-[8px] px-[32px] rounded-[40px]">${firstcard.btn4}</button>
            <button class="hover:bg-[#28A745] cursor-pointer hover:text-white before:ease relative overflow-hidden  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40 font-poppins font-medium text-[16px] leading-[20px] border border-[#E0E0E0] py-[8px] px-[32px] rounded-[40px]">${firstcard.btn5}</button>
            <button class="hover:bg-[#28A745] cursor-pointer hover:text-white before:ease relative overflow-hidden  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700  hover:before:-translate-x-40 font-poppins font-medium text-[16px] leading-[20px] border border-[#E0E0E0] py-[8px] px-[32px] rounded-[40px]">${firstcard.btn6}</button>
        </div>
            <p class="font-poppins text-[16px] leading-[20px] pt-[19.8px]">${firstcard.view}</p>
            <p class="font-poppins font-semibold text-[16px] leading-[20px] text-[#007BFF] pt-[8px] cursor-pointer">${firstcard.foot}</p>
        </div>
    </div>      

  
    `
    cardcontainer1.appendChild(cardfirst)
})

// js card
const cards = [
    {
        shoesImage: "./dist/img/redshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/img/cart-sign.webp",
        ratingImage: "./dist/img/rating.webp",
    },
    {
        shoesImage: "./dist/img/grayshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/img/cart-sign.webp",
        ratingImage: "./dist/img/rating.webp",
    },
    {
        shoesImage: "./dist/img/redshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/img/cart-sign.webp",
        ratingImage: "./dist/img/rating.webp",
    },
    {
        shoesImage: "./dist/img/grayshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/img/cart-sign.webp",
        ratingImage: "./dist/img/rating.webp",
    },
    {
        shoesImage: "./dist/img/redshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/img/cart-sign.webp",
        ratingImage: "./dist/img/rating.webp",
    },
    {
        shoesImage: "./dist/img/grayshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/img/cart-sign.webp",
        ratingImage: "./dist/img/rating.webp",
    },
    {
        shoesImage: "./dist/img/redshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/img/cart-sign.webp",
        ratingImage: "./dist/img/rating.webp",
    },
    {
        shoesImage: "./dist/img/grayshoes.webp",
        Shoesname: "Quickiins Mens Shoes",
        price1: "$90.00",
        price2: "$70.00",
        cardicon: "./dist/img/cart-sign.webp",
        ratingImage: "./dist/img/rating.webp",
    }
]
const cardcontainer = document.getElementById("cardcontainer");
cards.forEach((card) => {
    const cardelement = document.createElement("div");
    cardelement.className = "stylecard"
    cardelement.innerHTML =
        `
    <div class="overflow-hidden rounded-t-[17px]">
    <img src="${card.shoesImage}" alt="card-image" class="hover:scale-[1.1] duration-300">
    </div>     
    <div class="px-[14px] pt-[18px] pb-[30px]  flex justify-between items-start"> 
        <div class="">
            <h5 class="font-poppins leading-[34px] font-medium text-[18px] text-[#555555]">${card.Shoesname}</h5>
            <div class = "flex gap-[4px] pt-[3px] ">
                <p class="font-poppins leading-[34px] font-medium text-[18px] text-[#999999]">${card.price1}</p>
                <p class="font-poppins leading-[34px] font-medium text-[18px] text-[#FF0000]">${card.price2}</p>
            </div>
            <img src="${card.ratingImage}" alt="rating-image" class="pt-[13px]">
        </div>                                                        
            <img src="${card.cardicon}" alt="card-icon" class="pt-[13px] hover:scale-[1.2] duration-300">        
    </div>   
    `
    cardcontainer.appendChild(cardelement)
})
// get year 
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year
