"use strict";

(() => {

  let navbar = document.querySelector('.navbar');
  let hamburger = document.getElementById('hamburger');
  let navItem = document.getElementsByClassName('nav-item');
  let footerChevron = document.getElementById('footer-chevron');

  hamburger.onclick = () => {
    navbar.classList.toggle('hidden');
    navbar.style.position = "fixed";
    navbar.style.top = "0";
  };

  footerChevron.onclick = () => {
    window.scrollTo(0,0);
  };

  navItem.onClick = () => {
    console.log(this.href);
    window.scrollTo(getOffset(this.href).left, getOffset(this.href).top);
  };

  function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
      left: el.left + window.scrollX,
      top: el.top + window.scrollY
    }
  }

})();