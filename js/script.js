$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 112,
        items: 4,
        loop: true,
        dots: true,
        
        responsive: {
            992: {
                items: 4
            },
            768: {
                items: 3
            },
            576: {
                items: 2
            },
            0: {
                items: 1
            }
        }

    });
});