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

	let dataCharName = 'data-char-name';
	let dataCharTitle = 'data-char-title';
	let dataCharId = 'data-char-id';
	let dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
	let dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');
	let dataCharIdItems = document.querySelectorAll('[' + dataCharId + ']');
	let char_display = document.getElementsByClassName("char_display");

	if(filterDisplay == 1){
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharNameItems[i].getAttribute(dataCharName);
		}
	}
	if(filterDisplay == 2){
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharTitleItems[i].getAttribute(dataCharTitle);
		}
	}
	if(filterDisplay == 3){
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharIdItems[i].getAttribute(dataCharId);
		}
	}

}

