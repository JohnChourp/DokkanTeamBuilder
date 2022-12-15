// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.selected-dropdown')) {
		var dropdowns = document.getElementsByClassName("dropdown-options");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function searchDisplayOptions() {
	document.getElementsByClassName("dropdown-options").item(0).classList.toggle("show");
	//add class when clicked
}

function addDropdownClass(filterDisplay) {
	let dropdownOptionsValue = document.getElementsByClassName("dropdown-options-value");
	dropdownOptionsValue.item(filterDisplay).classList.add("checkedDisplayBtn");
	for (let i = 0; i < dropdownOptionsValue.length; i++) {
		if (i != filterDisplay) {
			dropdownOptionsValue.item(i).classList.remove("checkedDisplayBtn");
		}
	}
}

