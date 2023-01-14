function removeDuplicates(arr) {
	return arr.filter((item,
		index) => arr.indexOf(item) === index);
}

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function searchOneCharOptions() {
	document.getElementsByClassName("search-one-char-dropdown-options").item(0).classList.toggle("showOneCharName");
	//add class when clicked
}

function addAllCharNames() {
	// Close the dropdown menu if the user clicks outside of it
	document.addEventListener('click', function (event) {
		if (!event.target.matches('#search-one-char-selected-dropdown')) {
			var dropdowns = document.getElementsByClassName("search-one-char-dropdown-options");
			for (let i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('showOneCharName')) {
					openDropdown.classList.remove('showOneCharName');
				}
			}
		}
	});
	let CharListDiv = document.getElementsByClassName("search-one-char-dropdown-options").item(0);
	let charList_dataCharNameItems = JSON.parse(localStorage.getItem('charList_dataCharNameItems'));
	let SortedFormattedcharList = removeDuplicates(charList_dataCharNameItems).sort();
	for (let i = 0; i < SortedFormattedcharList.length; i++) {
		let charName = document.createElement("a");
		charName.classList.add("search-one-char-dropdown-options-value");
		charName.href = "#";
		charName.innerHTML = SortedFormattedcharList[i];
		charName.onclick = function () { addSearchOneCharDropdownClass(i) };
		CharListDiv.appendChild(charName);
	}
}

function addSearchOneCharDropdownClass(charNamePos) {
	let searchOneCharDropdown_btn = document.getElementById("search-one-char-selected-dropdown");
	let searchOneCharDropdownValue = document.getElementsByClassName("search-one-char-dropdown-options-value");
	let selectedCharName = searchOneCharDropdownValue.item(charNamePos).innerHTML;
	searchOneCharDropdown_btn.innerHTML = searchOneCharDropdownValue.item(charNamePos).innerHTML;
	searchOneCharDropdownValue.item(charNamePos).classList.add("checkedSearchOneCharBtn");

	for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
		if (i != charNamePos) {
			searchOneCharDropdownValue.item(i).classList.remove("checkedSearchOneCharBtn");
		}
	}
	let dataCharName = 'data-char-name';
	let dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
	let char = document.getElementsByClassName("char");
	//disappear all characters
	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "none";
	}
	//appear one type of chosen character
	for (let i = 0; i < char.length; i++) {
		if (dataCharNameItems[i].getAttribute(dataCharName) == selectedCharName) {
			char.item(i).style.display = "inline-block";
		}
	}

	let charListSaved = [];

	//retreive characters from local storage
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

	//put characters in temporary charList
	for (let i = 0; i < charList_dataCharNameItems.length; i++) {
		let char_div = document.createElement("div");
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
	//add all characters
	let char_container = document.getElementById("char_container");
	char_container.innerHTML = "";
	for (let j = 0; j < charListSaved.length; j++) {
		if (charList_dataCharNameItems[j] == selectedCharName) {
			char_container.appendChild(charListSaved[j]);
		}
	}
	addChar();

	createSearchOneCharPagination(localStorage.getItem("charsPerPageNumItem"));
}