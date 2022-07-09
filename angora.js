// Slideshow
var currentSlide;
var slides = document.querySelectorAll('.slide');
var slideTitles = document.querySelectorAll('.slide-title');
console.log(slideTitles)

function clearSlide(){
    slides[currentSlide].classList.add('animate__fadeOut');

    slideTitles[currentSlide].classList.remove('show', 'animate__slideInRight');
}
function showSlide(slide){
    slides[slide].classList.remove('animate__fadeOut');
    slides[slide].classList.add('show', 'animate__animated', 'animate__fadeIn');
    slideTitles[slide].classList.add('show', 'animate__animated', 'animate__slideInRight');
    currentSlide = slide;
}
function nextSlide(){
    console.log('function called')
    clearSlide();
    showSlide((currentSlide + 1) % slides.length);
}

showSlide(0);
setInterval("nextSlide()", 5000);

// Progress-bars
var progs = document.querySelectorAll('.prog');
var bars = document.querySelectorAll('.progress-bar');

for(let i = 0; i < progs.length; i++){
    let prog = progs[i];
    let pcent = bars[i].getAttribute('aria-valuenow');
    
    let pcentLabel = document.createElement('div');
    pcentLabel.innerHTML = pcent+'%';
    pcentLabel.classList.add("progress-value");
    pcentLabel.style.width = pcent+'%';

    pcentLabel = prog.firstElementChild.insertAdjacentElement('afterend', pcentLabel);
}

// CLIENTS
// var current_client = 0;
// var clients = document.querySelectorAll('.client-slide');

// for(let i = 0; i < clients.length; i++){
//     let c = clients[i];
//     c.addEventListener('click', (e) => {
//         console.log('adding class');
//         document.querySelector('.selected-client').classList.remove('selected-client');
//         c.classList.add('selected-client');
//     })
// }
