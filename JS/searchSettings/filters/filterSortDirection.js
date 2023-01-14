function filterDirectionDown() {
	let buttonDown = document.getElementById("filter-direction-down-id");
	let buttonUp = document.getElementById("filter-direction-up-id");
	buttonDown.classList.add("checkedDirectionBtn");
	buttonDown.style.backgroundColor = "#33ccff";
	buttonUp.style.backgroundColor = "white";
}

function filterDirectionUp() {
	let buttonDown = document.getElementById("filter-direction-down-id");
	let buttonUp = document.getElementById("filter-direction-up-id");
	buttonDown.classList.remove("checkedDirectionBtn");
	buttonDown.style.backgroundColor = "white";
	buttonUp.style.backgroundColor = "#33ccff";
}