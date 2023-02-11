function searchOneCharOptions() {
	document.getElementsByClassName("search-one-char-dropdown-options").item(0).classList.toggle("showOneCharName");
	if (document.getElementsByClassName("search-one-char-dropdown-options").item(0).classList.contains("showOneCharName")) {
		document.getElementById("search-one-char-menu-id").style.display = "block";
	} else {
		document.getElementById("search-one-char-menu-id").style.display = "none";
	}
}

function addAllCharNames() {
	let dropdowns;
	document.addEventListener('click', function (event) {
		if (!event.target.matches('#search-one-char-selected-dropdown') && !event.target.matches('#search-one-char-menu-id')) {
			dropdowns = document.getElementsByClassName("search-one-char-dropdown-options");
			for (let i = 0; i < dropdowns.length; i++) {
				if (dropdowns[i].classList.contains('showOneCharName')) {
					dropdowns[i].classList.remove('showOneCharName');
					document.getElementById("search-one-char-menu-id").style.display = "none";
				}
			}
		}
	});

	let charListDiv = document.getElementsByClassName("search-one-char-dropdown-options").item(0);
	let charList = JSON.parse(localStorage.getItem("charList"));
	let charList_dataCharNameItems = charList.map(char => char.name);
	let SortedFormattedcharList = removeDuplicates(charList_dataCharNameItems).sort();
	let charName;
	for (let i = 0; i < SortedFormattedcharList.length; i++) {
		charName = document.createElement("a");
		charName.classList.add("search-one-char-dropdown-options-value");
		charName.href = "#";
		charName.innerHTML = SortedFormattedcharList[i];
		charName.onclick = function () { addSearchOneCharDropdownClass(i) };
		charListDiv.appendChild(charName);
	}
}

