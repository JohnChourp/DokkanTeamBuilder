function filtersMultipleUsedWithSearchChar(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed, dataCharNameOrTitleItems, dataCharNameOrTitle, characterSearchId) {
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

	for (k = 0; k < filtersEachLengthStringUsed.length; k++) {
		if (k == 0) {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (filterCharItems[k][i].getAttribute(filterChars[k]).toLowerCase() == filters[k][j])) {
						charListAll[0][i] = char.item(i);
					}
				}
			}
		} else {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < charListAll[k - 1].length; i++) {
					if (charListAll[k - 1][i] != undefined) {
						if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (filterCharItems[k][i].getAttribute(filterChars[k]).toLowerCase() == filters[k][j])) {
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
	let characterSearchId = document.getElementById("char-search-id");
	characterSearchId.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			let nameOrTitle = localStorage.getItem("nameOrTitle");
			if(nameOrTitle == null){
				nameOrTitle = 1;
			}
			event.preventDefault();
			setCharList();
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

			let dataCharName = 'data-char-name', dataCharTitle = 'data-char-title', dataCharType = 'data-char-type', dataCharRarity = 'data-char-rarity',
				dataCharClass = 'data-char-class', dataCharEza = 'data-char-eza', dataCharAwaken = 'data-char-awaken';
			let dataChars = [dataCharType, dataCharRarity, dataCharClass, dataCharEza, dataCharAwaken];
			let filterType = [], filterRarity = [], filterClass = [], filterEza = [],
				filterAwakenId = [], filterAwakenValue = [];

			let dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
			let dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');

			let characterSearchId = document.getElementById("char-search-id");

			let dataCharNameOrTitleItems, dataCharNameOrTitle;

			if (nameOrTitle == 1) {
				dataCharNameOrTitleItems = dataCharNameItems;
				dataCharNameOrTitle = dataCharName;
			}
			if (nameOrTitle == 2) {
				dataCharNameOrTitleItems = dataCharTitleItems;
				dataCharNameOrTitle = dataCharTitle;
			}

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

			let filterAwakenIdTemp = ["notDokkanAwakened", "preDokkanAwakened", "dokkanAwakened"];
			let filterAwakenValueTemp = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"];
			let filterAwakenIdLength = filterAwakenIdTemp.length;
			for (let i = 0; i < filterAwakenIdLength; i++) {
				if (document.getElementById(filterAwakenIdTemp[i]).classList.contains("checkedAwakenBtn")) {
					filterAwakenId[i] = filterAwakenIdTemp[i];
					filterAwakenValue[i] = filterAwakenValueTemp[i];
				}
			}
			filterAwakenId.clean(undefined);
			filterAwakenValue.clean(undefined);


			let filtersUsed = [filterType, filterRarity, filterClass, filterEza, filterAwakenValue];
			let A = document.getElementsByClassName("checkedTypeBtn").length;
			let B = document.getElementsByClassName("checkedRarityBtn").length;
			let C = document.getElementsByClassName("checkedClassBtn").length;
			let D = document.getElementsByClassName("checkedEzaBtn").length;
			let E = document.getElementsByClassName("checkedAwakenBtn").length;
			let filtersEachLength = [A, B, C, D, E];
			let filtersEachLengthString = ["A", "B", "C", "D", "E"];
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
					if (dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
						charListDefault[i] = char.item(i);
					}
				}
			}
			if (sumFilterUsed == 1) {
				charListDefault = filtersMultipleUsedWithSearchChar(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed, dataCharNameOrTitleItems, dataCharNameOrTitle, characterSearchId);
			}
			if (sumFilterUsed == 2) {
				charListDefault = filtersMultipleUsedWithSearchChar(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed, dataCharNameOrTitleItems, dataCharNameOrTitle, characterSearchId);
			}
			if (sumFilterUsed == 3) {
				charListDefault = filtersMultipleUsedWithSearchChar(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed, dataCharNameOrTitleItems, dataCharNameOrTitle, characterSearchId);
			}
			if (sumFilterUsed == 4) {
				charListDefault = filtersMultipleUsedWithSearchChar(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed, dataCharNameOrTitleItems, dataCharNameOrTitle, characterSearchId);
			}
			if (sumFilterUsed == 5) {
				charListDefault = filtersMultipleUsedWithSearchChar(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed, dataCharNameOrTitleItems, dataCharNameOrTitle, characterSearchId);
			}

			charListDefault.clean(undefined);
			createFilterPagination(charListDefault, localStorage.getItem("charsPerPageNumItem"));
			addDropdownClass(localStorage.getItem("filterDisplay"));
		}
	});
}