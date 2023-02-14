function toggleDirection(direction) {
	const buttonDown = document.getElementById("filter-direction-down-id");
	const buttonUp = document.getElementById("filter-direction-up-id");
	if (direction === "down") {
		buttonDown.classList.add("checkedDirectionBtn");
		buttonDown.style.backgroundColor = "#33ccff";
		buttonUp.style.backgroundColor = "white";
	} else if (direction === "up") {
		buttonDown.classList.remove("checkedDirectionBtn");
		buttonDown.style.backgroundColor = "white";
		buttonUp.style.backgroundColor = "#33ccff";
	}
}