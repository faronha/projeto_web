AOS.init();

$('.scroll-up a').on('click', function(event) {
    console.log("Scroll up clicked");
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $('#totop').offset().top
    }, 800);
});
