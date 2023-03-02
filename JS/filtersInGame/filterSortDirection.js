function toggleDirection(direction) {
  const buttonDescending = document.getElementById("filter-direction-down-id");
  const buttonAscending = document.getElementById("filter-direction-up-id");

  if (direction === "down") {
    buttonDescending.classList.add("checkedDirectionBtn");
    buttonDescending.style.backgroundColor = "#33ccff";

    buttonAscending.classList.remove("checkedDirectionBtn");
    buttonAscending.style.backgroundColor = "white";
  } else if (direction === "up") {
    buttonDescending.classList.remove("checkedDirectionBtn");
    buttonDescending.style.backgroundColor = "white";

    buttonAscending.classList.add("checkedDirectionBtn");
    buttonAscending.style.backgroundColor = "#33ccff";
  }
}
