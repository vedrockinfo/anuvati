$(document).ready(function () {
    $(".has-dropdown").click(function () {
        $(this).toggleClass("clicked")
    })
});

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 165) {
        jQuery("header").addClass("fixed-header")
    } else {
        jQuery("header").removeClass("fixed-header")
    }
})

$(document).ready(function () {
    $("#collapsable").click(function () {
        $(".nav-list").toggleClass("active"); // Toggle 'active' class
    });
});

// Header End 

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    let started = false;

    function startCounter(counter) {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);
            counter.textContent = value.toLocaleString('en-US');

            if (progress < 1) {
                requestAnimationFrame(update)
            }
            else {
                counter.textContent = target.toLocaleString('en-US');
            }
        }
        requestAnimationFrame(update);
    }

    function checkSectionVisible() {


        const section = document.querySelector('#counterSection');

        if (!section) return;
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && !started) {
            counters.forEach(counter => startCounter(counter));
            started = true;
        }
    }
    window.addEventListener('scroll', checkSectionVisible);

    checkSectionVisible();
})

// Counter End

const links = document.querySelectorAll('.nav-list .nav-link');
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (currentPage === "") {
    currentPage = "/";
}
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Navigation Active Link 

$('#filterTabs .nav-link').click(function () {

    $('#filterTabs .nav-link').removeClass('active');
    $(this).addClass('active');

    let filter = $(this).data('filter');

    if (filter == 'all') {
        $('.card-item').fadeIn();
    } else {
        $('.card-item').hide();
        $('.card-item[data-category="' + filter + '"]').fadeIn();
    }

});


$(document).ready(function () {

    $(".visibleArea").click(function () {

        $(".invisibleArea").not($(this).siblings()).slideUp(300);

        $(this).siblings(".invisibleArea").slideToggle(300);

    });

});
// WorkCard Toggling End

$(document).ready(function () {

    var owl = $('.methodSlider');

    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        dots: true,
        nav: false
    });


    function updateTimeline(index) {

        var steps = $('.step');
        var total = steps.length - 1;

        /* reset */
        steps.removeClass('active');

        /* progressive activation */

        steps.each(function (i) {

            if (i <= index) {
                $(this).addClass('active');
            }

        });

        /* progress line */

        var percent = (index / total) * 100;

        $('.progressLine span').css('width', percent + '%');

    }


    /* owl slide event */

    owl.on('changed.owl.carousel', function (event) {

        var index = event.item.index - event.relatedTarget._clones.length / 2;
        var count = event.item.count;

        if (index < 0) index = count - 1;
        if (index >= count) index = 0;

        updateTimeline(index);

    });


    /* step click */

    $('.step').click(function () {

        var slide = $(this).data('slide');

        owl.trigger('to.owl.carousel', [slide, 500]);

    });


});


// Our Team Toggling Effect

$(document).ready(function () {
    $('.profileDetails button').click(function () {
        $(this).siblings('.hiddenDetails').slideToggle();

        if ($(this).text() === "Read more") {
            $(this).text("Read less");
        } else {
            $(this).text("Read more");
        }
    });
});

$('.seekSlider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    smartSpeed: 800,
    mouseDrag: false,
    touchDrag: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        }
    }
})