function addSearchOneCharDropdownClass(charNamePos) {
	let searchOneCharDropdown_btn = document.getElementById("search-one-char-selected-dropdown");
	let searchOneCharDropdownValue = document.getElementsByClassName("search-one-char-dropdown-options-value");
	let char_container_id = document.getElementById("char-container-id");
	let char = document.getElementsByClassName("char");

	let selectedCharName = searchOneCharDropdownValue.item(charNamePos).innerHTML;
	let tempPos = selectedCharName.indexOf("&");
	let tempPos2 = selectedCharName.indexOf("&", tempPos + 1);
	let charList = [], charListSaved = [], char_div, temp, temp2;
	let charListLocalStorage = JSON.parse(localStorage.getItem("charList"));
	let charList_dataCharNameItems = charListLocalStorage.map(char => char.name);
	let charList_dataCharTitleItems = charListLocalStorage.map(char => char.title);
	let charList_dataCharTypeItems = charListLocalStorage.map(char => char.type);
	let charList_dataCharRarityItems = charListLocalStorage.map(char => char.rarity);
	let charList_dataCharClassItems = charListLocalStorage.map(char => char.class);
	let charList_dataCharEzaItems = charListLocalStorage.map(char => char.eza);
	let charList_dataCharidItems = charListLocalStorage.map(char => char.id);
	let charList_dataCharHpItems = charListLocalStorage.map(char => char.hp);
	let charList_dataCharAttackItems = charListLocalStorage.map(char => char.attack);
	let charList_dataCharDefenseItems = charListLocalStorage.map(char => char.defense);
	let charList_dataCharCostItems = charListLocalStorage.map(char => char.cost);
	let charList_dataCharMaxLevelItems = charListLocalStorage.map(char => char.maxLevel);
	let charList_dataCharSuperAtkLevelItems = charListLocalStorage.map(char => char.superAtkLevel);
	let charList_dataCharRecruitItems = charListLocalStorage.map(char => char.recruit);
	let charList_dataCharAwakenItems = charListLocalStorage.map(char => char.awaken);
	let charList_dataCharReleaseItems = charListLocalStorage.map(char => char.release);
	let charList_dataCharSuperAtkTypeItems = charListLocalStorage.map(char => char.superAtkType);
	let charList_dataCharLinksItems = charListLocalStorage.map(char => char.links);
	let charList_dataCharCategoriesItems  = charListLocalStorage.map(char => char.categories);

	searchOneCharDropdown_btn.innerHTML = searchOneCharDropdownValue.item(charNamePos).innerHTML;
	searchOneCharDropdownValue.item(charNamePos).classList.add("checkedSearchOneCharBtn");

	for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
		if (i != charNamePos) {
			searchOneCharDropdownValue.item(i).classList.remove("checkedSearchOneCharBtn");
		}
	}

	for (let i = 0; i < charList_dataCharNameItems.length; i++) {
		char_div = document.createElement("div");
		char_div.classList.add("char");
		setAttributes(char_div,
			"data-char-name", charList_dataCharNameItems[i],
			"data-char-title", charList_dataCharTitleItems[i],
			"data-char-type", charList_dataCharTypeItems[i],
			"data-char-rarity", charList_dataCharRarityItems[i],
			"data-char-class", charList_dataCharClassItems[i],
			"data-char-eza", charList_dataCharEzaItems[i],
			"data-char-id", charList_dataCharidItems[i],
			"data-char-hp", charList_dataCharHpItems[i],
			"data-char-attack", charList_dataCharAttackItems[i],
			"data-char-defense", charList_dataCharDefenseItems[i],
			"data-char-cost", charList_dataCharCostItems[i],
			"data-char-max-level", charList_dataCharMaxLevelItems[i],
			"data-char-super-atk-level", charList_dataCharSuperAtkLevelItems[i],
			"data-char-recruit", charList_dataCharRecruitItems[i],
			"data-char-awaken", charList_dataCharAwakenItems[i],
			"data-char-release", charList_dataCharReleaseItems[i],
			"data-char-super-atk-type", charList_dataCharSuperAtkTypeItems[i],
			"data-char-links", charList_dataCharLinksItems[i],
			"data-char-categories", charList_dataCharCategoriesItems[i]);
		charListSaved[i] = char_div;
	}

	char_container_id.innerHTML = "";

	if (tempPos2 == -1) {
		if (tempPos == -1) {
			for (let j = 0; j < charListSaved.length; j++) {
				temp = charList_dataCharNameItems[j];
				if (temp == selectedCharName) {
					char_container_id.appendChild(charListSaved[j]);
				}
			}
		} else {
			for (let j = 0; j < charListSaved.length; j++) {
				temp = charList_dataCharNameItems[j];
				temp = temp.split('');
				temp[tempPos] = '&amp;';
				temp = temp.join('');

				if (temp == selectedCharName) {
					char_container_id.appendChild(charListSaved[j]);
				}
			}
		}
	} else {

		for (let j = 0; j < charListSaved.length; j++) {
			temp = charList_dataCharNameItems[j];
			temp = temp.split('');
			temp[tempPos] = '&amp;';
			temp = temp.join('');

			temp2 = temp;
			temp2 = temp2.split('');
			temp2[tempPos2] = '&amp;';
			temp2 = temp2.join('');

			if (temp2 == selectedCharName) {
				char_container_id.appendChild(charListSaved[j]);
			}
		}
	}

	addChar();

	for (let i = 0; i < char.length; i++) {
		charList[i] = char.item(i);
	}

	createFilterPagination(charList, localStorage.getItem("charsPerPageNumItem"));
	addDropdownClass(localStorage.getItem("filterDisplay"));
}

function selectedCharName() {
	const input = document.getElementById("search-one-char-menu-id");
	const filter = input.value.toLowerCase();
	const ui = document.getElementsByClassName("search-one-char-dropdown-options-value");
	const uiArray = Array.from(ui);

	uiArray.forEach(function (el) {
		if (input.value.length > 0) {
			if (el.textContent.toLowerCase().indexOf(filter) >= 0) {
				el.style.display = "block";
			} else {
				el.style.display = "none";
			}
		} else {
			el.style.display = "block";
		}
	});
}


