    function showImages(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }
    $(document).ready(function(){
    $('#text').each(function() {
          animationHover(this, 'pulse');
      });
    });
    $(document).ready(function(){
    $('#text2').each(function() {
          animationHover(this, 'pulse');
      });
    });
    function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function(){
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
    }

    $(document).ready(function(){
            showImages('.star');
            $("#para1").hide();
            $("#para2").hide();
            $("#para3").hide();
            $("#para4").hide();
            $("#para5").hide();
            $("#para6").hide();
            $("#pic1").click(function(){
                $("#para1").slideToggle();
            });
            $("#pic2").click(function(){
                $("#para2").slideToggle();
            });
            $("#pic3").click(function(){
                $("#para3").slideToggle();
            });
            $("#pic4").click(function(){
                $("#para4").slideToggle();
            });
            $("#pic5").click(function(){
                $("#para5").slideToggle();
            });
            $("#pic6").click(function(){
                $("#para6").slideToggle();
            });
    });


    $(window).scroll(function() {
            showImages('.star');
    });


    var slideIndex = 1;
    showSlides(slideIndex);


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }


    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
