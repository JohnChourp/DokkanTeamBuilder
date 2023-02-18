function openNav() {
  const leftSidenav = document.getElementById("left-sidenav-id");
  const applyFiltersBg = document.getElementById("apply-filters-bg-id");
  const applyFilters = document.getElementById("apply-filters-id");
  const applyFiltersText = document.getElementById("apply-filters-text-id");
  const ok = document.getElementById("ok");
  const removeAll = document.getElementById("remove-all-id");
  const mainPage = document.getElementById("main-page-id");

  let width = '401px';

  for (let i = 100; i < 416; i++) {
    if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
      width = (i - 1) + "px";
      break;
    }
  }

  leftSidenav.style.width = width;
  applyFiltersBg.style.width = width;
  applyFilters.style.width = width;

  applyFiltersText.style.left = "0";
  ok.style.left = "0";
  removeAll.style.left = "0";

  mainPage.style.opacity = "0.2";
  mainPage.style.pointerEvents = "none";
  mainPage.style.userSelect = "none";
}

function openNavRight() {
  const rightSidenav = document.getElementById("right-sidenav-id");
  const rightSidenavFilters = document.getElementById("right-sidenav-filters-id");
  const mainPage = document.getElementById("main-page-id");

  let width = '401px';

  for (let i = 100; i < 416; i++) {
    if (i > 400) {
      if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
        width = (i - 1) + "px";
        break;
      }
    } else {
      if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
        width = "401px";
        break;
      }
    }

  }

  rightSidenav.style.width = width;
  rightSidenavFilters.style.width = width;

  mainPage.style.opacity = "0.2";
  mainPage.style.pointerEvents = "none";
  mainPage.style.userSelect = "none";
}


function closeNav() {
  const allCategoriesId = document.getElementById("all-categories-id");
	const leftSidenav = document.getElementById("left-sidenav-id");
  const rightSidenav = document.getElementById("right-sidenav-id");
  const rightSidenavFilters = document.getElementById("right-sidenav-filters-id");
  const applyFiltersBg = document.getElementById("apply-filters-bg-id");
  const applyFilters = document.getElementById("apply-filters-id");
  const applyFiltersText = document.getElementById("apply-filters-text-id");
  const ok = document.getElementById("ok");
  const removeAll = document.getElementById("remove-all-id");
  const mainPage = document.getElementById("main-page-id");

  allCategoriesId.style.width = "0";
  leftSidenav.style.width = "0";
  
  rightSidenav.style.width = "0";
  rightSidenavFilters.style.width = "0";

  applyFiltersBg.style.width = "0";
  applyFilters.style.width = "0";
  applyFiltersText.style.left = "-70px";

  ok.style.left = "-30px";
  removeAll.style.left = "-90px";

  mainPage.style.opacity = "1";
  mainPage.style.pointerEvents = "auto";
  mainPage.style.userSelect = "auto";
}

function closeNavWhenClickedOutside() {
  const leftSidenav = document.getElementById("left-sidenav-id");
  const rightSidenav = document.getElementById("right-sidenav-id");
  const filterSelect = document.getElementById("filter-select-id");
  document.addEventListener('mousedown', function (event) {
    const outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(leftSidenav) && !event.composedPath().includes(rightSidenav);
    if ((outsideClick === true) && (!event.composedPath().includes(filterSelect))) {
      closeNav();
    }
  });

  document.addEventListener('mouseup', function (event) {
    const outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(leftSidenav) && !event.composedPath().includes(rightSidenav);
    if ((outsideClick === true) && (!event.composedPath().includes(filterSelect))) {
      closeNav();
    }
  });
}
