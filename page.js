// BEGIN LAZY IMAGE LOADING FOR FASTER PAGE LOADS
window.onload = function () {
  $('.lazy').removeClass('lazy');
};

// END LAZY IMAGE LOADING FOR FASTER PAGE LOADS

// BEGIN JQUERY DOCUMENT READY FUNCTION

$(document).ready(function(){

  // BEGIN ANIMATION: FADE IN ELEMENTS

    $(window).scroll(function() {
      $(".fadeIn-animation").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("fadeIn");
        }
        // resets when moved above fade in animation - allows for repeated fade in animation
        else if (pos > winTop + 1000) {
          $(this).removeClass("fadeIn");
        }
        else if (pos < 1000){
          $(this).removeClass("fadeIn");
        }
      });
    });

  // END ANIMATION: FADE IN ELEMENTS

});

// END JQUERY DOCUMENT READY FUNCTION

// BEGIN SMOOTH SCROLLING

  $(document).ready(function(){
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== ""){
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  })

// END SMOOTH SCROLLING

// BEGIN PARALLAX: moves background texture images.

  // Y axis scroll speed
  var velocity = 0.5;

  function update(){
      var pos = $(window).scrollTop();
      $('.parallax').each(function() {
          var $element = $(this);
          // subtract some from the height b/c of the padding
          var height = $element.height()-18;
          $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px');
      });
  };

  $(window).bind('scroll', update);

// END PARALLAX: moves background texture images.

// BEGIN NAVIGATION BAR

$(document).ready(function(){

    // close myNavbar when link (about, services, portfolio, pricing, contact, sign up, or login) clicked on smaller screen
    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
    });

});

// END NAVIGATION BAR

// BEGIN JQUERY DOCUMENT READY FUNCTION

$(document).ready(function(){

// BEGIN WEBSITE HEADER IMAGE FADES AS USER SCROLLS DOWN PAGE

  var fadeStart=0, // 0px scroll or less will equiv to 1 opacity
  fadeUntil=2400, // 1600px scroll or more will equiv to 0 opacity
  fadeOut = $('#fadeOut');

  $(window).bind('scroll', function(){
    var offset = $(document).scrollTop(),
    opacity = 0;

    if (offset <= fadeStart) {
      opacity = 1;
    } else if (offset <= fadeUntil ){
      opacity = 1 - offset/fadeUntil;
    }

    fadeOut.css('opacity',opacity);
  });

// END WEBSITE HEADER IMAGE FADES AS USER SCROLLS DOWN PAGE

});

// END JQUERY DOCUMENT READY FUNCTION

// BEGIN JQUERY DOCUMENT READY FUNCTION

$(document).ready(function(){

  // BEGIN SIGN UP MODAL

    // sign up modal: open sign up modal upon click of sign up link located in login modal
    $("#open-sign-up").click(function(){
      $("#login").modal("hide");
      setTimeout(function(){
        $("#sign-up").modal("show");
      }, 1000);
    });

  // END SIGN UP MODAL

  // BEGIN LOGIN MODAL

    // login modal: open login modal upon click of login link located in sign up modal
    $("#open-login").click(function(){
      $("#sign-up").modal("hide");
      setTimeout(function(){
        $("#login").modal("show");
      }, 1000);
    });

  // END LOGIN MODAL

  // BEGIN FORGOT PASSWORD MODAL

    // forgot password modal: open forgot password modal upon click of forgot password link located in login modal
    $("#open-forgot-password").click(function(){
      $("#login").modal("hide");
      setTimeout(function(){
        $("#forgot-password").modal("show");
      }, 1000);
    });

  // END FORGOT PASSWORD MODAL

});

// END JQUERY DOCUMENT READY FUNCTION

// BEGIN OUR WORK SECTION IMAGE MODAL

  function openWorkImageModal(indicatorNumber) {
    // Get the images and insert them inside the modal carousel
    document.getElementById('workImageModal').style.display = "block";
    document.getElementById("img01").src = document.getElementById('myImg1').src;
    document.getElementById("img02").src = document.getElementById('myImg2').src;
    document.getElementById("img03").src = document.getElementById('myImg3').src;
    document.getElementById("img04").src = document.getElementById('myImg4').src;
    document.getElementById("img05").src = document.getElementById('myImg5').src;
    document.getElementById("img06").src = document.getElementById('myImg6').src;

    // remove fadeIn effect when modal opens
    $("#myCarousel").removeClass("slide");

    // enable carousel indicator for image that was selected
    $("#myCarousel").carousel(indicatorNumber);

    // add slide effect back in after modal opens so that when carousel previous or next arrows or indicators are clicked, the slide effect works
    $("#myCarousel").addClass("slide");
  }

  $(document).ready(function(){

    // move carousel caption outside of image
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .carousel-caption');
    $('.new-caption-area').html(caption.html());
    // hides caption on image
    caption.css('display', 'none');

    $(".carousel").on('slide.bs.carousel', function (evt) {
      var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
      $('.new-caption-area').html(caption.html());
      caption.css('display', 'none');
    });

  });

  function fullScreen() {
    // move carousel caption under image and center it
    $("#workImageModal .col-sm-4").addClass("fullScreen");

  // change .col-sm-6 to .col-sm-10
    $("#workImageModal .col-sm-6").addClass("col-sm-10");
    $("#workImageModal .col-sm-10").removeClass("col-sm-6");

  // hide .glyphicon-resize-full and show .glyphicon-resize-small
    $("#workImageModal .glyphicon-resize-full").addClass("hidden");
    $("#workImageModal .glyphicon-resize-small").removeClass("hidden");

  }

  function regularScreen() {
    // move caption back to where it was on regular screen
    $("#workImageModal .col-sm-4").removeClass("fullScreen");

  // change .col-sm-10 to .col-sm-6
    $("#workImageModal .col-sm-10").addClass("col-sm-6");
    $("#workImageModal .col-sm-6").removeClass("col-sm-10");

  // show .glyphicon-resize-full and hide .glyphicon-resize-small
    $("#workImageModal .glyphicon-resize-full").removeClass("hidden");
    $("#workImageModal .glyphicon-resize-small").addClass("hidden");

  }

// END OUR WORK SECTION IMAGE MODAL
