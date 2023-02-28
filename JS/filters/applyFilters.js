function filtersMultipleUsed(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed) {
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

		if (filtersUsed[0].length > 0) {
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
					if (filtersUsed[5].length > 0) {
						for (let l = 0; l < (maxSuperAttackTypes / 2); l++) {
							if (filterSuperAttackTypeItems[i][l] == filters[k][j]) {
								charListAll[0][i] = char.item(i);
							}
						}
					}
					if (filtersUsed[0].length > 0) {
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
		} else {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < charListAll[k - 1].length; i++) {
					if (charListAll[k - 1][i] != undefined) {
						if (filtersUsed[5].length > 0) {
							for (let l = 0; l < (maxSuperAttackTypes / 2); l++) {
								if (filterSuperAttackTypeItems[i][l] == filters[k][j]) {
									charListAll[k][i] = char.item(i);
								}
							}
						}
						if (filtersUsed[0].length > 0) {
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
	return charListAll[filtersEachLengthStringUsed.length - 1];
}

function applyFilters() {
	setCharList();
	const charContainerId = document.getElementById("char-container-id");
	const char = document.getElementsByClassName("char");
	const searchOneCharDropdownValue = document.getElementsByClassName("search-one-char-dropdown-options-value");

	const dataCharCategories = 'data-char-categories',
		dataCharRarity = 'data-char-rarity',
		dataCharType = 'data-char-type',
		dataCharClass = 'data-char-class',
		dataCharAwaken = 'data-char-awaken',
		dataCharSuperAtkType = 'data-char-super-atk-type',
		dataCharEza = 'data-char-eza',
		dataCharRecruit = 'data-char-recruit',
		dataCharRelease = 'data-char-release',
		dataCharCost = 'data-char-cost',
		dataCharHp = 'data-char-hp',
		dataCharAttack = 'data-char-attack',
		dataCharDefense = 'data-char-defense',
		dataCharName = 'data-char-name',
		dataCharSpAtkLv = 'data-char-super-atk-level',
		dataCharMaxLevel = 'data-char-max-level';

	const dataChars = [dataCharCategories,
		dataCharRarity,
		dataCharType,
		dataCharClass,
		dataCharAwaken,
		dataCharSuperAtkType,
		dataCharEza,
		dataCharRecruit];

	const filterCategories = ["db-saga", "saiyan-saga", "planet-namek-saga", "androids-cell-saga", "majin-buu-saga", "future-saga", "universe-survival-saga", "shadow-dragon-saga",

		"pure-saiyans", "hybrid-saiyans", "earthlings", "namekians", "androids", "artificial-life-forms", "gokus-family", "vegetas-family", "wicked-bloodline", "youth", "peppy-gals",

		"super-saiyans", "super-saiyan-2", "super-saiyan-3", "power-beyond-super-saiyan", "fusion", "potara", "fused-fighters", "giant-form", "transformation-boost", "power-absorption", "kamehameha",

		"realm-of-gods", "full-power", "giant-ape-power", "majin-power", "powerful-comeback", "miraculous-awakening", "corroded-body-and-mind", "rapid-growth", "mastered-evolution", "time-limit", "final-trump-card",

		"worthy-rivals", "sworn-enemies", "joined-forces", "bond-of-parent-and-child", "siblings-bond", "bond-of-friendship", "bond-of-master-and-disciple",

		"ginyu-force", "team-bardock", "universe-6", "representatives-of-universe-7", "universe-11", "gt-heroes", "gt-bosses", "super-heroes", "movie-heroes", "movie-bosses", "turtle-school", "world-tournament",

		"low-class-warrior", "earth-bred-fighters", "gifted-warriors", "otherworld-warriors", "resurrected-warriors", "space-traveling-warriors", "time-travelers", "dragon-ball-seekers", "storied-figures", "legendary-existence", "saviors", "defenders-of-justice",

		"revenge", "target-goku", "terrifying-conquerors", "inhumal-deeds", "planetary-destruction", "exploding-rage", "connected-hope", "entrusted-will", "all-out-struggle", "battle-of-wits", "accelerated-battle", "battle-of-fate", "heavenly-events", "special-pose", "worldwide-chaos",

		"crossover", "dragon-ball-heroes"],
		filterCategoriesNames = ["DB Saga", "Saiyan Saga", "Planet Namek Saga", "Androids/Cell Saga", "Majin Buu Saga", "Future Saga", "Universe Survival Saga", "Shadow Dragon Saga",

			"Pure Saiyans", "Hybrid Saiyans", "Earthlings", "Namekians", "Androids", "Artificial Life Forms", "Goku's Family", "Vegeta's Family", "Wicked Bloodline", "Youth", "Peppy Gals",

			"Super Saiyans", "Super Saiyan 2", "Super Saiyan 3", "Power Beyond Super Saiyan", "Fusion", "Potara", "Fused Fighters", "Giant Form", "Transformation Boost", "Power Absorption", "Kamehameha",

			"Realm of Gods", "Full Power", "Giant Ape Power", "Majin Power", "Powerful Comeback", "Miraculous Awakening", "Corroded Body And Mind", "Rapid Growth", "Mastered Evolution", "Time Limit", "Final Trump Card",

			"Worthy Rivals", "Sworn Enemies", "Joined Forces", "Bond of Parent and Child", "Siblings' Bond", "Bond of Friendship", "Bond of Master and Disciple",

			"Ginyu Force", "Team Bardock", "Universe 6", "Representatives of Universe 7", "Universe 11", "GT Heroes", "GT Bosses", "Super Heroes", "Movie Heroes", "Movie Bosses", "Turtle School", "World Tournament",

			"Low Class Warrior", "Earth-Bred Fighters", "Gifted Warriors", "Otherworld Warriors", "Resurrected Warriors", "Space Traveling Warriors", "Time Travelers", "Dragon Ball Seekers", "Storied Figures", "Legendary Existence", "Saviors", "Defenders of Justice",

			"Revenge", "Target: Goku", "Terrifying Conquerors", "Inhumal Deeds", "Planetary Destruction", "Exploding Rage", "Connected Hope", "Entrusted Will", "All-Out Struggle", "Battle of Wits", "Accelerated Battle", "Battle of Fate", "Heavenly Events", "Special Pose", "Worldwide Chaos",

			"Crossover", "Dragon Ball Heroes"],
		filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"],
		filterType = ["agl", "teq", "int", "str", "phy"],
		filterClass = ["super", "extreme"],
		filterAwaken = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"],
		filterSuperAttackType = ["ki-blast", "unarmed", "physical", "other"],
		filterEza = ["eza", "noeza"],
		filterRecruit = ["summonable", "free-to-play"];

	//checked filter Btn
	const filterClasses = ["checkedCategoryBtn", "checkedRarityBtn", "checkedTypeBtn", "checkedClassBtn", "checkedAwakenBtn", "checkedSuperAttackTypeBtn", "checkedEzaBtn", "checkedRecruitBtn"];
	const filtersEachLength = [];
	const filtersEachLengthString = [];

	for (let i = 0; i < filterClasses.length; i++) {
		const length = document.getElementsByClassName(filterClasses[i]).length;
		filtersEachLength.push(length);
		filtersEachLengthString.push(String.fromCharCode(65 + i)); // Convert index to corresponding letter of the alphabet
	}

	//select one char
	selectOneChar(searchOneCharDropdownValue);

	//sortDirection
	// sortDirectionDisplayOrder();
	const sortReleased = document.getElementById("sort-released");
	if (sortReleased.classList.contains("checkedSortBtn")) {
		const dataCharReleaseItems = document.querySelectorAll('[' + dataCharRelease + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		for (let i = 0; i < charLength; i++) {
			if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) === "2015") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) === "2016") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) === "2017") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) === "2018") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) === "2019") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) === "2020") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) === "2021") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) === "2022") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) === "2023") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
	}
	const sortType = document.getElementById("sort-type");
	if (sortType.classList.contains("checkedSortBtn")) {
		const dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		for (let i = 0; i < charLength; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "agl") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "teq") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "int") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "str") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType) == "phy") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
	}
	const sortRarity = document.getElementById("sort-rarity");
	if (sortRarity.classList.contains("checkedSortBtn")) {
		const dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		for (let i = 0; i < charLength; i++) {
			if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "n") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "r") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "sr") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "ssr") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "ur") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
		for (let i = 0; i < charLength; i++) {
			if (dataCharRarityItems[i].getAttribute(dataCharRarity) == "lr") {
				charContainerId.appendChild(temp_char[i]);
			}
		}
	}
	const sortCost = document.getElementById("sort-cost");
	if (sortCost.classList.contains("checkedSortBtn")) {
		const dataCharCostItems = document.querySelectorAll('[' + dataCharCost + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		let values = [];
		for (let i = 0; i < charLength; i++) {
			values[i] = parseInt(dataCharCostItems[i].getAttribute(dataCharCost));
		}
		let sortedvalues = removeDuplicates(values).sort((a, b) => a - b);
		for (j = 0; j < sortedvalues.length; j++) {
			for (let i = 0; i < charLength; i++) {
				if (dataCharCostItems[i].getAttribute(dataCharCost) == sortedvalues[j]) {
					charContainerId.appendChild(temp_char[i]);
				}
			}
		}
	}
	const sortHp = document.getElementById("sort-hp");
	if (sortHp.classList.contains("checkedSortBtn")) {
		const dataChaHpItems = document.querySelectorAll('[' + dataCharHp + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		let values = [];
		for (let i = 0; i < charLength; i++) {
			values[i] = parseInt(dataChaHpItems[i].getAttribute(dataCharHp));
		}
		let sortedvalues = removeDuplicates(values).sort((a, b) => a - b);
		for (j = 0; j < sortedvalues.length; j++) {
			for (let i = 0; i < charLength; i++) {
				if (dataChaHpItems[i].getAttribute(dataCharHp) == sortedvalues[j]) {
					charContainerId.appendChild(temp_char[i]);
				}
			}
		}
	}
	const sortAttack = document.getElementById("sort-attack");
	if (sortAttack.classList.contains("checkedSortBtn")) {
		const dataCharAttackItems = document.querySelectorAll('[' + dataCharAttack + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		let values = [];
		for (let i = 0; i < charLength; i++) {
			values[i] = parseInt(dataCharAttackItems[i].getAttribute(dataCharAttack));
		}
		let sortedvalues = removeDuplicates(values).sort((a, b) => a - b);
		for (j = 0; j < sortedvalues.length; j++) {
			for (let i = 0; i < charLength; i++) {
				if (dataCharAttackItems[i].getAttribute(dataCharAttack) == sortedvalues[j]) {
					charContainerId.appendChild(temp_char[i]);
				}
			}
		}
	}
	const sortDefense = document.getElementById("sort-defense");
	if (sortDefense.classList.contains("checkedSortBtn")) {
		const dataCharDefenseItems = document.querySelectorAll('[' + dataCharDefense + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		let values = [];
		for (let i = 0; i < charLength; i++) {
			values[i] = parseInt(dataCharDefenseItems[i].getAttribute(dataCharDefense));
		}
		let sortedvalues = removeDuplicates(values).sort((a, b) => a - b);
		for (j = 0; j < sortedvalues.length; j++) {
			for (let i = 0; i < charLength; i++) {
				if (dataCharDefenseItems[i].getAttribute(dataCharDefense) == sortedvalues[j]) {
					charContainerId.appendChild(temp_char[i]);
				}
			}
		}
	}
	//need better sort methond so thats it sorts like the in-game method
	const sortCharacter = document.getElementById("sort-character");
	if (sortCharacter.classList.contains("checkedSortBtn")) {
		const dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		let values = [];
		for (let i = 0; i < charLength; i++) {
			values[i] = dataCharNameItems[i].getAttribute(dataCharName);
		}
		let sortedvalues = removeDuplicates(values);
		for (j = 0; j < sortedvalues.length; j++) {
			for (let i = 0; i < charLength; i++) {
				if (dataCharNameItems[i].getAttribute(dataCharName) == sortedvalues[j]) {
					charContainerId.appendChild(temp_char[i]);
				}
			}
		}
	}
	const sortSpAtkLv = document.getElementById("sort-sp-atk-lv");
	if (sortSpAtkLv.classList.contains("checkedSortBtn")) {
		const dataCharSpAtkLevelItems = document.querySelectorAll('[' + dataCharSpAtkLv + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		let values = [];
		for (let i = 0; i < charLength; i++) {
			values[i] = parseInt(dataCharSpAtkLevelItems[i].getAttribute(dataCharSpAtkLv));
		}
		let sortedvalues = removeDuplicates(values).sort((a, b) => a - b);
		for (j = 0; j < sortedvalues.length; j++) {
			for (let i = 0; i < charLength; i++) {
				if (dataCharSpAtkLevelItems[i].getAttribute(dataCharSpAtkLv) == sortedvalues[j]) {
					charContainerId.appendChild(temp_char[i]);
				}
			}
		}
	}
	const sortMaxLevel = document.getElementById("sort-max-level");
	if (sortMaxLevel.classList.contains("checkedSortBtn")) {
		const dataCharMaxLevelItems = document.querySelectorAll('[' + dataCharMaxLevel + ']');
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		const charLength = char.length;
		charContainerId.innerHTML = "";
		let values = [];
		for (let i = 0; i < charLength; i++) {
			values[i] = parseInt(dataCharMaxLevelItems[i].getAttribute(dataCharMaxLevel));
		}
		let sortedvalues = removeDuplicates(values).sort((a, b) => a - b);
		for (j = 0; j < sortedvalues.length; j++) {
			for (let i = 0; i < charLength; i++) {
				if (dataCharMaxLevelItems[i].getAttribute(dataCharMaxLevel) == sortedvalues[j]) {
					charContainerId.appendChild(temp_char[i]);
				}
			}
		}
	}

	//sortDirection
	sortDirectionAscendingDesencding(char, charContainerId);

	//filters used
	const filtersUsed = filterCategoryUsed(filterCategories, filterCategoriesNames, filterRarity, filterType, filterClass, filterAwaken, filterSuperAttackType, filterEza, filterRecruit);

	//check how many filter are used
	let [sumFilterUsed, filtersEachLengthStringUsed] = filterSumCategoryUsed(filtersUsed, filtersEachLength, filtersEachLengthString);

	//create list of filtered characters
	let charListDefault = [];
	if (sumFilterUsed == 0) {
		for (let i = 0; i < char.length; i++) {
			charListDefault[i] = char.item(i);
		}
	}
	if (sumFilterUsed > 0) {
		charListDefault = filtersMultipleUsed(dataChars, filtersEachLengthString, filtersEachLengthStringUsed, filtersUsed);
	}
	charListDefault = cleanArray(charListDefault, undefined);

	//create pagination
	createFilterPagination(charListDefault);

	//add filter names in search one char
	if (sumFilterUsed > 0) {
		let charListFilteredNames = [];
		for (let i = 0; i < charListDefault.length; i++) {
			charListFilteredNames[i] = charListDefault[i].getAttribute("data-char-name");
		}
		addOnlyFilteredCharNames();
	}
}
