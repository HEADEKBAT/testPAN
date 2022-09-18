import Swiper from 'swiper/swiper-bundle.js';
// import 'swiper/css';




// Init slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// 100 vh fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
});
//======= выпадающая менюшка ===========
let intervalId;

document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('menu-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                document.querySelector('.dropdown-toggle').classList.add('dropdown-toggle--active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                document.querySelector('.dropdown-toggle').classList.remove('dropdown-toggle--active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                    document.querySelector('.dropdown-toggle').classList.remove('dropdown-toggle--active');
                }
            }
        });
    });
});
//======= выпадающая менюшка ===========

//======= красивый селект ===========
const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}
//======= красивый селект ===========
//======= прогресс бар, корявинько конечно, но особо не было времени подумать=) ===========
const addProgress = document.getElementById("addProgress");

addProgress.addEventListener('click', () => {
    let progressBar = document.getElementById("myProgress");
    let valueProgress = document.getElementById('myProgress').value;
    let progressbarValue = Number(document.querySelector(".progressbar__value").textContent) - 30;
    document.getElementById("myProgress").value = document.getElementById("myProgress").value + 25;

    progressbarValue += 55;
    document.querySelector(".progressbar__value").textContent = progressbarValue;
    if (progressbarValue > 100) {
        document.querySelector(".progressbar__value").textContent = 100;
    }
})
//======= прогресс бар ===========
const scrollToTop = document.querySelector('.button-up__wrapper');
const header = document.querySelector('.header');
scrollToTop.addEventListener('click', function () {
    header.scrollIntoView(true)
})
