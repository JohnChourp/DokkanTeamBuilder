const anniversaryButtons = document.querySelectorAll(".anniversary-class");

function filterAnniversary(year) {
  removeAllAnniversary();
  const btn = document.querySelector(`#year-${year}`);
  btn.classList.toggle("checkedAnniversaryBtn");
  btn.style.backgroundColor = btn.classList.contains("checkedAnniversaryBtn")
    ? "#33ccff"
    : "#ddd";
}

function removeAllAnniversary() {
  for (const btn of anniversaryButtons) {
    btn.classList.remove("checkedAnniversaryBtn");
    btn.style.backgroundColor = "#ddd";
    btn.style.cursor = "pointer";
    btn.style.color = "black";
    btn.removeAttribute("disabled");
  }
}
