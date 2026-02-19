//slider

let slider = document.querySelector('.slider .image-list');
let items = document.querySelectorAll('.slider .image-list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 4500);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 4500);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

window.onscroll = function() {
    var nav = document.querySelector('nav');
    if (window.pageYOffset > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

//fade in animation

document.addEventListener("DOMContentLoaded", function() {
    const aintSection = document.querySelector('.aint');
    const puffSection = document.querySelector('.home-section');
    const headacheSection = document.querySelector('.headache');
    const projectSection = document.querySelector('.project');
    const projectConSection = document.querySelector('.project-cont');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 }); 

    observer.observe(aintSection); 
    observer.observe(puffSection); 
    observer.observe(headacheSection);
    observer.observe(projectSection);
    observer.observe(projectConSection);
});


//about tabs

function showContent(section, el) {

    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    document.getElementById(section).style.display = 'block';

    var buttons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

  
    el.classList.add('active');
}


function animateCountUp(element, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1; 
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(function () {
        current += increment;
        element.textContent = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

//counting thing

function animateCountUp(element, start, end, duration) {
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;


        let easedProgress = Math.min(progress / duration, 1); 
        let currentValue = Math.floor(start + (end - start) * easeOut(easedProgress));

        element.textContent = currentValue;


        if (progress < duration) {
            requestAnimationFrame(step);
        } else {
            element.textContent = end;
        }
    }

    requestAnimationFrame(step);
}


function easeOut(t) {
    return 1 - Math.pow(1 - t, 4);
}


function startCountUp() {
    let numbers = document.querySelectorAll(".number");


    let counts = [
        { element: numbers[0], end: 15 },
        { element: numbers[1], end: 109 },
        { element: numbers[2], end: 381 },
        { element: numbers[3], end: 450 }
    ];


    counts.forEach(function (item) {
        animateCountUp(item.element, 0, item.end, 3500);
    });
}


const statsSection = document.getElementById("stats-section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            startCountUp();

            observer.disconnect();
        }
    });
}, {
    threshold: 0.5 
});


observer.observe(statsSection);


function subscribeEmail(event) {
    event.preventDefault();
    const emailInput = document.querySelector('.newsletter-form input[name="email"]').value;
    alert(`Thank you! The email ${emailInput} has been successfully subscribed.`);
}



$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:true
        },
    }
})


let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 400;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 400;
});


document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletterForm');

    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();


        const emailInput = document.getElementById('emailInput').value.trim();


        if (emailInput) {

            alert(`${emailInput} has been subscribed successfully!`);

            newsletterForm.reset(); 
        }
    });
});

