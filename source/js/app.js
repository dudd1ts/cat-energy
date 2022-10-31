"use strict";

(function() {
  // for mainNav
  let toggleButton = document.querySelector(".button-toggle");
  let mainNav = document.querySelector(".main-nav");

  initMenuState();

  handleMenu();

  function toggleMenu() {
    toggleButton.classList.toggle("button-toggle--close");
    mainNav.classList.toggle("main-nav--closed");
  }

  function handleMenu() {
    toggleButton.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });
  }

  function initMenuState() {
    toggleMenu();
  }

})();
