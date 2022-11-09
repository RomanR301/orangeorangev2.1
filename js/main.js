
document.addEventListener("DOMContentLoaded", function(event) {

  // OPEN MENU
  $(document).on('click', '.hamburger', function() {
    $('.navbar').toggleClass('active');
    $('.hamburger').toggleClass('active');
  })

  // TEXT REVEAL
  var $revealY = $('.text-reveal-inner');

  $($revealY).each(function(i) {
    gsap.from($revealY[i], {
      scrollTrigger: {
        trigger: $revealY[i],
      },
      y: 140,
      opacity: 0,
      duration: 1.5,
      ease: Power4.easeOut
    })
  })

  // IMAGES REVEAL
  let ctrl3 = new ScrollMagic.Controller();
  [].forEach.call(document.querySelectorAll('.reveal'), function(e) {
    let tl3 = new TimelineMax();
    tl3.from(e, 2, { yPercent: -100, ease: Expo.easeInOut, duration: 3 }, .3);
    tl3.from(e.querySelector('.img'), 2, {  yPercent: 100, ease: Expo.easeInOut }, .3);
    let scene = new ScrollMagic.Scene({ triggerElement: e, triggerHook: .1, reverse:false })
    .setTween(tl3)
    .addTo(ctrl3);
  });

  // PARALLAX 
  if(window.matchMedia('(min-width: 776px)').matches){
    // var rellax = new Rellax('.rellax', {
    //   center: true,
    //   vertical: true,
    //   horizontal: false
    // });
    SmoothScroll({
      animationTime : 700,
      stepSize : 70,
      accelerationDelta : 100,
      accelerationMax : 2,

      keyboardSupport : true,
      arrowScroll : 50,
      pulseAlgorithm : true,
      pulseScale : 4,
      pulseNormalize : 1,
      touchpadSupport : true,
  })
  }

  // $('.title-item').hover(function() {
  //   $(this).find('.hover').css('opacity', 1);
  //   $(this).find('.default').css('opacity', 0);
  //   }, function() {
  //   $(this).find('.hover').css('opacity', 0);
  //   $(this).find('.default').css('opacity', 1);
  // });

  $(".home-page .title-item-1").click(function(e) {
    e.preventDefault();
    $('.navbar, .hamburger').removeClass('active')
    $('html,body').animate({
        scrollTop: $("#mobile-applications").offset().top - 170}, 1500);
    });
  $(".home-page .title-item-2").click(function(e) {
    e.preventDefault();
    $('.navbar, .hamburger').removeClass('active')
    $('html,body').animate({
        scrollTop: $("#web-applications").offset().top - 170}, 1500);
    });
  $(".home-page .title-item-3").click(function(e) {
    e.preventDefault();
    $('.navbar, .hamburger').removeClass('active')
    $('html,body').animate({
        scrollTop: $("#landing-pages").offset().top - 170}, 1500);
    });
  $(".home-page .title-item-4").click(function(e) {
    e.preventDefault();
    $('.navbar, .hamburger').removeClass('active')
    $('html,body').animate({
        scrollTop: $("#websites").offset().top - 170}, 1500);
    });

    // FORMS
    $(function () {
      $('.form-input, .form-textarea')
          .on('focusin', function(){
          $(this).parent().find('.label-name').addClass('active');
      })
          .on('focusout', function(){
            $(this).parent().find('.label-name').removeClass('active');
      })
      $(".form-control input, .form-control textarea").focusout(function() {
          let $this = $(this);
          let $label = $this.parent().find('.label-name')
  
          if ($this.val() != "") {
              $this.addClass("has-content");
              $label.addClass("active");
          }
          else {
              $this.removeClass("has-content");
              $label.removeClass("active");
          }
  
      })
      $("#uploadBtn").click(function() {
          $('#uploadFile').addClass("has-content");
      })
      $(document).on('click', '#uploadFile', function(){
          $('#uploadBtn').click();
      })
  });

  $(document).on('click', '.cta-trigger', function() {
    $('.modal').addClass('active');
  })

  $(document).on('click', '.modal-close', function() {
    $('.modal').removeClass('active');
  })
  const yOffset = window.pageYOffset;
  console.log(yOffset)

  if (yOffset > 20) {
    $('.hero-screen-cta-wrapper').addClass('fixed');
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('.hero-screen-cta-wrapper').addClass('fixed');
    } else {
      $('.hero-screen-cta-wrapper').removeClass("fixed");  
    }
  })
  


  document.getElementById("uploadBtn").onchange = function () {
  document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
  };
  
})

