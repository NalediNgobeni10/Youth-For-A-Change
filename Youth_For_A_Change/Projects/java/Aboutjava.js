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
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    
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








let currentPosition = 0; 
const slurp = document.querySelector('.slurp'); 
const imagesToShow = 3; 
const totalImages = slurp.children.length; 

function moveRight() {

    currentPosition++;
    if (currentPosition > totalImages - imagesToShow) {
        currentPosition = 0; 
    }
    updateSliderPosition();
}

function moveLeft() {

    currentPosition--;
    if (currentPosition < 0) {
        currentPosition = totalImages - imagesToShow; // If at the first set, go to the last set
    }
    updateSliderPosition();
}

function updateSliderPosition() {
   
    const translateX = -((100 / imagesToShow) * currentPosition);
    slurp.style.transform = `translateX(${translateX}%)`;
}

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
