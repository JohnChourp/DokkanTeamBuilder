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
	let selecteddropdown_btn = document.getElementsByClassName("selected-dropdown").item(0);
	let dropdownOptionsValue = document.getElementsByClassName("dropdown-options-value");
	dropdownOptionsValue.item(filterDisplay).classList.add("checkedDisplayBtn");
	selecteddropdown_btn.innerHTML = dropdownOptionsValue.item(filterDisplay).innerHTML;
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
	let char_type_base = document.getElementsByClassName("char_type_base");
	let char_thumb = document.getElementsByClassName("char_thumb");
	let char_rarity = document.getElementsByClassName("char_rarity");
	let char_type = document.getElementsByClassName("char_type");
	let char_eza = document.getElementsByClassName("char_eza");
	let char_display = document.getElementsByClassName("char_display");
	let listLinks = [], listCategories = [], listSuperAtkType = [];
	let listLinksFormattedString = [], listCategoriesFormattedString = [], listSuperAtkTypeFormattedString = [];

	for (let i = 0; i < char_display.length; i++) {
		listLinks[i] = dataCharLinksItems[i].getAttribute(dataCharLinks).split(",");
		listLinksFormattedString[i] = listLinks[i].join("<br/>");
		listSuperAtkType[i] = dataCharSuperAtkTypeItems[i].getAttribute(dataCharSuperAtkType).split(",");
		listSuperAtkTypeFormattedString[i] = listSuperAtkType[i].join("<br/>");
	}
	for (let i = 0; i < dataCharCategoriesItems.length; i++) {
		listCategories[i] = dataCharCategoriesItems[i].getAttribute(dataCharCategories).split(",");
		listCategoriesFormattedString[i] = listCategories[i].join("<br/>");
	}

	if ((filterDisplay > -1) && (filterDisplay < 10)) {
		for (let i = 0; i < char_display.length; i++) {
			char.item(i).style.width = "140px";
			char.item(i).style.height = "230px";

			char_type_base.item(i).style.top = "35px";
			char_type_base.item(i).style.left = "25px";

			char_thumb.item(i).style.top = "-85px";
			char_thumb.item(i).style.left = "13px";

			char_rarity.item(i).style.top = "-144px";
			char_rarity.item(i).style.left = "13px";

			char_type.item(i).style.top = "-225px";
			char_type.item(i).style.left = "23px";

			char_display.item(i).style.top = "-150px";
			char_display.item(i).style.width = "120px";
			char_display.item(i).style.height = "75px";
		}
		for (let i = 0; i < char_eza.length; i++) {
			char_eza.item(i).style.top = "-165px";
			char_eza.item(i).style.left = "-13px";
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
			char_display.item(i).innerHTML = dataCharReleaseItems[i].getAttribute(dataCharRelease);
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
			char.item(i).style.width = "170px";
			char.item(i).style.height = "230px";

			char_type_base.item(i).style.top = "35px";
			char_type_base.item(i).style.left = "40px";

			char_thumb.item(i).style.top = "-86px";
			char_thumb.item(i).style.left = "28px";

			char_rarity.item(i).style.top = "-145px";
			char_rarity.item(i).style.left = "26px";

			char_type.item(i).style.top = "-231px";
			char_type.item(i).style.left = "47px";

			char_display.item(i).style.top = "-149px";
			char_display.item(i).style.width = "150px";
			char_display.item(i).style.height = "74px";

			char_display.item(i).innerHTML = listSuperAtkTypeFormattedString[i];
		}
		for (let i = 0; i < char_eza.length; i++) {
			char_eza.item(i).style.top = "-165px";
			char_eza.item(i).style.left = "1px";
		}
	}
	//Links
	if (filterDisplay == 11) {
		for (let i = 0; i < char_display.length; i++) {
			char.item(i).style.width = "270px";
			char.item(i).style.height = "280px";

			char_type_base.item(i).style.top = "10px";
			char_type_base.item(i).style.left = "95px";

			char_thumb.item(i).style.top = "18px";
			char_thumb.item(i).style.left = "-18px";

			char_rarity.item(i).style.top = "-40px";
			char_rarity.item(i).style.left = "83px";

			char_type.item(i).style.top = "-129px";
			char_type.item(i).style.left = "103px";

			char_display.item(i).style.top = "-45px";
			char_display.item(i).style.width = "250px";
			char_display.item(i).style.height = "130px";

			char_display.item(i).innerHTML = listLinksFormattedString[i];
		}
		for (let i = 0; i < char_eza.length; i++) {
			char_eza.item(i).style.top = "-60px";
			char_eza.item(i).style.left = "55px";
		}
	}
	//Categories
	if (filterDisplay == 12) {
		for (let i = 0; i < char_display.length; i++) {
			char.item(i).style.width = "270px";
			char.item(i).style.height = "460px";

			char_type_base.item(i).style.top = "10px";
			char_type_base.item(i).style.left = "95px";

			char_thumb.item(i).style.top = "18px";
			char_thumb.item(i).style.left = "-18px";

			char_rarity.item(i).style.top = "-40px";
			char_rarity.item(i).style.left = "83px";

			char_type.item(i).style.top = "-129px";
			char_type.item(i).style.left = "103px";

			char_display.item(i).style.top = "-45px";
			char_display.item(i).style.width = "250px";
			char_display.item(i).style.height = "306px";

			char_display.item(i).innerHTML = listCategoriesFormattedString[i];
		}
		for (let i = 0; i < char_eza.length; i++) {
			char_eza.item(i).style.top = "-60px";
			char_eza.item(i).style.left = "55px";
		}
	}
}
