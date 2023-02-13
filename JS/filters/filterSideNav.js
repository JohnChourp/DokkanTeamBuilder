function openNav() {
  const leftSidenav = document.getElementById("left-sidenav-id");
  const leftSidenavFilters = document.getElementById("left-sidenav-filters-id");
  const applyFiltersBg = document.getElementById("apply-filters-bg-id");
  const applyFilters = document.getElementById("apply-filters-id");
  const applyFiltersText = document.getElementById("apply-filters-text-id");
  const ok = document.getElementById("ok");
  const removeAll = document.getElementById("remove-all-id");
  const mainPage = document.getElementById("main-page-id");

  leftSidenav.style.width = "400px";
  leftSidenavFilters.style.width = "400px";
  applyFiltersBg.style.width = "400px";
  applyFilters.style.width = "400px";
  applyFiltersText.style.left = "0";
  ok.style.left = "0";
  removeAll.style.left = "0";

  mainPage.style.opacity = "0.2";
  mainPage.style.pointerEvents = "none";
  mainPage.style.userSelect = "none";
}

function openNavRight() {
  const rightSidenav = document.getElementById("right-sidenav-id");
  const mainPage = document.getElementById("main-page-id");
  rightSidenav.style.width = "400px";
  mainPage.style.opacity = "0.2";
  mainPage.style.pointerEvents = "none";
  mainPage.style.userSelect = "none";
}


function closeNav() {
  const leftSidenav = document.getElementById("left-sidenav-id");
  const rightSidenav = document.getElementById("right-sidenav-id");
  const leftSidenavFilters = document.getElementById("left-sidenav-filters-id");
  const applyFiltersBg = document.getElementById("apply-filters-bg-id");
  const applyFilters = document.getElementById("apply-filters-id");
  const applyFiltersText = document.getElementById("apply-filters-text-id");
  const ok = document.getElementById("ok");
  const removeAll = document.getElementById("remove-all-id");
  const mainPage = document.getElementById("main-page-id");

  leftSidenav.style.width = "0";
  rightSidenav.style.width = "0";
  leftSidenavFilters.style.width = "0";
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
  let filterSelect = document.getElementById("filter-select-id");
  document.addEventListener('mousedown', function (event) {
    let outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(leftSidenav) && !event.composedPath().includes(rightSidenav);
    if ((outsideClick === true) && (!event.composedPath().includes(filterSelect))) {
      closeNav();
    }
  });

  document.addEventListener('mouseup', function (event) {
    let outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(leftSidenav) && !event.composedPath().includes(rightSidenav);
    if ((outsideClick === true) && (!event.composedPath().includes(filterSelect))) {
      closeNav();
    }
  });
}
