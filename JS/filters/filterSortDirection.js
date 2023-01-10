function filterDirectionDown() {
	let buttonDown = document.getElementById("filterDirectionDown");
	let buttonUp = document.getElementById("filterDirectionUp");
	buttonDown.classList.add("checkedDirectionBtn");
	buttonDown.style.backgroundColor = "#33ccff";
	buttonUp.style.backgroundColor = "white";
}

function filterDirectionUp() {
	let buttonDown = document.getElementById("filterDirectionDown");
	let buttonUp = document.getElementById("filterDirectionUp");
	buttonDown.classList.remove("checkedDirectionBtn");
	buttonDown.style.backgroundColor = "white";
	buttonUp.style.backgroundColor = "#33ccff";
}