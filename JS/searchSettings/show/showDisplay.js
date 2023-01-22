window.onclick = function (event) {
	if (!event.target.matches('#selected-dropdown')) {
		var dropdowns = document.getElementsByClassName("dropdown-options");
		for (let i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
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
	localStorage.setItem("filterDisplay", filterDisplay);
	let selecteddropdown_btn = document.getElementById("selected-dropdown");
	let dropdownOptionsValue = document.getElementsByClassName("dropdown-options-value");

	selecteddropdown_btn.innerHTML = dropdownOptionsValue.item(filterDisplay).innerHTML;
	dropdownOptionsValue.item(filterDisplay).classList.add("checkedDisplayBtn");

	for (let i = 0; i < dropdownOptionsValue.length; i++) {
		if (i != filterDisplay) {
			dropdownOptionsValue.item(i).classList.remove("checkedDisplayBtn");
		}
	}

	let dataCharName = 'data-char-name';
	let dataCharTitle = 'data-char-title';
	let dataCharId = 'data-char-id';
	let dataCharHp = 'data-char-hp';
	let dataCharAttack = 'data-char-attack';
	let dataCharDefense = 'data-char-defense';
	let dataCharCost = 'data-char-cost';
	let dataCharMaxLevel = 'data-char-max-level';
	let dataCharSuperAtkLevel = 'data-char-super-atk-level';
	let dataCharRelease = 'data-char-release';
	let dataCharSuperAtkType = 'data-char-super-atk-type';
	let dataCharLinks = 'data-char-links';
	let dataCharCategories = 'data-char-categories';

	let dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
	let dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');
	let dataCharIdItems = document.querySelectorAll('[' + dataCharId + ']');
	let dataCharHpItems = document.querySelectorAll('[' + dataCharHp + ']');
	let dataCharAttackItems = document.querySelectorAll('[' + dataCharAttack + ']');
	let dataCharDefenseItems = document.querySelectorAll('[' + dataCharDefense + ']');
	let dataCharCostItems = document.querySelectorAll('[' + dataCharCost + ']');
	let dataCharMaxLevelItems = document.querySelectorAll('[' + dataCharMaxLevel + ']');
	let dataCharSuperAtkLevelItems = document.querySelectorAll('[' + dataCharSuperAtkLevel + ']');
	let dataCharReleaseItems = document.querySelectorAll('[' + dataCharRelease + ']');
	let dataCharSuperAtkTypeItems = document.querySelectorAll('[' + dataCharSuperAtkType + ']');
	let dataCharLinksItems = document.querySelectorAll('[' + dataCharLinks + ']');
	let dataCharCategoriesItems = document.querySelectorAll('[' + dataCharCategories + ']');

	let char = document.getElementsByClassName("char");
	let charDivClass = document.getElementsByClassName("char-div-class");
	let char_display = document.getElementsByClassName("char_display");
	let char_type_base = document.getElementsByClassName("char_type_base");
	let char_thumb = document.getElementsByClassName("char_thumb");
	let char_rarity = document.getElementsByClassName("char_rarity");
	let char_type = document.getElementsByClassName("char_type");
	let char_eza = document.getElementsByClassName("char_eza");

	let listLinks = [], listCategories = [], listSuperAtkType = [], listRelease = [];
	let listLinksFormattedString = [], listCategoriesFormattedString = [], listSuperAtkTypeFormattedString = [],
		listReleaseFormattedString = [];

	for (let i = 0; i < char_display.length; i++) {
		listLinks[i] = dataCharLinksItems[i].getAttribute(dataCharLinks).split(",");
		listLinksFormattedString[i] = listLinks[i].join("<br/>");

		listSuperAtkType[i] = dataCharSuperAtkTypeItems[i].getAttribute(dataCharSuperAtkType).split(",");
		listSuperAtkTypeFormattedString[i] = listSuperAtkType[i].join("<br/>");

		if (dataCharReleaseItems[i].getAttribute(dataCharRelease).length == 25) {
			let a = dataCharReleaseItems[i].getAttribute(dataCharRelease);
			let b = "After EZA:.";
			let position = 13;
			let temp = [a.slice(0, position), b, a.slice(position)].join('');
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
			char_display.item(i).innerHTML = dataCharHpItems[i].getAttribute(dataCharHp);
		}
	}
	//Attack
	if (filterDisplay == 4) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharAttackItems[i].getAttribute(dataCharAttack);
		}
	}
	//Defense
	if (filterDisplay == 5) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharDefenseItems[i].getAttribute(dataCharDefense);
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
	//Super ATK Level
	if (filterDisplay == 9) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharSuperAtkLevelItems[i].getAttribute(dataCharSuperAtkLevel);
		}
	}
	//Super ATK Type
	if (filterDisplay == 10) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = listSuperAtkTypeFormattedString[i];
		}
	}
	//Links
	if (filterDisplay == 11) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = listLinksFormattedString[i];
		}
	}
	//Categories
	if (filterDisplay == 12) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = listCategoriesFormattedString[i];
		}
	}
}
