const maincolor = "#754ef9";
const textcolor = "#333";

function backend() {
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

$(".services-box-backend").hover(
    function () {
        backend();
    },
    function () {
        
    }
);

function webdev() {
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
    $(".css .bar").circleProgress({
        value: 0.80
    })
    $(".html .bar").circleProgress({
        value: 0.85
    });
    $(".react .bar").circleProgress({
        value: 0.70
    });
    $(".vue .bar").circleProgress({
        value: 0.85
    });
}

$(".services-box-webdev").hover(
    function () {
        webdev();
    },
    function () {
        
    }
);

function gd() {
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
    $(".corel .bar").circleProgress({
        value: 0.70
    })
    $(".figma .bar").circleProgress({
        value: 0.80
    });
    $(".ps .bar").circleProgress({
        value: 0.80
    });
    $(".ai .bar").circleProgress({
        value: 0.85
    });
}

$(".services-box-gd").hover(
    function () {
        gd();
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