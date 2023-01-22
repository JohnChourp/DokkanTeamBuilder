function filtersMultipleUsed(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed) {
	let filters = [], filterCharItems = [], filterChars = [];

	for (j = 0; j < filtersEachLengthStringUsed.length; j++) {
		for (let i = 0; i < filtersEachLengthString.length; i++) {
			if (filtersEachLengthStringUsed[j] == filtersEachLengthString[i]) {
				filters[j] = filtersUsed[i];
				filterCharItems[j] = document.querySelectorAll('[' + dataChars[i] + ']');
				filterChars[j] = dataChars[i];
			}
		}
	}
	let charListAll = create2DimensionalArray(filtersEachLengthStringUsed.length, 1);
	let char = document.getElementsByClassName("char");

	let filterCharItemsTemp = [], filterCharItems2 = [];
	for (k = 0; k < filtersEachLengthStringUsed.length; k++) {
		if (filtersUsed[5].length > 0) {
			for (let i = 0; i < filterCharItems[k].length; i++) {
				filterCharItemsTemp[i] = filterCharItems[k][i].getAttribute(filterChars[k]).split(",");
				filterCharItems2[i] = filterCharItemsTemp[i][1];
			}
		}

		if (k == 0) {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < char.length; i++) {
					if ((filterCharItems2[i] == filters[k][j]) || (filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j])) {
						charListAll[0][i] = char.item(i);
					}
				}
			}
		} else {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < charListAll[k - 1].length; i++) {
					if (charListAll[k - 1][i] != undefined) {
						if ((filterCharItems2[i] == filters[k][j]) || (filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j])) {
							charListAll[k][i] = char.item(i);
						}
					}
				}
			}
		}
	}

	return charListAll[filtersEachLengthStringUsed.length - 1];
}

function create2DimensionalArray(rows, columns) {
	return Array.from(Array(rows), () => new Array(columns));
}

function applyFilters() {
	setCharList();
	//sortDirection
	let char_container_id = document.getElementById("char-container-id");
	let char = document.getElementsByClassName("char");
	let checkedDirectionBtn = document.getElementsByClassName("checkedDirectionBtn");
	if (checkedDirectionBtn.length == 1) {
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		let charLength = char.length;
		char_container_id.innerHTML = "";
		for (let i = charLength - 1; i > -1; i--) {
			char_container_id.appendChild(temp_char[i]);
		}
	}

	//select one char
	let searchOneCharDropdownValue = document.getElementsByClassName("search-one-char-dropdown-options-value");
	for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
		if (searchOneCharDropdownValue.item(i).classList.contains("checkedSearchOneCharBtn")) {
			addSearchOneCharDropdownClass(i);
		}
	}

	let dataCharType = 'data-char-type', dataCharRarity = 'data-char-rarity', dataCharClass = 'data-char-class',
		dataCharEza = 'data-char-eza', dataCharAwaken = 'data-char-awaken', dataCharSuperAtkType = 'data-char-super-atk-type';
	let dataChars = [dataCharType, dataCharRarity, dataCharClass, dataCharEza, dataCharAwaken, dataCharSuperAtkType];
	let filterType = [], filterRarity = [], filterClass = [], filterEza = [], filterAwakenId = [], filterSuperAttackTypeId = [];

	let filterTypeTemp = ["agl", "teq", "int", "str", "phy"];
	let filterTypeLength = filterTypeTemp.length;
	for (let i = 0; i < filterTypeLength; i++) {
		if (document.getElementById(filterTypeTemp[i]).classList.contains("checkedTypeBtn")) {
			filterType[i] = filterTypeTemp[i];
		}
	}
	filterType.clean(undefined);

	let filterRarityTemp = ["n", "r", "sr", "ssr", "ur", "lr"];
	let filterRarityLength = filterRarityTemp.length;
	for (let i = 0; i < filterRarityLength; i++) {
		if (document.getElementById(filterRarityTemp[i]).classList.contains("checkedRarityBtn")) {
			filterRarity[i] = filterRarityTemp[i];
		}
	}
	filterRarity.clean(undefined);

	let filterClassTemp = ["super", "extreme"];
	let filterClassLength = filterClassTemp.length;
	for (let i = 0; i < filterClassLength; i++) {
		if (document.getElementById(filterClassTemp[i]).classList.contains("checkedClassBtn")) {
			filterClass[i] = filterClassTemp[i];
		}
	}
	filterClass.clean(undefined);

	let filterEzaTemp = ["eza", "noeza"];
	let filterEzaLength = filterEzaTemp.length;
	for (let i = 0; i < filterEzaLength; i++) {
		if (document.getElementById(filterEzaTemp[i]).classList.contains("checkedEzaBtn")) {
			filterEza[i] = filterEzaTemp[i];
		}
	}
	filterEza.clean(undefined);

	let filterAwakenIdTemp = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"];
	for (let i = 0; i < filterAwakenIdTemp.length; i++) {
		if (document.getElementById(filterAwakenIdTemp[i]).classList.contains("checkedAwakenBtn")) {
			filterAwakenId[i] = filterAwakenIdTemp[i];
		}
	}
	filterAwakenId.clean(undefined);

	let filterSuperAttackTypeIdTemp = ["ki-blast", "unarmed", "physical", "other"];
	let filterSuperAttackTypeIdValueTemp = ["Ki Blast", "Unarmed", "Physical", "Other"];
	for (let i = 0; i < filterSuperAttackTypeIdTemp.length; i++) {
		if (document.getElementById(filterSuperAttackTypeIdTemp[i]).classList.contains("checkedSuperAttackTypeBtn")) {
			filterSuperAttackTypeId[i] = filterSuperAttackTypeIdValueTemp[i];
		}
	}
	filterSuperAttackTypeId.clean(undefined);

	let filtersUsed = [filterType, filterRarity, filterClass, filterEza, filterAwakenId, filterSuperAttackTypeId];
	let A = document.getElementsByClassName("checkedTypeBtn").length;
	let B = document.getElementsByClassName("checkedRarityBtn").length;
	let C = document.getElementsByClassName("checkedClassBtn").length;
	let D = document.getElementsByClassName("checkedEzaBtn").length;
	let E = document.getElementsByClassName("checkedAwakenBtn").length;
	let F = document.getElementsByClassName("checkedSuperAttackTypeBtn").length;
	let filtersEachLength = [A, B, C, D, E, F];
	let filtersEachLengthString = ["A", "B", "C", "D", "E", "F"];
	let filtersEachLengthStringUsed = [];
	let charListDefault = [];
	let sumFilterUsed = 0;

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
	filtersEachLengthStringUsed.clean(undefined);

	if (sumFilterUsed == 0) {
		for (let i = 0; i < char.length; i++) {
			charListDefault[i] = char.item(i);
		}
	}
	if (sumFilterUsed > 0) {
		charListDefault = filtersMultipleUsed(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed);
	}

	charListDefault.clean(undefined);
	createFilterPagination(charListDefault, localStorage.getItem("charsPerPageNumItem"));

	let characterSearchId = document.getElementById("char-search-id");
	if (characterSearchId.value.length > 0) {
		characterSearchId.value = "";
	}
	addDropdownClass(localStorage.getItem("filterDisplay"));
}