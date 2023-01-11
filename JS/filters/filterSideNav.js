/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("mainPage").style.opacity = "0.2";
  document.getElementById("mainPage").style.pointerEvents = "none";
  document.getElementById("mainPage").style.userSelect = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mainPage").style.opacity = "1";
  document.getElementById("mainPage").style.pointerEvents = "auto";
  document.getElementById("mainPage").style.userSelect = "auto";
}

function closeNavWhenClickedOutside() {
  document.addEventListener('mousedown', function (event) {
    let outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(document.getElementById("mySidenav"));
    if ((outsideClick === true) && (!event.composedPath().includes(document.getElementById("filter_select")))) {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mainPage").style.opacity = "1";
      document.getElementById("mainPage").style.pointerEvents = "auto";
      document.getElementById("mainPage").style.userSelect = "auto";
    }
  });

  document.addEventListener('mouseup', function (event) {
    let outsideClick = typeof event.composedPath === 'function' && !event.composedPath().includes(document.getElementById("mySidenav"));
    if ((outsideClick === true) && (!event.composedPath().includes(document.getElementById("filter_select")))) {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mainPage").style.opacity = "1";
      document.getElementById("mainPage").style.pointerEvents = "auto";
      document.getElementById("mainPage").style.userSelect = "auto";
    }
  });
}