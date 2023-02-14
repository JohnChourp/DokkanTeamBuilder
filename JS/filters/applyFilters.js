function filtersMultipleUsed(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed) {
	let filters = [],
		filterCharItems = [],
		filterChars = [],
		filterCharItemsTemp = [],
		filterCharItems1 = [],
		filterCharItems2 = [],
		filterCharItems3 = [],
		filterCharItems4 = [];

	let charListAll = create2DimensionalArray(filtersEachLengthStringUsed.length, 1);
	let char = document.getElementsByClassName("char");

	for (j = 0; j < filtersEachLengthStringUsed.length; j++) {
		for (let i = 0; i < filtersEachLengthString.length; i++) {
			if (filtersEachLengthStringUsed[j] == filtersEachLengthString[i]) {
				filters[j] = filtersUsed[i];
				filterCharItems[j] = document.querySelectorAll('[' + dataChars[i] + ']');
				filterChars[j] = dataChars[i];
			}
		}
	}

	for (k = 0; k < filtersEachLengthStringUsed.length; k++) {
		if (filtersUsed[5].length > 0) {
			for (let i = 0; i < filterCharItems[k].length; i++) {
				filterCharItemsTemp[i] = filterCharItems[k][i].getAttribute(filterChars[k]).split(",");
				filterCharItems1[i] = filterCharItemsTemp[i][1];
				filterCharItems2[i] = filterCharItemsTemp[i][3];
				filterCharItems3[i] = filterCharItemsTemp[i][5];
				filterCharItems4[i] = filterCharItemsTemp[i][7];
			}
		}

		if (k == 0) {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < char.length; i++) {
					if ((filterCharItems1[i] == filters[k][j]) || (filterCharItems2[i] == filters[k][j]) || (filterCharItems3[i] == filters[k][j]) || (filterCharItems4[i] == filters[k][j]) || (filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j])) {
						charListAll[0][i] = char.item(i);
					}
				}
			}
		} else {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < charListAll[k - 1].length; i++) {
					if (charListAll[k - 1][i] != undefined) {
						if ((filterCharItems1[i] == filters[k][j]) || (filterCharItems2[i] == filters[k][j]) || (filterCharItems3[i] == filters[k][j]) || (filterCharItems4[i] == filters[k][j]) || (filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j])) {
							charListAll[k][i] = char.item(i);
						}
					}
				}
			}
		}
	}

	return charListAll[filtersEachLengthStringUsed.length - 1];
}

