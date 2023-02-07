function filtersMultipleUsedWithSearchChar(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed, dataCharNameOrTitleItems, dataCharNameOrTitle, characterSearchId) {
	let filters = [], filterCharItems = [], filterChars = [], filterCharItemsTemp = [], filterCharItems2 = [], charListAll;
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
	charListAll = create2DimensionalArray(filtersEachLengthStringUsed.length, 1);

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
					if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& ((filterCharItems2[i] == filters[k][j]) || (filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j]))) {
						charListAll[0][i] = char.item(i);
					}
				}
			}
		} else {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < charListAll[k - 1].length; i++) {
					if (charListAll[k - 1][i] != undefined) {
						if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& ((filterCharItems2[i] == filters[k][j]) || (filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j]))) {
							charListAll[k][i] = char.item(i);
						}
					}
				}
			}
		}
	}
	return charListAll[filtersEachLengthStringUsed.length - 1];
}

function searchChar() {
	let searchCarEventCompleted = localStorage.getItem("searchCarEventCompleted");
	if (searchCarEventCompleted == null) {
		window.addEventListener("unload",function(){
			localStorage.removeItem("searchCarEventCompleted");
		});
		let characterSearchId = document.getElementById("char-search-id");
		characterSearchId.addEventListener("keypress", function (event) {
			if (event.key === "Enter") {
				event.preventDefault();
				setCharList();
				let nameOrTitle = localStorage.getItem("nameOrTitle");
				let characterSearchId = document.getElementById("char-search-id");
				let char_container_id = document.getElementById("char-container-id");
				let char = document.getElementsByClassName("char");
				let checkedDirectionBtn = document.getElementsByClassName("checkedDirectionBtn");

				let temp_char = [], charListDefault = [], filtersUsed = [], filtersEachLengthStringUsed = [],
					filtersEachLengthString = ["A", "B", "C", "D", "E", "F", "G"], charLength = char.length, dataCharNameOrTitleItems, dataCharNameOrTitle,
					sumFilterUsed = 0;

				let dataCharTitle = 'data-char-title', dataCharName = 'data-char-name', dataCharType = 'data-char-type', dataCharRarity = 'data-char-rarity', dataCharClass = 'data-char-class',
					dataCharEza = 'data-char-eza', dataCharAwaken = 'data-char-awaken', dataCharSuperAtkType = 'data-char-super-atk-type',
					dataCharRecruit = 'data-char-recruit';

				let dataChars = [dataCharType, dataCharRarity, dataCharClass,
					dataCharEza, dataCharAwaken, dataCharSuperAtkType, dataCharRecruit];

				let filterType = [], filterRarity = [], filterClass = [],
					filterEza = [], filterAwakenId = [], filterSuperAttackTypeId = [],
					filterRecruitId = [];

				let dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
				let dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');


				let filterTypeTemp = ["agl", "teq", "int", "str", "phy"];
				let filterRarityTemp = ["n", "r", "sr", "ssr", "ur", "lr"];
				let filterClassTemp = ["super", "extreme"];
				let filterEzaTemp = ["eza", "noeza"];
				let filterAwakenIdTemp = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"];
				let filterSuperAttackTypeIdTemp = ["ki-blast", "unarmed", "physical", "other"];
				let filterRecruitIdTemp = ["summonable", "free-to-play"];

				let A = document.getElementsByClassName("checkedTypeBtn").length;
				let B = document.getElementsByClassName("checkedRarityBtn").length;
				let C = document.getElementsByClassName("checkedClassBtn").length;
				let D = document.getElementsByClassName("checkedEzaBtn").length;
				let E = document.getElementsByClassName("checkedAwakenBtn").length;
				let F = document.getElementsByClassName("checkedSuperAttackTypeBtn").length;
				let G = document.getElementsByClassName("checkedRecruitBtn").length;
				let filtersEachLength = [A, B, C, D, E, F, G];

				if (checkedDirectionBtn.length == 1) {
					for (let i = 0; i < char.length; i++) {
						temp_char[i] = char.item(i);
					}
					char_container_id.innerHTML = "";
					for (let i = charLength - 1; i > -1; i--) {
						char_container_id.appendChild(temp_char[i]);
					}
				}

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
				filterType.clean(undefined);

				for (let i = 0; i < filterRarityTemp.length; i++) {
					if (document.getElementById(filterRarityTemp[i]).classList.contains("checkedRarityBtn")) {
						filterRarity[i] = filterRarityTemp[i];
					}
				}
				filterRarity.clean(undefined);

				for (let i = 0; i < filterClassTemp.length; i++) {
					if (document.getElementById(filterClassTemp[i]).classList.contains("checkedClassBtn")) {
						filterClass[i] = filterClassTemp[i];
					}
				}
				filterClass.clean(undefined);

				for (let i = 0; i < filterEzaTemp.length; i++) {
					if (document.getElementById(filterEzaTemp[i]).classList.contains("checkedEzaBtn")) {
						filterEza[i] = filterEzaTemp[i];
					}
				}
				filterEza.clean(undefined);

				for (let i = 0; i < filterAwakenIdTemp.length; i++) {
					if (document.getElementById(filterAwakenIdTemp[i]).classList.contains("checkedAwakenBtn")) {
						filterAwakenId[i] = filterAwakenIdTemp[i];
					}
				}
				filterAwakenId.clean(undefined);

				for (let i = 0; i < filterSuperAttackTypeIdTemp.length; i++) {
					if (document.getElementById(filterSuperAttackTypeIdTemp[i]).classList.contains("checkedSuperAttackTypeBtn")) {
						filterSuperAttackTypeId[i] = filterSuperAttackTypeIdTemp[i];
					}
				}
				filterSuperAttackTypeId.clean(undefined);

				for (let i = 0; i < filterRecruitIdTemp.length; i++) {
					if (document.getElementById(filterRecruitIdTemp[i]).classList.contains("checkedRecruitBtn")) {
						filterRecruitId[i] = filterRecruitIdTemp[i];
					}
				}
				filterRecruitId.clean(undefined);

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
				filtersEachLengthStringUsed.clean(undefined);

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
				charListDefault.clean(undefined);
				createFilterPagination(charListDefault, localStorage.getItem("charsPerPageNumItem"));
				addDropdownClass(localStorage.getItem("filterDisplay"));
			}
		});
		localStorage.setItem("searchCarEventCompleted",1);
	}
}