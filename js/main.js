function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  var GUI = {
    slideOject: () => {
      if (document.querySelector(".mySwiper")) {
        var swiper = new Swiper(".mySwiper", {
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30
            },

            
          },
          navigation: {
            nextEl: ".dis-next",
            prevEl: ".dis-prev",
            clickable: true,
          },
        });
      }
    },
  
    
  
    init: () => {
      GUI.slideOject();
    },
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    GUI.init();
  });

  var Doctor = {
    slideDoctor: () => {
      if (document.querySelector(".doctorSwiper")) {
        var swiper = new Swiper(".doctorSwiper", {
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            
          },
          navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
            clickable: true,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    },
  
    
  
    init: () => {
      Doctor.slideDoctor();
    },
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    Doctor.init();
  });


  var Service = {
    slideService: () => {
      if (document.querySelector(".serviceSwiper")) {
        var swiper = new Swiper(".serviceSwiper", {
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 30
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            1366: {
              slidesPerView: 3.5,
              spaceBetween: 30
            },
            
          },
          navigation: {
            nextEl: ".btnext",
            prevEl: ".btprev",
            clickable: true,
          },
        });
      }
    },
  
    
  
    init: () => {
      Service.slideService();
    },
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    Service.init();
  });



  var Ques = (function () {
    var intTabShow = function () {
      $(".box_show .box_title").click(function () {
        var parentBox = $(this).parent();
        var contentItem = parentBox.find(".box_des");
        if (parentBox.hasClass("active")) {
          parentBox.removeClass("active");
          contentItem.slideUp(200);
        } else {
          $(".box_show .box_des").slideUp(200);
          $(".box_show").removeClass("active");
          parentBox.addClass("active");
          contentItem.slideDown(200);
        }
      });
    };
    return {
      _: function () {
        intTabShow();
      },
    };
  })();
  $(document).ready(function () {
    Ques._();
  });


  $(document).ready(function () {
    var tabContentItems = () => {
        if (typeof $(".tab-items") == "undefined") return;
        $(".tab-items li:first-child").addClass("active");
        $(".list-tab-items .tab-content").hide();
        $(".list-tab-items .tab-content:first").show();
        $(".tab-items li").click(function () {
            $(".tab-items li").removeClass("active");
            $(this).addClass("active");
            $(".list-tab-items .tab-content").hide();
            var currentTab = $(this).data("electronic");
            $("#" + currentTab).show();
            return false;
        });
    };
    tabContentItems();
});





