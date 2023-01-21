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
	if ((filterDisplay > -1) && (filterDisplay < 10)) {
		for (let i = 0; i < char_display.length; i++) {
			char.item(i).style.width = "142px";
			charDivClass.item(i).style.width = "135px";

			char_type_base.item(i).style.left = "17px";
			char_thumb.item(i).style.left = "5px";
			char_rarity.item(i).style.left = "5px";
			char_rarity.item(i).style.top = "-142px";
			char_type.item(i).style.left = "26px";
			char_type.item(i).style.top = "-230px";
			for (let i = 0; i < char_eza.length; i++) {
				char_eza.item(i).style.left = "-23px";
				char_eza.item(i).style.top = "-162px";
			}
			char_display.item(i).style.width = "127px";
			char_display.item(i).style.display = "table-cell";
		}
	}
	if (filterDisplay == 0) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharNameItems[i].getAttribute(dataCharName);
		}
	}
	if (filterDisplay == 1) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharTitleItems[i].getAttribute(dataCharTitle);
		}
	}
	if (filterDisplay == 2) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharIdItems[i].getAttribute(dataCharId);
		}
	}
	if (filterDisplay == 3) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharHpItems[i].getAttribute(dataCharHp);
		}
	}
	if (filterDisplay == 4) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharAttackItems[i].getAttribute(dataCharAttack);
		}
	}
	if (filterDisplay == 5) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharDefenseItems[i].getAttribute(dataCharDefense);
		}
	}
	if (filterDisplay == 6) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharCostItems[i].getAttribute(dataCharCost);
		}
	}
	if (filterDisplay == 7) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharMaxLevelItems[i].getAttribute(dataCharMaxLevel);
		}
	}
	if (filterDisplay == 8) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = listReleaseFormattedString[i];
		}
	}
	if (filterDisplay == 9) {
		for (let i = 0; i < char_display.length; i++) {
			char_display.item(i).innerHTML = dataCharSuperAtkLevelItems[i].getAttribute(dataCharSuperAtkLevel);
		}
	}
	//Super ATK Type
	if (filterDisplay == 10) {
		for (let i = 0; i < char_display.length; i++) {
			char.item(i).style.width = "165px";
			charDivClass.item(i).style.width = "158px";

			char_type_base.item(i).style.left = "30px";
			char_thumb.item(i).style.left = "18px";
			char_rarity.item(i).style.left = "18px";
			char_rarity.item(i).style.top = "-142px";
			char_type.item(i).style.left = "39px";
			char_type.item(i).style.top = "-230px";
			for (let i = 0; i < char_eza.length; i++) {
				char_eza.item(i).style.left = "-10px";
				char_eza.item(i).style.top = "-162px";
			}
			char_display.item(i).style.width = "150px";
			char_display.item(i).style.display = "table-cell";
			char_display.item(i).innerHTML = listSuperAtkTypeFormattedString[i];
		}
	}
	//Links
	if (filterDisplay == 11) {
		for (let i = 0; i < char_display.length; i++) {
			char.item(i).style.width = "215px";
			charDivClass.item(i).style.width = "208px";

			char_type_base.item(i).style.left = "50px";
			char_thumb.item(i).style.left = "38px";
			char_rarity.item(i).style.left = "-90px";
			char_rarity.item(i).style.top = "-78px";
			char_type.item(i).style.left = "120px";
			char_type.item(i).style.top = "-220px";

			for (let i = 0; i < char_eza.length; i++) {
				char_eza.item(i).style.left = "69px";
				char_eza.item(i).style.top = "-152px";
			}
			char_display.item(i).style.width = "200px";
			char_display.item(i).style.display = "block";
			char_display.item(i).innerHTML = listLinksFormattedString[i];
		}
	}
	//Categories
	if (filterDisplay == 12) {
		for (let i = 0; i < char_display.length; i++) {
			char.item(i).style.width = "215px";
			charDivClass.item(i).style.width = "208px";

			char_type_base.item(i).style.left = "50px";
			char_thumb.item(i).style.left = "38px";
			char_rarity.item(i).style.left = "-90px";
			char_rarity.item(i).style.top = "-78px";
			char_type.item(i).style.left = "120px";
			char_type.item(i).style.top = "-220px";
			for (let i = 0; i < char_eza.length; i++) {
				char_eza.item(i).style.left = "69px";
				char_eza.item(i).style.top = "-152px";
			}
			char_display.item(i).style.width = "200px";
			char_display.item(i).style.display = "block";
			char_display.item(i).innerHTML = listCategoriesFormattedString[i];
		}
	}
}
