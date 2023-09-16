const maincolor = "#754ef9";
const textcolor = "#333";

function setupCircleProgress() {
    let options = {
        startAngle: -1.55,
        size: 100,
        value: 0.85,
        fill: maincolor
    }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',
        function (event, progress, stepValue) {
            $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
        });
    $(".php .bar").circleProgress({
        value: 0.80
    })
    $(".java .bar").circleProgress({
        value: 0.75
    });
    $(".go .bar").circleProgress({
        value: 0.85
    });
    $(".python .bar").circleProgress({
        value: 0.75
    });
}

$(".services-box").hover(
    function () {
        setupCircleProgress();
    },
    function () {
    }
);

// Swipper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursos: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
}