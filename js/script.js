$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 200) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });
});

// For Hamburger
$(document).ready(function(){
	$(".hamburger button").click(function(){
		$(this).toggleClass('active');
        $("nav.navbar").toggleClass('active');
	});
}); 
$(document).ready(function(){
	$(".hamburger button").click(function(){
        $(".header-width1").toggleClass('active');
	});
});
// $(document).ready(function(){
// 	$(".hamburger button").click(function(){
// 		$(this).toggleClass('active');
//         $(".hamburger-overlay").toggleClass('active');
// 	});
// }); 

// For Slider down description
$(document).ready(function () {
    $('.service-width1').hover(function () {
        $(this).toggleClass('active');
        if ($('.service-width1').hasClass('active')) {
            $(this).find('.service-width1-content').slideDown();
        } else {
            $('.service-width1-content').slideUp();
        }
    });

})

// For owl carosel
$(".tabContent2").hide();
$("ul.tabs2 li:first").addClass("active").show();
$(".tabContent2:first").show();

$("ul.tabs2 li").click(function () {
    $("ul.tabs2 li").removeClass("active");
    $(this).addClass("active");
    $(".tabContent2").hide();
    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
});

$('.new-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    center: true,
    navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

// Team PopUp

$(document).ready(function () {
    $(".team-agent-content").click(function () {

        $(".popup-overlay").show();
        $(".pop-up-agent-main").show();
    });

    $(".pop-up-close>p").click(function () {
        $(".pop-up-agent-main").hide();
        $('.popup-overlay').hide();
    });

    $(".popup-overlay").click(function () {
        $(".pop-up-agent-main").hide();
        $('.popup-overlay').hide();
    });

});


//contact pop-up
$(document).ready(function () {
    $(".contact-us").click(function () {

        $(".contact-pop-up").show();
    });

    $(".contact-close-btn>p").click(function () {
        $(".contact-pop-up").hide();
    });

});

AOS.init({
    duration: 1200,
  })