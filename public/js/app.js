// dark mode 
let toggleThemeBtn = document.querySelector('#toggle-theme-btn')
toggleThemeBtn.addEventListener('click' , function(){
    if(localStorage.theme === 'dark'){
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }else{
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }
})

// swiper slider 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1536: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 8,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-custom-readings",
        prevEl: ".swiper-button-prev-custom-readings",
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1536: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});


// open and close mobile sub menu
let openMobileSubMenuBtn = document.querySelector('.open_mobile_sub_menu_btn')
let mobileSubMenu = document.querySelector('.mobile_sub_menu')

openMobileSubMenuBtn.addEventListener('click' , function(){
    mobileSubMenu.classList.toggle('hidden')
    openMobileSubMenuBtn.classList.toggle('rotate-180')
})

// open and close moblie nav
let burgerBtn = document.querySelector('.burger_btn');
let mobileNav = document.querySelector('.mobile_nav');
let blackLayer = document.querySelector('.black_layer');
let closeMobileNav = document.querySelector('.close_mobile_nav');

burgerBtn.addEventListener('click' , function(){
    mobileNav.classList.remove('-right-79')
    mobileNav.classList.add('right-0')

    blackLayer.classList.toggle('hidden')
})

closeMobileNav.addEventListener('click' , function(){
    mobileNav.classList.add('-right-79')
    mobileNav.classList.remove('right-0')

    blackLayer.classList.toggle('hidden')
})


blackLayer.addEventListener('click' , function(){
    // close menu
    mobileNav.classList.add('-right-79')
    mobileNav.classList.remove('right-0')

    // close shopping card
    mobileShopingCard.classList.add('-bottom-full')
    mobileShopingCard.classList.remove('bottom-0')

    blackLayer.classList.toggle('hidden')
})


// open and close moblie shopping card
let shoppingCardBtn = document.querySelector('.shopping_card_btn')
let mobileShopingCard = document.querySelector('.mobile_shoping_card')
let closeShoppingCardBtn = document.querySelector('.close_shopping_card_btn')


shoppingCardBtn.addEventListener('click' , function(){
    if(window.matchMedia('(max-width: 1279px)').matches){
        mobileShopingCard.classList.remove('-bottom-full')
        mobileShopingCard.classList.add('bottom-0')

        blackLayer.classList.toggle('hidden')
    }
})

closeShoppingCardBtn.addEventListener('click' , function(){
    mobileShopingCard.classList.add('-bottom-full')
    mobileShopingCard.classList.remove('bottom-0')

    blackLayer.classList.toggle('hidden')
})