function removeDuplicates(arr) {
	return arr.filter((item,
		index) => arr.indexOf(item) === index);
}

function searchOneCharOptions() {
	document.getElementsByClassName("search-one-char-dropdown-options").item(0).classList.toggle("showOneCharName");
	if (document.getElementsByClassName("search-one-char-dropdown-options").item(0).classList.contains("showOneCharName")) {
		document.getElementById("search-one-char-menu-id").style.display = "block";
	} else {
		document.getElementById("search-one-char-menu-id").style.display = "none";
	}
}

function addAllCharNames() {
	let charListDiv, charList_dataCharNameItems, SortedFormattedcharList, charName, dropdowns;

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

	charListDiv = document.getElementsByClassName("search-one-char-dropdown-options").item(0);
	charList_dataCharNameItems = JSON.parse(localStorage.getItem('charList_dataCharNameItems'));
	SortedFormattedcharList = removeDuplicates(charList_dataCharNameItems).sort();
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
	let tempPos2 = selectedCharName.indexOf("&", tempPos+1);
	let charList=[],charListSaved = [], char_div, temp, temp2;

	let charList_dataCharNameItems = JSON.parse(localStorage.getItem('charList_dataCharNameItems'));
	let charList_dataCharTitleItems = JSON.parse(localStorage.getItem('charList_dataCharTitleItems'));
	let charList_dataCharTypeItems = JSON.parse(localStorage.getItem('charList_dataCharTypeItems'));
	let charList_dataCharRarityItems = JSON.parse(localStorage.getItem('charList_dataCharRarityItems'));
	let charList_dataCharClassItems = JSON.parse(localStorage.getItem('charList_dataCharClassItems'));
	let charList_dataCharEzaItems = JSON.parse(localStorage.getItem('charList_dataCharEzaItems'));
	let charList_dataCharidItems = JSON.parse(localStorage.getItem('charList_dataCharidItems'));
	let charList_dataCharHpItems = JSON.parse(localStorage.getItem('charList_dataCharHpItems'));
	let charList_dataCharAttackItems = JSON.parse(localStorage.getItem('charList_dataCharAttackItems'));
	let charList_dataCharDefenseItems = JSON.parse(localStorage.getItem('charList_dataCharDefenseItems'));
	let charList_dataCharCostItems = JSON.parse(localStorage.getItem('charList_dataCharCostItems'));
	let charList_dataCharMaxLevelItems = JSON.parse(localStorage.getItem('charList_dataCharMaxLevelItems'));
	let charList_dataCharSuperAtkLevelItems = JSON.parse(localStorage.getItem('charList_dataCharSuperAtkLevelItems'));
	let charList_dataCharRecruitItems = JSON.parse(localStorage.getItem('charList_dataCharRecruitItems'));
	let charList_dataCharAwakenItems = JSON.parse(localStorage.getItem('charList_dataCharAwakenItems'));
	let charList_dataCharReleaseItems = JSON.parse(localStorage.getItem('charList_dataCharReleaseItems'));
	let charList_dataCharSuperAtkTypeItems = JSON.parse(localStorage.getItem('charList_dataCharSuperAtkTypeItems'));
	let charList_dataCharLinksItems = JSON.parse(localStorage.getItem('charList_dataCharLinksItems'));
	let charList_dataCharCategoriesItems = JSON.parse(localStorage.getItem('charList_dataCharCategoriesItems'));

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

	createFilterPagination(charList,localStorage.getItem("charsPerPageNumItem"));
	addDropdownClass(localStorage.getItem("filterDisplay"));
}

function myFunction() {
	let input = document.getElementById("search-one-char-menu-id");
	let filter = input.value.toLowerCase();
	let ui = document.getElementsByClassName("search-one-char-dropdown-options-value");

	for (i = 0; i < ui.length; i++) {
		if (input.value.length > 0) {
			if (ui.item(i).innerHTML.toLowerCase().indexOf(filter) >= 0) {
				ui.item(i).style.display = "block";
			} else {
				ui.item(i).style.display = "none";
			}
		} else {
			ui.item(i).style.display = "block";
		}
	}
}