function applyFilters(btnPressed) {
	setCharList();
	const characterSearchId = document.getElementById("char-search-id");
	const charContainerId = document.getElementById("char-container-id");
	const char = document.getElementsByClassName("char");
	const checkedDirectionBtn = document.getElementsByClassName("checkedDirectionBtn");
	//let searchOneCharDropdownValue = document.getElementsByClassName("search-one-char-dropdown-options-value");

	const dataCharType = 'data-char-type',
		dataCharRarity = 'data-char-rarity',
		dataCharClass = 'data-char-class',
		dataCharEza = 'data-char-eza',
		dataCharAwaken = 'data-char-awaken',
		dataCharSuperAtkType = 'data-char-super-atk-type',
		dataCharRecruit = 'data-char-recruit';

	const dataChars = [dataCharType,
		dataCharRarity,
		dataCharClass,
		dataCharEza,
		dataCharAwaken,
		dataCharSuperAtkType,
		dataCharRecruit];

	let filterType = [],
		filterRarity = [],
		filterClass = [],
		filterEza = [],
		filterAwakenId = [],
		filterSuperAttackTypeId = [],
		filterRecruitId = [];

	const filterTypeTemp = ["agl", "teq", "int", "str", "phy"],
		filterRarityTemp = ["n", "r", "sr", "ssr", "ur", "lr"],
		filterClassTemp = ["super", "extreme"],
		filterEzaTemp = ["eza", "noeza"],
		filterAwakenIdTemp = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"],
		filterSuperAttackTypeIdTemp = ["ki-blast", "unarmed", "physical", "other"],
		filterRecruitIdTemp = ["summonable", "free-to-play"];

	const A = document.getElementsByClassName("checkedTypeBtn").length;
	const B = document.getElementsByClassName("checkedRarityBtn").length;
	const C = document.getElementsByClassName("checkedClassBtn").length;
	const D = document.getElementsByClassName("checkedEzaBtn").length;
	const E = document.getElementsByClassName("checkedAwakenBtn").length;
	const F = document.getElementsByClassName("checkedSuperAttackTypeBtn").length;
	const G = document.getElementsByClassName("checkedRecruitBtn").length;

	const filtersEachLength = [A, B, C, D, E, F, G], 
	filtersEachLengthString = ["A", "B", "C", "D", "E", "F", "G"];

	let filtersEachLengthStringUsed = [],
		charListDefault = [],
		filtersUsed = [],
		sumFilterUsed = 0;

	//sortDirection
	if (checkedDirectionBtn.length == 1) {
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		for (let i = charLength - 1; i > -1; i--) {
			charContainerId.appendChild(temp_char[i]);
		}
	}

	// //select one char
	// let addSearchOneCharDropdownClassChecked = 0;
	// for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
	// 	if (searchOneCharDropdownValue.item(i).classList.contains("checkedSearchOneCharBtn")) {
	// 		addSearchOneCharDropdownClass(i);
	// 		addSearchOneCharDropdownClassChecked = 1;
	// 	}
	// }
	if (btnPressed == 1) {
		addChar(localStorage.getItem("charsPerPageNumItem"));
	}
	// if (addSearchOneCharDropdownClassChecked == 1) {
	// 	console.log("a");
	// 	addChar(1);
	// }
	for (let i = 0; i < filterTypeTemp.length; i++) {
		if (document.getElementById(filterTypeTemp[i]).classList.contains("checkedTypeBtn")) {
			filterType[i] = filterTypeTemp[i];
		}
	}
	filterType = cleanArray(filterType, undefined);

	for (let i = 0; i < filterRarityTemp.length; i++) {
		if (document.getElementById(filterRarityTemp[i]).classList.contains("checkedRarityBtn")) {
			filterRarity[i] = filterRarityTemp[i];
		}
	}
	filterRarity = cleanArray(filterRarity, undefined);

	for (let i = 0; i < filterClassTemp.length; i++) {
		if (document.getElementById(filterClassTemp[i]).classList.contains("checkedClassBtn")) {
			filterClass[i] = filterClassTemp[i];
		}
	}
	filterClass = cleanArray(filterClass, undefined);

	for (let i = 0; i < filterEzaTemp.length; i++) {
		if (document.getElementById(filterEzaTemp[i]).classList.contains("checkedEzaBtn")) {
			filterEza[i] = filterEzaTemp[i];
		}
	}
	filterEza = cleanArray(filterEza, undefined);
	for (let i = 0; i < filterAwakenIdTemp.length; i++) {
		if (document.getElementById(filterAwakenIdTemp[i]).classList.contains("checkedAwakenBtn")) {
			filterAwakenId[i] = filterAwakenIdTemp[i];
		}
	}
	filterAwakenId = cleanArray(filterAwakenId, undefined);
	for (let i = 0; i < filterSuperAttackTypeIdTemp.length; i++) {
		if (document.getElementById(filterSuperAttackTypeIdTemp[i]).classList.contains("checkedSuperAttackTypeBtn")) {
			filterSuperAttackTypeId[i] = filterSuperAttackTypeIdTemp[i];
		}
	}
	filterSuperAttackTypeId = cleanArray(filterSuperAttackTypeId, undefined);

	for (let i = 0; i < filterRecruitIdTemp.length; i++) {
		if (document.getElementById(filterRecruitIdTemp[i]).classList.contains("checkedRecruitBtn")) {
			filterRecruitId[i] = filterRecruitIdTemp[i];
		}
	}
	filterRecruitId = cleanArray(filterRecruitId, undefined);
	filtersUsed = [filterType, filterRarity, filterClass, filterEza, filterAwakenId, filterSuperAttackTypeId, filterRecruitId];

	//check how many filter are used
	for (let i = 0; i < filtersUsed.length; i++) {
		if (filtersUsed[i].length > 0) {
			sumFilterUsed = sumFilterUsed + 1;
		}
	}
	for (let i = 0; i < filtersEachLength.length; i++) {
		if (filtersEachLength[i] > 0) {
			filtersEachLengthStringUsed[i] = filtersEachLengthString[i];
		}
	}
	filtersEachLengthStringUsed = cleanArray(filtersEachLengthStringUsed, undefined);

	if (sumFilterUsed == 0) {
		for (let i = 0; i < char.length; i++) {
			charListDefault[i] = char.item(i);
		}
	}
	if (sumFilterUsed > 0) {
		charListDefault = filtersMultipleUsed(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed);
	}
	charListDefault = cleanArray(charListDefault, undefined);

	//------------------charperpage------------------

	if (btnPressed == 1) {
		createFilterPagination(charListDefault, localStorage.getItem("charsPerPageNumItem"));
	}
	if (btnPressed == 2) {
		createFilterPagination2(charListDefault, localStorage.getItem("charsPerPageNumItem"));
	}

	let charactersPerInputPageId = document.getElementById("characters-per-input-page-id");
	charactersPerInputPageId.value = localStorage.getItem("charsPerPageNumItem");

	let charsPerPage_class = document.getElementsByClassName("charsPerPage");
	for (let i = 0; i < charsPerPage_class.length; i++) {
		charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
	}

	switch (charactersPerInputPageId.value) {
		case "16":
			charsPerPage_class.item(0).classList.add("checkedCharsPerPageBtn");
			break;
		case "32":
			charsPerPage_class.item(1).classList.add("checkedCharsPerPageBtn");
			break;
		case "64":
			charsPerPage_class.item(2).classList.add("checkedCharsPerPageBtn");
			break;
		case "128":
			charsPerPage_class.item(3).classList.add("checkedCharsPerPageBtn");
			break;
		case "256":
			charsPerPage_class.item(4).classList.add("checkedCharsPerPageBtn");
			break;
		default:
			break;
	}
	//------------------charperpage------------------

	if (characterSearchId.value.length > 0) {
		characterSearchId.value = "";
	}
	addDropdownClass(localStorage.getItem("filterDisplay"));
}
