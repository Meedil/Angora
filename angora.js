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
    //Start fade-in animation of picture
    slides[slide].classList.remove('animate__fadeOut');
    slides[slide].classList.add('show', 'animate__animated', 'animate__fadeIn');
    //Start slideInRight animation of title
    slideTitles[slide].classList.add('show', 'animate__animated', 'animate__slideInRight');
    currentSlide = slide;
}

function nextSlide(){
    clearSlide();
    showSlide((currentSlide + 1) % slides.length);
}
function prevSlide(){
    clearSlide();
    showSlide((slides.length + currentSlide - 1) % slides.length);
}

showSlide(0);
var slideshowInterval = setInterval("nextSlide()", 8000);

function resetInterval(interval){
    clearInterval(interval);
    slideshowInterval = setInterval("nextSlide()", 8000);
}

$('.arrow.left').click(e => {prevSlide(); resetInterval(slideshowInterval);})
$('.arrow.right').click(e => {nextSlide(); resetInterval(slideshowInterval);})


// Progress-bars
const progs = document.querySelectorAll('.prog');
const bars = document.querySelectorAll('.progress-bar');

for(let i = 0; i < progs.length; i++){
    let prog = progs[i];
    let pcent = bars[i].getAttribute('aria-valuenow');

    let pcentLabel = document.createElement('div');
    pcentLabel.innerHTML = pcent+'%';
    pcentLabel.classList.add("progress-value");
    pcentLabel.style.width = pcent+'%';

    pcentLabel = prog.firstElementChild.insertAdjacentElement('afterend', pcentLabel);
}

const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting === true){
        $('.progress-bar').addClass('animate__animated animate__slideInLeft animate')//.on('animationend', e => )
    }
})

observer.observe(document.querySelector('.progress-bar'))
bars.forEach((bar) => {
    const valueParent = bar.parentElement.parentElement;
    const valueDiv = valueParent.querySelector('.progress-value');
    bar.addEventListener('animationend', ()=>valueDiv.classList.add('show'))
})

//navbar
const scrollHandler = function () {
    let scrollHeight = $(document).scrollTop();
    if(scrollHeight > 0){$('.nbf').addClass('nbf-on')}
    else $('.nbf').removeClass('nbf-on');
}

$(document).on("scroll", scrollHandler);
