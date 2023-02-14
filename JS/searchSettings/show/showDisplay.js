window.onclick = function (event) {
	const dropdowns = document.getElementsByClassName("dropdown-options");
	let openDropdown;
	if (!event.target.matches('#selected-dropdown')) {
		for (let i = 0; i < dropdowns.length; i++) {
			openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

function showDisplayOptions() {
	document.getElementsByClassName("dropdown-options").item(0).classList.toggle('show');
}

function addDropdownClass(filterDisplay) {
	const selecteddropdown_btn = document.getElementById("selected-dropdown");
	const dropdownOptionsValue = document.getElementsByClassName("dropdown-options-value");

	const dataCharName = 'data-char-name', dataCharTitle = 'data-char-title', dataCharEza = 'data-char-eza',
		dataCharId = 'data-char-id', dataCharHp = 'data-char-hp', dataCharAttack = 'data-char-attack',
		dataCharDefense = 'data-char-defense', dataCharCost = 'data-char-cost', dataCharMaxLevel = 'data-char-max-level',
		dataCharRelease = 'data-char-release', dataCharRecruit = 'data-char-recruit', dataCharAwaken = 'data-char-awaken',
		dataCharSuperAtkLevel = 'data-char-super-atk-level', dataCharSuperAtkType = 'data-char-super-atk-type',
		dataCharLinks = 'data-char-links', dataCharCategories = 'data-char-categories';

		const dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
		const dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');
		const dataCharEzaItems = document.querySelectorAll('[' + dataCharEza + ']');
		const dataCharIdItems = document.querySelectorAll('[' + dataCharId + ']');
		const dataCharHpItems = document.querySelectorAll('[' + dataCharHp + ']');
		const dataCharAttackItems = document.querySelectorAll('[' + dataCharAttack + ']');
		const dataCharDefenseItems = document.querySelectorAll('[' + dataCharDefense + ']');
		const dataCharCostItems = document.querySelectorAll('[' + dataCharCost + ']');
		const dataCharMaxLevelItems = document.querySelectorAll('[' + dataCharMaxLevel + ']');
		const dataCharRecruitItems = document.querySelectorAll('[' + dataCharRecruit + ']');
		const dataCharAwakenItems = document.querySelectorAll('[' + dataCharAwaken + ']');
		const dataCharSuperAtkLevelItems = document.querySelectorAll('[' + dataCharSuperAtkLevel + ']');
		const dataCharReleaseItems = document.querySelectorAll('[' + dataCharRelease + ']');
		const dataCharSuperAtkTypeItems = document.querySelectorAll('[' + dataCharSuperAtkType + ']');
		const dataCharLinksItems = document.querySelectorAll('[' + dataCharLinks + ']');
		const dataCharCategoriesItems = document.querySelectorAll('[' + dataCharCategories + ']');

		const char_display = document.getElementsByClassName("char_display");
	let listLinks = [], listCategories = [], listSuperAtkType = [], listRelease = [];
	let listLinksFormattedString = [], listCategoriesFormattedString = [], listSuperAtkTypeFormattedString = [],
		listReleaseFormattedString = [], a, b, position, temp;

	localStorage.setItem("filterDisplay", filterDisplay);
	selecteddropdown_btn.innerHTML = dropdownOptionsValue.item(filterDisplay).innerHTML;
	dropdownOptionsValue.item(filterDisplay).classList.add("checkedDisplayBtn");

	for (let i = 0; i < dropdownOptionsValue.length; i++) {
		if (i != filterDisplay) {
			dropdownOptionsValue.item(i).classList.remove("checkedDisplayBtn");
		}
	}

	for (let i = 0; i < char_display.length; i++) {
		listLinks[i] = dataCharLinksItems[i].getAttribute(dataCharLinks).split(",");
		listLinksFormattedString[i] = listLinks[i].join("<br/>");

		listSuperAtkType[i] = dataCharSuperAtkTypeItems[i].getAttribute(dataCharSuperAtkType).split(",");
		listSuperAtkTypeFormattedString[i] = listSuperAtkType[i].join("<br/>");

		if (dataCharReleaseItems[i].getAttribute(dataCharRelease).length == 25) {
			a = dataCharReleaseItems[i].getAttribute(dataCharRelease);
			b = "After EZA:.";
			position = 13;
			temp = [a.slice(0, position), b, a.slice(position)].join('');
			temp = "Before EZA:." + temp;
			listRelease[i] = temp.split(".");
		} else {
			listRelease[i] = dataCharReleaseItems[i].getAttribute(dataCharRelease).split(".");
		}
		listReleaseFormattedString[i] = listRelease[i].join("<br/>");
	}
	for (let i = 0; i < dataCharCategoriesItems.length; i++) {
		listCategories[i] = dataCharCategoriesItems[i].getAttribute(dataCharCategories).split(",");
		listCategoriesFormattedString[i] = listCategories[i].join("<br/>");
	}

	if ((filterDisplay > -1) && (filterDisplay < 8)) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).style.display = "table-cell";
		}
	}
	if ((filterDisplay > 9) && (filterDisplay < 12)) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).style.display = "table-cell";
		}
	}
	if (filterDisplay == 8) {
		for (let i = 0; i < char_display.length; i++) {
			if (dataCharEzaItems[i].getAttribute(dataCharEza) != "eza") {
				char_display.item(i).style.display = "table-cell";
			} else {
				char_display.item(i).style.display = "block";
				if (window.matchMedia('(max-device-width: 413px)').matches) {
					char_display.item(i).style.width = "91px";
				}
			}
		}
	}
	if (filterDisplay > 11) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).style.display = "block";
		}
	}
	if (filterDisplay > 12) {
		for (let i = 0; i < char_display.length; i++) {
			if (window.matchMedia('(max-device-width: 413px)').matches) {
				char_display.item(i).style.fontSize = "8px";
			}
		}
	}
	//Name
	if (filterDisplay == 0) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharNameItems[i].getAttribute(dataCharName);
		}
	}
	//Title
	if (filterDisplay == 1) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharTitleItems[i].getAttribute(dataCharTitle);
		}
	}
	//Char ID
	if (filterDisplay == 2) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharIdItems[i].getAttribute(dataCharId);
		}
	}
	//HP
	if (filterDisplay == 3) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = new Intl.NumberFormat().format(dataCharHpItems[i].getAttribute(dataCharHp));
		}
	}
	//Attack
	if (filterDisplay == 4) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = new Intl.NumberFormat().format(dataCharAttackItems[i].getAttribute(dataCharAttack));
		}
	}
	//Defense
	if (filterDisplay == 5) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = new Intl.NumberFormat().format(dataCharDefenseItems[i].getAttribute(dataCharDefense));
		}
	}
	//Cost
	if (filterDisplay == 6) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharCostItems[i].getAttribute(dataCharCost);
		}
	}
	//Max Level
	if (filterDisplay == 7) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharMaxLevelItems[i].getAttribute(dataCharMaxLevel);
		}
	}
	//Release Date
	if (filterDisplay == 8) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = listReleaseFormattedString[i];
		}
	}
	//Recruit
	if (filterDisplay == 9) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharRecruitItems[i].getAttribute(dataCharRecruit);
		}
	}
	//Awaken
	if (filterDisplay == 10) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharAwakenItems[i].getAttribute(dataCharAwaken);
		}
	}
	//Super ATK Level
	if (filterDisplay == 11) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharSuperAtkLevelItems[i].getAttribute(dataCharSuperAtkLevel);
		}
	}
	//Super ATK Type
	if (filterDisplay == 12) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = listSuperAtkTypeFormattedString[i];
		}
	}
	//Links
	if (filterDisplay == 13) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = listLinksFormattedString[i];
		}
	}
	//Categories
	if (filterDisplay == 14) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = listCategoriesFormattedString[i];
		}
	}
}
