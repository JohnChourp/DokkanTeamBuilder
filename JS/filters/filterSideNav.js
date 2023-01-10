/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
  document.getElementById("mainPage").style.opacity = "0.2";
  document.getElementById("mainPage").style.pointerEvents = "none";
  document.getElementById("mainPage").style.userSelect = "none";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mainPage").style.opacity = "1";
  document.getElementById("mainPage").style.pointerEvents = "auto";
  document.getElementById("mainPage").style.userSelect = "auto";
}