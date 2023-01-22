function removeAllFilters() {
	// removeAllId.style.backgroundColor = "#dfc011";
	let filterType = [], filterRarity = [], filterClass = [], filterEza = [], filterAwakenId = [];

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

	let filtersUsed = [filterType.length, filterRarity.length, filterClass.length, filterEza.length, filterAwakenId.length];
	//check how many filter are used
	for (let i = 0; i < filtersUsed.length; i++) {
		if (filtersUsed[i] > 0) {
			removeAllRarity();
			removeAllType();
			removeAllClass();
			removeAllEza();
			removeAllDokkanAwaken();
		}
	}
}