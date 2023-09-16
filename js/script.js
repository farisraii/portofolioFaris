$(document).ready(function() {
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
            function(event, progress, stepValue) {
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
        function() {
            setupCircleProgress();
        },
        function() {
        }
    );

    window.onscroll = () => {
        let header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);
    };
});
