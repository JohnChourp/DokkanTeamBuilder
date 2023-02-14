function filtersMultipleUsedWithSearchChar(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed, dataCharNameOrTitleItems, dataCharNameOrTitle, characterSearchId) {
	let filters = [],
		filterCharItems = [],
		filterChars = [],
		filterCharItemsTemp = [],
		filterCharItems1 = [],
		filterCharItems2 = [],
		filterCharItems3 = [],
		filterCharItems4 = [];

	const char = document.getElementsByClassName("char");
	let charListAll = create2DimensionalArray(filtersEachLengthStringUsed.length, 1);

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
					if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& ((filterCharItems1[i] == filters[k][j]) || (filterCharItems2[i] == filters[k][j]) || (filterCharItems3[i] == filters[k][j]) || (filterCharItems4[i] == filters[k][j]) || (filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j]))) {
						charListAll[0][i] = char.item(i);
					}
				}
			}
		} else {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < charListAll[k - 1].length; i++) {
					if (charListAll[k - 1][i] != undefined) {
						if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& ((filterCharItems1[i] == filters[k][j]) || (filterCharItems2[i] == filters[k][j]) || (filterCharItems3[i] == filters[k][j]) || (filterCharItems4[i] == filters[k][j]) || (filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j]))) {
							charListAll[k][i] = char.item(i);
						}
					}
				}
			}
		}
	}
	return charListAll[filtersEachLengthStringUsed.length - 1];
}

function searchChar(btnPressed) {
	const characterSearchId = document.getElementById("char-search-id");
	characterSearchId.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			setCharList();
			if (btnPressed == 2) {
				addChar(localStorage.getItem("charsPerPageNumItem"));
			}
			const nameOrTitle = localStorage.getItem("nameOrTitle");
			const characterSearchId = document.getElementById("char-search-id");
			const char_container_id = document.getElementById("char-container-id");
			const char = document.getElementsByClassName("char");
			const checkedDirectionBtn = document.getElementsByClassName("checkedDirectionBtn");

			const charLength = char.length;

			const dataCharTitle = 'data-char-title', dataCharName = 'data-char-name', dataCharType = 'data-char-type', dataCharRarity = 'data-char-rarity', dataCharClass = 'data-char-class',
				dataCharEza = 'data-char-eza', dataCharAwaken = 'data-char-awaken', dataCharSuperAtkType = 'data-char-super-atk-type',
				dataCharRecruit = 'data-char-recruit';

			const dataChars = [dataCharType, dataCharRarity, dataCharClass,
				dataCharEza, dataCharAwaken, dataCharSuperAtkType, dataCharRecruit];

			let filterType = [], filterRarity = [], filterClass = [],
				filterEza = [], filterAwakenId = [], filterSuperAttackTypeId = [],
				filterRecruitId = [];

			const dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
			const dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');


			const filterTypeTemp = ["agl", "teq", "int", "str", "phy"],
				filterRarityTemp = ["n", "r", "sr", "ssr", "ur", "lr"],
				filterClassTemp = ["super", "extreme"],
				filterEzaTemp = ["eza", "noeza"],
				filterAwakenIdTemp = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"],
				filterSuperAttackTypeIdTemp = ["ki-blast", "unarmed", "physical", "other"],
				filterRecruitIdTemp = ["summonable", "free-to-play"],
				filtersEachLengthString = ["A", "B", "C", "D", "E", "F", "G"];

			const A = document.getElementsByClassName("checkedTypeBtn").length;
			const B = document.getElementsByClassName("checkedRarityBtn").length;
			const C = document.getElementsByClassName("checkedClassBtn").length;
			const D = document.getElementsByClassName("checkedEzaBtn").length;
			const E = document.getElementsByClassName("checkedAwakenBtn").length;
			const F = document.getElementsByClassName("checkedSuperAttackTypeBtn").length;
			const G = document.getElementsByClassName("checkedRecruitBtn").length;
			const filtersEachLength = [A, B, C, D, E, F, G];

			if (checkedDirectionBtn.length == 1) {
				let temp_char = [];
				for (let i = 0; i < char.length; i++) {
					temp_char[i] = char.item(i);
				}
				char_container_id.innerHTML = "";
				for (let i = charLength - 1; i > -1; i--) {
					char_container_id.appendChild(temp_char[i]);
				}
			}

			let dataCharNameOrTitleItems = [],
				dataCharNameOrTitle = [];
			if (nameOrTitle == 1) {
				dataCharNameOrTitleItems = dataCharNameItems;
				dataCharNameOrTitle = dataCharName;
			}
			if (nameOrTitle == 2) {
				dataCharNameOrTitleItems = dataCharTitleItems;
				dataCharNameOrTitle = dataCharTitle;
			}

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

			const filtersUsed = [filterType, filterRarity, filterClass, filterEza, filterAwakenId, filterSuperAttackTypeId, filterRecruitId];

			let sumFilterUsed = 0;
			//check how many filter are used
			for (let i = 0; i < filtersUsed.length; i++) {
				if (filtersUsed[i].length > 0) {
					sumFilterUsed = sumFilterUsed + 1;
				}
			}
			let filtersEachLengthStringUsed = [];
			for (let i = 0; i < filtersEachLength.length; i++) {
				if (filtersEachLength[i] > 0) {
					filtersEachLengthStringUsed[i] = filtersEachLengthString[i];
				}
			}
			filtersEachLengthStringUsed = cleanArray(filtersEachLengthStringUsed, undefined);

			let charListDefault = [];
			if (sumFilterUsed == 0) {
				for (let i = 0; i < char.length; i++) {
					if (dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
						charListDefault[i] = char.item(i);
					}
				}
			}
			if (sumFilterUsed > 0) {
				charListDefault = filtersMultipleUsedWithSearchChar(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed, dataCharNameOrTitleItems, dataCharNameOrTitle, characterSearchId);
			}
			charListDefault = cleanArray(charListDefault, undefined);

			createFilterPagination2(charListDefault, localStorage.getItem("charsPerPageNumItem"));
			addDropdownClass(localStorage.getItem("filterDisplay"));
		}
	});
}