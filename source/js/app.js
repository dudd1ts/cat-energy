"use strict";

(function() {
  // for mainNav
  const toggleButton = document.querySelector(".button-toggle");
  const mainNav = document.querySelector(".main-nav");

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


  // Initializing Google map
  function initMap() {

    const myLatLng = { lat: 59.9387942, lng: 30.3230833 };

    const map = new google.maps.Map(document.querySelector(".contacts__map"), {
      zoom: 15,
      center: myLatLng,
      disableDefaultUI: true
    });

    const icon = {
      url: "img/map-pin.png",
      size: new google.maps.Size(113, 106),
      scaledSize: new google.maps.Size(113, 106)
    };

    const marker = new google.maps.Marker({
      position: myLatLng,
      map,
      optimized: false,
      icon
    });
  }

  window.initMap = initMap;
})();
