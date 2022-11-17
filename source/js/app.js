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


  // Initializing yandex map
  const TABLET_WIDTCH = 768;
  const DESKTOP_WIDTCH = 1440;

  const mapParams = {};

  const setScreenType = function () {
    const screenWidth = document.documentElement.clientWidth;

    if (screenWidth < TABLET_WIDTCH)
      return 'MOBILE';
    if (screenWidth >= DESKTOP_WIDTCH)
      return 'DESKTOP';
    else
      return 'TABLET';
  }

  let prevScreenType = setScreenType();
  let screenType = setScreenType();

  const defineMapParams = function (params) {
    switch(screenType) {
      case 'MOBILE':
        params.zoom = 14;
        params.iconImageHref = 'img/map-pin-mobile.png';
        params.iconImageSize = [57, 53];
        params.iconImageOffset = [-28, -45];
        params.center = [59.9387942, 30.3230833];
        break;
      case 'TABLET':
        params.zoom = 15;
        params.iconImageHref = 'img/map-pin.png';
        params.iconImageSize = [113, 106];
        params.iconImageOffset = [-50, -106];
        params.center = [59.9387942, 30.3230833];
        break;
      case 'DESKTOP':
        params.zoom = 16;
        params.iconImageHref = 'img/map-pin.png';
        params.iconImageSize = [113, 106];
        params.iconImageOffset = [-50, -106];
        params.center = [59.938802, 30.319973];
    }
  }

  defineMapParams(mapParams);

  ymaps.ready(function() {
    const contactsMap = new ymaps.Map("contacts__map", {
      center: mapParams.center,
      zoom: mapParams.zoom,
      controls: []
    });

    const mapPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: 'HTML Academy',
    }, {
      iconLayout: 'default#image',
      iconImageHref: mapParams.iconImageHref,
      iconImageSize: mapParams.iconImageSize,
      iconImageOffset: mapParams.iconImageOffset
    });
    contactsMap.geoObjects.add(mapPlacemark);


    window.addEventListener('resize', () => {
      let newScreenType = setScreenType();

      // Only if screen type was changed, change map parameters
      if (newScreenType !== prevScreenType) {
        prevScreenType = screenType;
        screenType = newScreenType;

        defineMapParams(mapParams);

        contactsMap.setCenter(mapParams.center, mapParams.zoom);
        mapPlacemark.options.set({
          iconImageSize: mapParams.iconImageSize,
          iconImageOffset: mapParams.iconImageOffset
        });
      }
    });
  });
})();
