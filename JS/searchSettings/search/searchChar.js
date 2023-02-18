function filtersMultipleUsedWithSearchChar(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed, dataCharNameOrTitleItems, dataCharNameOrTitle, characterSearchId) {
	const char = document.getElementsByClassName("char");

	let filters = [],
		filterCharItems = [],
		filterChars = [],
		filterCharItemsTemp = [],
		maxSuperAttackTypes = 0,
		maxCategories = 0,
		charListAll = create2DimensionalArray(filtersEachLengthStringUsed.length, 1);

	for (j = 0; j < filtersEachLengthStringUsed.length; j++) {
		for (let i = 0; i < filtersEachLengthString.length; i++) {
			if (filtersEachLengthStringUsed[j] == filtersEachLengthString[i]) {
				filters[j] = filtersUsed[i];
				filterCharItems[j] = document.querySelectorAll('[' + dataChars[i] + ']');
				filterChars[j] = dataChars[i];
			}
		}
	}
	console.log(filterCharItems[0].length);
	let filterSuperAttackTypeItems = create2DimensionalArray(filterCharItems[0].length, 1);
	let filterCategoryItems = create2DimensionalArray(filterCharItems[0].length, 1);

	for (k = 0; k < filtersEachLengthStringUsed.length; k++) {
		if (filtersUsed[5].length > 0) {
			for (let i = 0; i < filterCharItems[k].length; i++) {
				filterCharItemsTemp[i] = filterCharItems[k][i].getAttribute(filterChars[k]).split(",");
				if (filterCharItemsTemp[i].length > maxSuperAttackTypes) {
					maxSuperAttackTypes = filterCharItemsTemp[i].length;
				}
			}
			for (let j = -1; j < ((maxSuperAttackTypes / 2) - 1); j++) {
				for (let i = 0; i < filterCharItems[k].length; i++) {
					filterSuperAttackTypeItems[i][j + 1] = filterCharItemsTemp[i][j + 2];
				}
			}
		}

		if (filtersUsed[7].length > 0) {
			for (let i = 0; i < filterCharItems[k].length; i++) {
				filterCharItemsTemp[i] = filterCharItems[k][i].getAttribute(filterChars[k]).split(",");
				if (filterCharItemsTemp[i].length > maxCategories) {
					maxCategories = filterCharItemsTemp[i].length;
				}
			}
			
			for (let j = 0; j < maxCategories; j++) {
				for (let i = 0; i < filterCharItems[k].length; i++) {
					filterCategoryItems[i][j] = filterCharItemsTemp[i][j];
				}
			}
		}

		if (k == 0) {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < char.length; i++) {
					if (dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
						if (filtersUsed[5].length > 0) {
							for (let l = 0; l < (maxSuperAttackTypes / 2); l++) {
								if (filterSuperAttackTypeItems[i][l] == filters[k][j]) {
									charListAll[0][i] = char.item(i);
								}
							}
						}
						if (filtersUsed[7].length > 0) {
							for (let l = 0; l < maxCategories; l++) {
								if (filterCategoryItems[i][l] == filters[k][j]) {
									charListAll[0][i] = char.item(i);
								}
							}
						}
						if (filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j]) {
							charListAll[0][i] = char.item(i);
						}
					}
				}
			}
		} else {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < charListAll[k - 1].length; i++) {
					if (charListAll[k - 1][i] != undefined) {
						if (dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
							if (filtersUsed[5].length > 0) {
								for (let l = 0; l < (maxSuperAttackTypes / 2); l++) {
									if (filterSuperAttackTypeItems[i][l] == filters[k][j]) {
										charListAll[k][i] = char.item(i);
									}
								}
							}
							if (filtersUsed[7].length > 0) {
								for (let l = 0; l < maxCategories; l++) {
									if (filterCategoryItems[i][l] == filters[k][j]) {
										charListAll[k][i] = char.item(i);
									}
								}
							}
							if (filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j]) {
								charListAll[k][i] = char.item(i);
							}
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
				dataCharRecruit = 'data-char-recruit', dataCharCategories = 'data-char-categories';

			const dataChars = [dataCharType, dataCharRarity, dataCharClass,
				dataCharEza, dataCharAwaken, dataCharSuperAtkType, dataCharRecruit, dataCharCategories];

			let filterType = [], filterRarity = [], filterClass = [],
				filterEza = [], filterAwaken = [], filterSuperAttackType = [],
				filterRecruit = [],filterCategory = [];

			const dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
			const dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');


			const filterTypeTemp = ["agl", "teq", "int", "str", "phy"],
				filterRarityTemp = ["n", "r", "sr", "ssr", "ur", "lr"],
				filterClassTemp = ["super", "extreme"],
				filterEzaTemp = ["eza", "noeza"],
				filterAwakenIdTemp = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"],
				filterSuperAttackTypeIdTemp = ["ki-blast", "unarmed", "physical", "other"],
				filterRecruitIdTemp = ["summonable", "free-to-play"],
				filterCategoriesTemp = ["db-saga", "saiyan-saga", "planet-namek-saga", "androids-cell-saga", "majin-buu-saga"],
				filterCategoriesTemp2 = ["DB Saga", "Saiyan Saga", "Planet Namek Saga", "Androids/Cell Saga", "Majin Buu Saga"],
				filtersEachLengthString = ["A", "B", "C", "D", "E", "F", "G", "H"];

			const A = document.getElementsByClassName("checkedTypeBtn").length;
			const B = document.getElementsByClassName("checkedRarityBtn").length;
			const C = document.getElementsByClassName("checkedClassBtn").length;
			const D = document.getElementsByClassName("checkedEzaBtn").length;
			const E = document.getElementsByClassName("checkedAwakenBtn").length;
			const F = document.getElementsByClassName("checkedSuperAttackTypeBtn").length;
			const G = document.getElementsByClassName("checkedRecruitBtn").length;
			const H = document.getElementsByClassName("checkedCategoryBtn").length;
			const filtersEachLength = [A, B, C, D, E, F, G, H];

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
					filterAwaken[i] = filterAwakenIdTemp[i];
				}
			}
			filterAwaken = cleanArray(filterAwaken, undefined);

			for (let i = 0; i < filterSuperAttackTypeIdTemp.length; i++) {
				if (document.getElementById(filterSuperAttackTypeIdTemp[i]).classList.contains("checkedSuperAttackTypeBtn")) {
					filterSuperAttackType[i] = filterSuperAttackTypeIdTemp[i];
				}
			}
			filterSuperAttackType = cleanArray(filterSuperAttackType, undefined);

			for (let i = 0; i < filterRecruitIdTemp.length; i++) {
				if (document.getElementById(filterRecruitIdTemp[i]).classList.contains("checkedRecruitBtn")) {
					filterRecruit[i] = filterRecruitIdTemp[i];
				}
			}
			filterRecruit = cleanArray(filterRecruit, undefined);

			for (let i = 0; i < filterCategoriesTemp.length; i++) {
				if (document.getElementById(filterCategoriesTemp[i]).classList.contains("checkedCategoryBtn")) {
					filterCategory[i] = filterCategoriesTemp2[i];
				}
			}
			filterCategory = cleanArray(filterCategory, undefined);
			
			const filtersUsed = [filterType, filterRarity, filterClass, filterEza, filterAwaken, filterSuperAttackType, filterRecruit, filterCategory];
		
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
		}
	});
}