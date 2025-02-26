
/* ------------------------------------------------------------------------------
  Jquery module for main page
 ------------------------------------------------------------------------------ */

 /*global jQuery */
//  jQuery(function ($) {
//   'use strict';

//   var App = {
//     $options: {},
//     $loader: $(".loader"),
//     $animationload: $(".animationload"),

//     bindEvents: function() {
//       //binding events
//       $(window).on('load', this.load.bind(this));
//     },
//     load: function() {
//       /* ==============================================
//       1.Page Preloader
//       =============================================== */
//       this.$loader.delay(200).fadeOut();
//       this.$animationload.delay(500).fadeOut("slow");
//     },
   
//     init: function (_options) {
//       $.extend(this.$options, _options);
//       this.bindEvents();
//     }
//   }
//   App.init({});
// });

 /*** js for mobile***/
 
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.navbar-link');
        hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('active');
        });
      
 /*** js for countdown***/

      const targetDate = new Date("March 15, 2025 18:00:00").getTime();

      function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = String(hours).padStart(2, "0");
      document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
      document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

      if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById("clock").innerHTML = "<div>Event Started!</div>";
      }
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

 /*** js for footerbutton ***/

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Smooth scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});