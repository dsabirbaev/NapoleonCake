



const catalogNewCake = document.querySelector('.catalog-main__new-cakes--items');
const catalogTraditionalCake = document.querySelector('.catalog-main__traditional-cakes--items');
function renderToHTML() {
    let cake = "";
    data.map((value) => {
        cake += `
            <div class="catalog__item">
                <div class="catalog__item--img">
                    <img  title="Cake" src="${value.image}" alt="${value.name}">
                </div>
                <div class="catalog__item--body">
                    <p class="catalog__item--body-name">${value.name}</p>
                    <p class="catalog__item--body-rate">${value.rateText} <span>${value.rateNumber} <img title="like" src="./assets/icons/new-cakes/heart-red.svg" alt="heart"></span></p>
                    <p class="catalog__item--body-price">${value.price} ₽ <span>${value.kg} кг.</span></p>
                    <div class="catalog__item--body-btn">
                        <button>В корзину</button>
                        <img title="like" src="./assets/icons/new-cakes/heart-white.svg" alt="heart">
                    </div>
                </div>
            </div>
       `;
  
    //    console.log(value);
    });
    catalogNewCake.innerHTML = cake;
    catalogTraditionalCake.innerHTML = cake;
}
  
renderToHTML();




const recentCakes = document.querySelector('.recent-cakes__items')

function renderDataRecent(){
    let cake = "";
    dataRecent.map((value) => {
        cake += `
            <div class="catalog__item">
                <div class="catalog__item--img">
                    <img  title="Cake" src="${value.image}" alt="${value.name}">
                </div>
                <div class="catalog__item--body">
                    <p class="catalog__item--body-name">${value.name}</p>
                    <p class="catalog__item--body-rate">${value.rateText} <span>${value.rateNumber} <img title="like" src="./assets/icons/star.svg" alt="heart"></span></p>
                    <p class="catalog__item--body-price">${value.price} ₽ <span>${value.kg} кг.</span></p>
                    <div class="catalog__item--body-btn">
                        <button>В корзину</button>
                        <img title="like" src="./assets/icons/new-cakes/heart-white.svg" alt="heart">
                    </div>
                </div>
            </div>
       `;
  
    });

    recentCakes.innerHTML = cake;
}

renderDataRecent();