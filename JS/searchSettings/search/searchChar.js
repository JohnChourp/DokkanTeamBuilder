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
	let filterSuperAttackTypeItems = create2DimensionalArray(filterCharItems[0].length, 1);
	let filterCategoryItems = create2DimensionalArray(filterCharItems[0].length, 1);

	for (k = 0; k < filtersEachLengthStringUsed.length; k++) {
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

		if (k == 0) {
			for (let j = 0; j < filters[k].length; j++) {
				for (let i = 0; i < char.length; i++) {
					if (dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
						if (filtersUsed[0].length > 0) {
							for (let l = 0; l < maxCategories; l++) {
								if (filterCategoryItems[i][l] == filters[k][j]) {
									charListAll[0][i] = char.item(i);
								}
							}
						}
						if (filtersUsed[5].length > 0) {
							for (let l = 0; l < (maxSuperAttackTypes / 2); l++) {
								if (filterSuperAttackTypeItems[i][l] == filters[k][j]) {
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
							if (filtersUsed[0].length > 0) {
								for (let l = 0; l < maxCategories; l++) {
									if (filterCategoryItems[i][l] == filters[k][j]) {
										charListAll[k][i] = char.item(i);
									}
								}
							}
							if (filtersUsed[5].length > 0) {
								for (let l = 0; l < (maxSuperAttackTypes / 2); l++) {
									if (filterSuperAttackTypeItems[i][l] == filters[k][j]) {
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

function searchChar() {
	const characterSearchId = document.getElementById("char-search-id");
	characterSearchId.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			const sortUpdated = document.getElementById("sort-updated");
			if (sortUpdated.classList.contains("checkedSortBtn")) {
				setCharList();
				saveCharListTemp();
			} else {
				setCharListTemp();
			}

			const nameOrTitle = localStorage.getItem("nameOrTitle");
			const charContainerId = document.getElementById("char-container-id");
			const characterSearchId = document.getElementById("char-search-id");
			const char = document.getElementsByClassName("char");

			const dataCharTitle = 'data-char-title',
				dataCharName = 'data-char-name',
				dataCharCategories = 'data-char-categories',
				dataCharRarity = 'data-char-rarity',
				dataCharType = 'data-char-type',
				dataCharClass = 'data-char-class',
				dataCharAwaken = 'data-char-awaken',
				dataCharSuperAtkType = 'data-char-super-atk-type',
				dataCharEza = 'data-char-eza',
				dataCharRecruit = 'data-char-recruit';

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

			const dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
			const dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');

			//check if search titles is enabled
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

			if (!sortUpdated.classList.contains("checkedSortBtn")) {
				saveCharListTemp();
			}

			//sortDirection
			//sortDirectionAscendingDesencdingSearchChar(char, charContainerId, dataCharNameOrTitleItems, dataCharNameOrTitle);

			//filter used
			const filtersUsed = filterCategoryUsed(filterCategories, filterCategoriesNames, filterRarity, filterType, filterClass, filterAwaken, filterSuperAttackType, filterEza, filterRecruit);

			//check how many filter are used
			let [sumFilterUsed, filtersEachLengthStringUsed] = filterSumCategoryUsed(filtersUsed, filtersEachLength, filtersEachLengthString);

			//create list of filtered characters
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

			//create pagination
			createFilterPagination(charListDefault);
		}
	});
}