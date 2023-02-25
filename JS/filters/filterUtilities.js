function sortDirectionAscendingDesencding(checkedDirectionBtnLength, char, charContainerId) {
	if (checkedDirectionBtnLength == 1) {
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
}
function selectOneChar(searchOneCharDropdownValue) {
	for (let i = 1; i < searchOneCharDropdownValue.length; i++) {
		if (searchOneCharDropdownValue.item(i).classList.contains("checkedSearchOneCharBtn")) {
			addSearchOneCharDropdownClass(i, 1);
		}
	}
}
function filterCategoryUsed(filterCategories, filterCategoriesNames, filterRarity, filterType, filterClass, filterAwaken, filterSuperAttackType, filterEza, filterRecruit) {
	let filterCategoryUsed = [],
		filterRarityUsed = [],
		filterTypeUsed = [],
		filterClassUsed = [],
		filterAwakenUsed = [],
		filterSuperAttackTypeUsed = [],
		filterEzaUsed = [],
		filterRecruitUsed = [];

	//filterCategory
	for (let i = 0; i < filterCategories.length; i++) {
		if (document.getElementById(filterCategories[i]).classList.contains("checkedCategoryBtn")) {
			filterCategoryUsed[i] = filterCategoriesNames[i];
		}
	}
	filterCategoryUsed = cleanArray(filterCategoryUsed, undefined);

	//filterRarity
	for (let i = 0; i < filterRarity.length; i++) {
		if (document.getElementById(filterRarity[i]).classList.contains("checkedRarityBtn")) {
			filterRarityUsed[i] = filterRarity[i];
		}
	}
	filterRarityUsed = cleanArray(filterRarityUsed, undefined);

	//filterType
	for (let i = 0; i < filterType.length; i++) {
		if (document.getElementById(filterType[i]).classList.contains("checkedTypeBtn")) {
			filterTypeUsed[i] = filterType[i];
		}
	}
	filterTypeUsed = cleanArray(filterTypeUsed, undefined);

	//filterClass
	for (let i = 0; i < filterClass.length; i++) {
		if (document.getElementById(filterClass[i]).classList.contains("checkedClassBtn")) {
			filterClassUsed[i] = filterClass[i];
		}
	}
	filterClassUsed = cleanArray(filterClassUsed, undefined);

	//filterAwaken
	for (let i = 0; i < filterAwaken.length; i++) {
		if (document.getElementById(filterAwaken[i]).classList.contains("checkedAwakenBtn")) {
			filterAwakenUsed[i] = filterAwaken[i];
		}
	}
	filterAwakenUsed = cleanArray(filterAwakenUsed, undefined);

	//filterSuperAttackType
	for (let i = 0; i < filterSuperAttackType.length; i++) {
		if (document.getElementById(filterSuperAttackType[i]).classList.contains("checkedSuperAttackTypeBtn")) {
			filterSuperAttackTypeUsed[i] = filterSuperAttackType[i];
		}
	}
	filterSuperAttackTypeUsed = cleanArray(filterSuperAttackTypeUsed, undefined);

	//filterEza
	for (let i = 0; i < filterEza.length; i++) {
		if (document.getElementById(filterEza[i]).classList.contains("checkedEzaBtn")) {
			filterEzaUsed[i] = filterEza[i];
		}
	}
	filterEzaUsed = cleanArray(filterEzaUsed, undefined);

	//filterRecruit
	for (let i = 0; i < filterRecruit.length; i++) {
		if (document.getElementById(filterRecruit[i]).classList.contains("checkedRecruitBtn")) {
			filterRecruitUsed[i] = filterRecruit[i];
		}
	}
	filterRecruitUsed = cleanArray(filterRecruitUsed, undefined);

	return [filterCategoryUsed, filterRarityUsed, filterTypeUsed, filterClassUsed, filterAwakenUsed, filterSuperAttackTypeUsed, filterEzaUsed, filterRecruitUsed];
}
function filterSumCategoryUsed(filtersUsed, filtersEachLength, filtersEachLengthString) {
	let sumFilterUsed = 0;
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
	return [sumFilterUsed, filtersEachLengthStringUsed];
}