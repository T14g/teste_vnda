console.log("Load script11.js");

// Instantiating the global app object
var app = {};

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    autoHeight: true, //enable auto height
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  $(document).ready(function() {
    var sideMenu = false;
    
     $(".toggle-menu").click(function() {
       if (!sideMenu) {
         $("#sidemenu").show();
         $("#sidemenu").animate({width: "300px"});

         $('body').addClass('menu-open');
         sideMenu = true;
       }
       else {
         $("#sidemenu").hide();
         $("#sidemenu").animate({width: "1px"});
         $('body').removeClass('menu-open');
         sideMenu = false;     
       }
     });
 }); 

//Grid
