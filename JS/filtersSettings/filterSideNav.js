function openNav() {
    const applyFiltersBg = document.getElementById("apply-filters-bg-id");
    const applyFilters = document.getElementById("apply-filters-id");
    const leftSidenav = document.getElementById("left-sidenav-id");
    const ok = document.getElementById("ok");
    const removeAll = document.getElementById("remove-all-id");
    const mainPage = document.getElementById("main-page-id");

    let width = "400px";

    

    applyFiltersBg.style.width = width;
    applyFiltersBg.style.left = "-12px";
    applyFilters.style.width = width;

    leftSidenav.style.width = width;

    ok.style.left = "-10px";
    removeAll.style.left = "-10px";

    mainPage.style.opacity = "0.2";
    mainPage.style.pointerEvents = "none";
    mainPage.style.userSelect = "none";
}

function openNavRight() {
    const rightSidenav = document.getElementById("right-sidenav-id");
    const closeRightSidenavBtnId = document.getElementById("close-right-sidenav-btn-id");
    const rightSidenavFilters = document.getElementById("right-sidenav-filters-id");
    const mainPage = document.getElementById("main-page-id");

    let width = "401px";

    for (let i = 100; i < 416; i++) {
        if (i > 400) {
            if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
                width = i - 1 + "px";
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
    closeRightSidenavBtnId.style.left = "10px";
    rightSidenavFilters.style.width = width;

    mainPage.style.opacity = "0.2";
    mainPage.style.pointerEvents = "none";
    mainPage.style.userSelect = "none";
}

function closeNav() {
    const allCategoriesId = document.getElementById("all-categories-id");
    const applyCategoriesId = document.getElementById("apply-categories-id");
    const applyCategoriesBgId = document.getElementById("apply-categories-bg-id");
    const applyCategoriesTextId = document.getElementById("apply-categories-text-id");
    const removeAllCategories = document.getElementById("remove-all-categories-id");const leftSidenav = document.getElementById("left-sidenav-id");
    const rightSidenav = document.getElementById("right-sidenav-id");
    const closeRightSidenavBtnId = document.getElementById("close-right-sidenav-btn-id");
    const rightSidenavFilters = document.getElementById("right-sidenav-filters-id");
    const applyFiltersBg = document.getElementById("apply-filters-bg-id");
    const applyFilters = document.getElementById("apply-filters-id");
    const ok = document.getElementById("ok");
    const removeAll = document.getElementById("remove-all-id");
    const mainPage = document.getElementById("main-page-id");

    allCategoriesId.style.width = "0";
    applyCategoriesId.style.width = "0";
    applyCategoriesBgId.style.width = "0";
    applyCategoriesTextId.style.left = "-400px";
    removeAllCategories.style.left = "-400px";
    leftSidenav.style.width = "0";

    rightSidenav.style.width = "0";
    closeRightSidenavBtnId.style.left = "800px";
    rightSidenavFilters.style.width = "0";

    applyFiltersBg.style.width = "0";
    applyFilters.style.width = "0";

    ok.style.left = "-250px";
    removeAll.style.left = "-250px";

    mainPage.style.opacity = "1";
    mainPage.style.pointerEvents = "auto";
    mainPage.style.userSelect = "auto";
}

function closeNavWhenClickedOutside() {
    const applyFiltersId = document.getElementById("apply-filters-id");
    const applyCategoriesId = document.getElementById("apply-categories-id");
    const leftSidenav = document.getElementById("left-sidenav-id");
    const rightSidenav = document.getElementById("right-sidenav-id");
    const filterSelect = document.getElementById("filter-select-id");
    document.addEventListener("mousedown", function (event) {
        const outsideClick = typeof event.composedPath === "function" &&
            !event.composedPath().includes(leftSidenav) &&
            !event.composedPath().includes(rightSidenav) &&
            !event.composedPath().includes(applyFiltersId) &&
            !event.composedPath().includes(applyCategoriesId);
        if (outsideClick === true && !event.composedPath().includes(filterSelect)) {
            closeNav();
        }
    });

    document.addEventListener("mouseup", function (event) {
        const outsideClick = typeof event.composedPath === "function" &&
            !event.composedPath().includes(leftSidenav) &&
            !event.composedPath().includes(rightSidenav) &&
            !event.composedPath().includes(applyFiltersId) &&
            !event.composedPath().includes(applyCategoriesId);
        if (outsideClick === true && !event.composedPath().includes(filterSelect)) {
            closeNav();
        }
    });
}
