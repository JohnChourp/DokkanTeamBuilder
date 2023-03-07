function deviceWidthAndHeight() {
  let widthDevice = window.screen.width;
  let heighthDevice = window.screen.height;
  document.getElementById("test-device-id").innerHTML ="width device:" + widthDevice + "height device:" + heighthDevice;
  /* <div id="test-device-id"></div> */
}

function windowWidthAndHeight() {
  let widthWindow = window.innerWidth;
  let heighthWindow = window.innerHeight;
  document.getElementById("test-window-id").innerHTML ="width window:" + widthWindow + "height window:" + heighthWindow;
  /* <div id="test-window-id"></div> */
}
