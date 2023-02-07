/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("left-sidenav-id").style.width = "400px";
  document.getElementById("left-sidenav-filters-id").style.width = "400px";
  document.getElementById("apply-filters-bg-id").style.width = "400px";
  document.getElementById("apply-filters-id").style.width = "400px";
  document.getElementById("apply-filters-text-id").style.left = "0";
  document.getElementById("ok").style.left = "0";
  document.getElementById("remove-all-id").style.left = "0";

  document.getElementById("main-page-id").style.opacity = "0.2";
  document.getElementById("main-page-id").style.pointerEvents = "none";
  document.getElementById("main-page-id").style.userSelect = "none";
}

function closeNav() {
  document.getElementById("left-sidenav-id").style.width = "0";
  document.getElementById("left-sidenav-filters-id").style.width = "0";
  document.getElementById("apply-filters-bg-id").style.width = "0";
  document.getElementById("apply-filters-id").style.width = "0";
  document.getElementById("apply-filters-text-id").style.left = "-70px";
  document.getElementById("ok").style.left = "-30px";
  document.getElementById("remove-all-id").style.left = "-90px";

  document.getElementById("main-page-id").style.opacity = "1";
  document.getElementById("main-page-id").style.pointerEvents = "auto";
  document.getElementById("main-page-id").style.userSelect = "auto";
}

function closeNavWhenClickedOutside() {
  let closeNavWhenClickedOutsideEventCompleted = localStorage.getItem("closeNavWhenClickedOutsideEventCompleted");
  if (closeNavWhenClickedOutsideEventCompleted == null) {
    window.addEventListener("unload", function () {
      localStorage.removeItem("closeNavWhenClickedOutsideEventCompleted");
    });
    document.addEventListener('mousedown', function (event) {
      let outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(document.getElementById("left-sidenav-id"));
      if ((outsideClick === true) && (!event.composedPath().includes(document.getElementById("filter-select-id")))) {
        document.getElementById("left-sidenav-id").style.width = "0";
        document.getElementById("left-sidenav-filters-id").style.width = "0";
        document.getElementById("apply-filters-bg-id").style.width = "0";
        document.getElementById("apply-filters-id").style.width = "0";
        document.getElementById("apply-filters-text-id").style.left = "-70px";
        document.getElementById("ok").style.left = "-30px";
        document.getElementById("remove-all-id").style.left = "-90px";

        document.getElementById("main-page-id").style.opacity = "1";
        document.getElementById("main-page-id").style.pointerEvents = "auto";
        document.getElementById("main-page-id").style.userSelect = "auto";
      }
    });

    document.addEventListener('mouseup', function (event) {
      let outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(document.getElementById("left-sidenav-id"));
      if ((outsideClick === true) && (!event.composedPath().includes(document.getElementById("filter-select-id")))) {
        document.getElementById("left-sidenav-id").style.width = "0";
        document.getElementById("left-sidenav-filters-id").style.width = "0";
        document.getElementById("apply-filters-bg-id").style.width = "0";
        document.getElementById("apply-filters-id").style.width = "0";
        document.getElementById("apply-filters-text-id").style.left = "-70px";
        document.getElementById("ok").style.left = "-30px";
        document.getElementById("remove-all-id").style.left = "-90px";

        document.getElementById("main-page-id").style.opacity = "1";
        document.getElementById("main-page-id").style.pointerEvents = "auto";
        document.getElementById("main-page-id").style.userSelect = "auto";
      }
    });
    localStorage.setItem("closeNavWhenClickedOutsideEventCompleted", 1);
  }
}