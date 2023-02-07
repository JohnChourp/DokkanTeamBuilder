function removeAllFilters() {
	let filterType = [], filterRarity = [], filterClass = [],
		filterEza = [], filterAwakenId = [], filterSuperAttackTypeId = [],
		filterRecruitId = [];
	let filterTypeTemp = ["agl", "teq", "int", "str", "phy"], filterRarityTemp = ["n", "r", "sr", "ssr", "ur", "lr"],
		filterClassTemp = ["super", "extreme"], filterEzaTemp = ["eza", "noeza"],
		filterAwakenIdTemp = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"],
		filterSuperAttackTypeIdTemp = ["ki-blast", "unarmed", "physical", "other"], filterRecruitIdTemp = ["summonable", "free-to-play"],
		filtersUsed = [], sumFilterUsed = 0;

	//filterType
	for (let i = 0; i < filterTypeTemp.length; i++) {
		if (document.getElementById(filterTypeTemp[i]).classList.contains("checkedTypeBtn")) {
			filterType[i] = filterTypeTemp[i];
		}
	}
	filterType.clean(undefined);

	//filterRarity
	for (let i = 0; i < filterRarityTemp.length; i++) {
		if (document.getElementById(filterRarityTemp[i]).classList.contains("checkedRarityBtn")) {
			filterRarity[i] = filterRarityTemp[i];
		}
	}
	filterRarity.clean(undefined);

	//filterClass

	for (let i = 0; i < filterClassTemp.length; i++) {
		if (document.getElementById(filterClassTemp[i]).classList.contains("checkedClassBtn")) {
			filterClass[i] = filterClassTemp[i];
		}
	}
	filterClass.clean(undefined);

	//filterEza
	for (let i = 0; i < filterEzaTemp.length; i++) {
		if (document.getElementById(filterEzaTemp[i]).classList.contains("checkedEzaBtn")) {
			filterEza[i] = filterEzaTemp[i];
		}
	}
	filterEza.clean(undefined);

	//filterAwaken
	for (let i = 0; i < filterAwakenIdTemp.length; i++) {
		if (document.getElementById(filterAwakenIdTemp[i]).classList.contains("checkedAwakenBtn")) {
			filterAwakenId[i] = filterAwakenIdTemp[i];
		}
	}
	filterAwakenId.clean(undefined);

	//filterSuperAttackType
	for (let i = 0; i < filterSuperAttackTypeIdTemp.length; i++) {
		if (document.getElementById(filterSuperAttackTypeIdTemp[i]).classList.contains("checkedSuperAttackTypeBtn")) {
			filterSuperAttackTypeId[i] = filterSuperAttackTypeIdTemp[i];
		}
	}
	filterSuperAttackTypeId.clean(undefined);

	//filterRecruit
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

	if (sumFilterUsed > 0) {
		removeAllRarity();
		removeAllType();
		removeAllClass();
		removeAllEza();
		removeAllDokkanAwaken();
		removeAllSuperAttackType();
		removeAllRecruit()
	}
}