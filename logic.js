"use strict";

(() => {

  let navbar = document.querySelector('.navbar');
  let hamburger = document.getElementById('hamburger');

  hamburger.onclick = function() {
    console.log('onclick worked');
    console.log(navbar.classList);
    navbar.classList.toggle('hidden');
  };

})();