

//// menu

let menuBtn = document.querySelector('.nav__menu--icon');
let menu = document.querySelector('.menu');
let closeMenu = document.querySelector('.menu__close');
let overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    menu.classList.remove('swipe');
    overlay.classList.remove('hidden');
})
closeMenu.addEventListener('click', () => {
    menu.classList.add('swipe');
    overlay.classList.add('hidden');
})

//////

////// slider intro


let list = document.querySelector('.intro__list'),
    images = document.querySelectorAll(".intro__list img"),
    next = document.querySelector('#right'),
    prev = document.querySelector('#left');
console.log(images.length);
let count = 0;    
function slider() {

    if (count > images.length-1) {
        count = 0
    }

    if (count < 0) {
        count = images.length-1
    }

    list.style.transform = `translateX(-${
        count * 100
    }%)`;
}


next.addEventListener('click', () => {
    count++;
    slider()

});

prev.addEventListener('click', () => {
    count--;
    slider()
});    



///// render card

const newCakes = document.querySelector('.new-cakes__items');
const traditionalCakes = document.querySelector('.traditional-cakes__items');
const desserts = document.querySelector('.desserts__items');
const newCakesSecond = document.querySelector('.new-cakes__items--second');
const newCakesThird = document.querySelector('.new-cakes__items--third');
const newCakesFourth = document.querySelector('.new-cakes__items--fourth');

function renderToHTML() {
    let cake = "";
    data.map((value) => {
        cake += `
            <div class="cake__item">
                <div class="cake__item--img">
                    <img  title="Cake" src="${value.image}" alt="${value.name}">
                </div>
                <div class="cake__item--body">
                    <p class="cake__item--body-name">${value.name}</p>
                    <p class="cake__item--body-rate">${value.rateText} <span>${value.rateNumber} <img title="like" src="./assets/icons/new-cakes/heart-red.svg" alt="heart"></span></p>
                    <p class="cake__item--body-price">${value.price} ₽ <span>${value.kg} кг.</span></p>
                    <div class="cake__item--body-btn">
                        <button>В корзину</button>
                        <img title="like" src="./assets/icons/new-cakes/heart-white.svg" alt="heart">
                    </div>
                </div>
            </div>
       `;
  
    //    console.log(value);
    });
  
    newCakes.innerHTML = cake;
    traditionalCakes.innerHTML = cake;
    desserts.innerHTML = cake;
    newCakesSecond.innerHTML = cake;
    newCakesThird.innerHTML = cake;
    newCakesFourth.innerHTML = cake;
}
  
renderToHTML();


//////////////////////////////////////


const load = window.addEventListener('load', () =>{
    const loader = document.querySelector('.loader');
    loader.style.display = "none";

    setTimeout(load, 5000);
})
