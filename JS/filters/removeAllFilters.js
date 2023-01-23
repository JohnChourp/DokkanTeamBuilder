function removeAllFilters() {
	// removeAllId.style.backgroundColor = "#dfc011";
	let filterType = [], filterRarity = [], filterClass = [],
		filterEza = [], filterAwakenId = [], filterSuperAttackTypeId = [],
		filterRecruitId = [];

	//filterType
	let filterTypeTemp = ["agl", "teq", "int", "str", "phy"];
	let filterTypeLength = filterTypeTemp.length;
	for (let i = 0; i < filterTypeLength; i++) {
		if (document.getElementById(filterTypeTemp[i]).classList.contains("checkedTypeBtn")) {
			filterType[i] = filterTypeTemp[i];
		}
	}
	filterType.clean(undefined);

	//filterRarity
	let filterRarityTemp = ["n", "r", "sr", "ssr", "ur", "lr"];
	let filterRarityLength = filterRarityTemp.length;
	for (let i = 0; i < filterRarityLength; i++) {
		if (document.getElementById(filterRarityTemp[i]).classList.contains("checkedRarityBtn")) {
			filterRarity[i] = filterRarityTemp[i];
		}
	}
	filterRarity.clean(undefined);

	//filterClass
	let filterClassTemp = ["super", "extreme"];
	let filterClassLength = filterClassTemp.length;
	for (let i = 0; i < filterClassLength; i++) {
		if (document.getElementById(filterClassTemp[i]).classList.contains("checkedClassBtn")) {
			filterClass[i] = filterClassTemp[i];
		}
	}
	filterClass.clean(undefined);

	//filterEza
	let filterEzaTemp = ["eza", "noeza"];
	let filterEzaLength = filterEzaTemp.length;
	for (let i = 0; i < filterEzaLength; i++) {
		if (document.getElementById(filterEzaTemp[i]).classList.contains("checkedEzaBtn")) {
			filterEza[i] = filterEzaTemp[i];
		}
	}
	filterEza.clean(undefined);

	//filterAwaken
	let filterAwakenIdTemp = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"];
	for (let i = 0; i < filterAwakenIdTemp.length; i++) {
		if (document.getElementById(filterAwakenIdTemp[i]).classList.contains("checkedAwakenBtn")) {
			filterAwakenId[i] = filterAwakenIdTemp[i];
		}
	}
	filterAwakenId.clean(undefined);

	//filterSuperAttackType
	let filterSuperAttackTypeIdTemp = ["ki-blast", "unarmed", "physical", "other"];
	for (let i = 0; i < filterSuperAttackTypeIdTemp.length; i++) {
		if (document.getElementById(filterSuperAttackTypeIdTemp[i]).classList.contains("checkedSuperAttackTypeBtn")) {
			filterSuperAttackTypeId[i] = filterSuperAttackTypeIdTemp[i];
		}
	}
	filterSuperAttackTypeId.clean(undefined);

	//filterRecruit
	let filterRecruitIdTemp = ["summonable", "free-to-play"];
	for (let i = 0; i < filterRecruitIdTemp.length; i++) {
		if (document.getElementById(filterRecruitIdTemp[i]).classList.contains("checkedRecruitBtn")) {
			filterRecruitId[i] = filterRecruitIdTemp[i];
		}
	}
	filterRecruitId.clean(undefined);

	let filtersUsed = [filterType, filterRarity, filterClass, filterEza, filterAwakenId, filterSuperAttackTypeId, filterRecruitId];
	let sumFilterUsed = 0;
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