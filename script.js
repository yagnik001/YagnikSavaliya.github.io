$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        "Web Developer",
        "PHP Developer",
        "Administration ",
        "Leadership"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Web Developer",
        "PHP Developer",
        "Administrator ",
        "Technical Support Engineer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });


  function downloadCV() {
    // Replace 'your_cv_file.pdf' with the actual path to your CV file
    var cvFilePath = 'yagnik_resume.pdf';

    var link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'yagnik_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Attach the download function to the button click event
  var downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', downloadCV);


  
