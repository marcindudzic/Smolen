// window.addEventListener('scroll', function(){
//     const mainNav = this.document.querySelector('.main-nav');
//     const mainNavigation = document.querySelector('.main-navigation-link');
//     if(this.window.pageYOffset > 50){
//         mainNav.style.background = 'rgba(255,255,255,0.9)';
//         mainNavigation.style.color = "black";
//     } else {
//         mainNav.style.background = 'transparent';
//         mainNavigation.style.color = "white";
//     }
// })

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


  
  // mobile menu

  function showMenu(){
    const menuOpen = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.close-menu-button');
    const menuBox = document.querySelector('.mobile-menu');
    let menuStatus = false;

    menuOpen.addEventListener('click', function(){
        menuBox.style.display = "flex";
        menuBox.style.opacity = "1";
        menuStatus = true;
    })

    menuClose.addEventListener('click', function(){
        menuBox.style.opacity = "0";
        menuBox.style.display = "none";
        menuStatus = false;
    })
}
showMenu(); 