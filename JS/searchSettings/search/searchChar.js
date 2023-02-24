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
					if (dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
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

			const dataCharTitle = 'data-char-title',
				dataCharName = 'data-char-name';

			const dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
			const dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');

			const dataCharCategories = 'data-char-categories',
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

			let filterCategoryUsed = [],
				filterRarityUsed = [],
				filterTypeUsed = [],
				filterClassUsed = [],
				filterAwakenUsed = [],
				filterSuperAttackTypeUsed = [],
				filterEzaUsed = [],
				filterRecruitUsed = [];


			const filterCategories = ["db-saga",
				"saiyan-saga",
				"planet-namek-saga",
				"androids-cell-saga",
				"majin-buu-saga",
				"future-saga",
				"universe-survival-saga",
				"shadow-dragon-saga",

				"pure-saiyans",
				"hybrid-saiyans",
				"earthlings",
				"namekians",
				"androids",
				"artificial-life-forms",
				"gokus-family",
				"vegetas-family",
				"wicked-bloodline",
				"youth",
				"peppy-gals",

				"super-saiyans",
				"super-saiyan-2",
				"super-saiyan-3",
				"power-beyond-super-saiyan",
				"fusion",
				"potara",
				"fused-fighters",
				"giant-form",
				"transformation-boost",
				"power-absorption",
				"kamehameha",

				"realm-of-gods",
				"full-power",
				"giant-ape-power",
				"majin-power",
				"powerful-comeback",
				"miraculous-awakening",
				"corroded-body-and-mind",
				"rapid-growth",
				"mastered-evolution",
				"time-limit",
				"final-trump-card",

				"worthy-rivals",
				"sworn-enemies",
				"joined-forces",
				"bond-of-parent-and-child",
				"siblings-bond",
				"bond-of-friendship",
				"bond-of-master-and-disciple",

				"ginyu-force",
				"team-bardock",
				"universe-6",
				"representatives-of-universe-7",
				"universe-11",
				"gt-heroes",
				"gt-bosses",
				"super-heroes",
				"movie-heroes",
				"movie-bosses",
				"turtle-school",
				"world-tournament",

				"low-class-warrior",
				"earth-bred-fighters",
				"gifted-warriors",
				"otherworld-warriors",
				"resurrected-warriors",
				"space-traveling-warriors",
				"time-travelers",
				"dragon-ball-seekers",
				"storied-figures",
				"legendary-existence",
				"saviors",
				"defenders-of-justice",

				"revenge",
				"target-goku",
				"terrifying-conquerors",
				"inhumal-deeds",
				"planetary-destruction",
				"exploding-rage",
				"connected-hope",
				"entrusted-will",
				"all-out-struggle",
				"battle-of-wits",
				"accelerated-battle",
				"battle-of-fate",
				"heavenly-events",
				"special-pose",
				"worldwide-chaos",

				"crossover",
				"dragon-ball-heroes"],
				filterCategoriesNames = ["DB Saga",
					"Saiyan Saga",
					"Planet Namek Saga",
					"Androids/Cell Saga",
					"Majin Buu Saga",
					"Future Saga",
					"Universe Survival Saga",
					"Shadow Dragon Saga",

					"Pure Saiyans",
					"Hybrid Saiyans",
					"Earthlings",
					"Namekians",
					"Androids",
					"Artificial Life Forms",
					"Goku's Family",
					"Vegeta's Family",
					"Wicked Bloodline",
					"Youth",
					"Peppy Gals",

					"Super Saiyans",
					"Super Saiyan 2",
					"Super Saiyan 3",
					"Power Beyond Super Saiyan",
					"Fusion",
					"Potara",
					"Fused Fighters",
					"Giant Form",
					"Transformation Boost",
					"Power Absorption",
					"Kamehameha",

					"Realm of Gods",
					"Full Power",
					"Giant Ape Power",
					"Majin Power",
					"Powerful Comeback",
					"Miraculous Awakening",
					"Corroded Body And Mind",
					"Rapid Growth",
					"Mastered Evolution",
					"Time Limit",
					"Final Trump Card",

					"Worthy Rivals",
					"Sworn Enemies",
					"Joined Forces",
					"Bond of Parent and Child",
					"Siblings' Bond",
					"Bond of Friendship",
					"Bond of Master and Disciple",

					"Ginyu Force",
					"Team Bardock",
					"Universe 6",
					"Representatives of Universe 7",
					"Universe 11",
					"GT Heroes",
					"GT Bosses",
					"Super Heroes",
					"Movie Heroes",
					"Movie Bosses",
					"Turtle School",
					"World Tournament",

					"Low Class Warrior",
					"Earth-Bred Fighters",
					"Gifted Warriors",
					"Otherworld Warriors",
					"Resurrected Warriors",
					"Space Traveling Warriors",
					"Time Travelers",
					"Dragon Ball Seekers",
					"Storied Figures",
					"Legendary Existence",
					"Saviors",
					"Defenders of Justice",

					"Revenge",
					"Target: Goku",
					"Terrifying Conquerors",
					"Inhumal Deeds",
					"Planetary Destruction",
					"Exploding Rage",
					"Connected Hope",
					"Entrusted Will",
					"All-Out Struggle",
					"Battle of Wits",
					"Accelerated Battle",
					"Battle of Fate",
					"Heavenly Events",
					"Special Pose",
					"Worldwide Chaos",

					"Crossover",
					"Dragon Ball Heroes"],
				filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"],
				filterType = ["agl", "teq", "int", "str", "phy"],
				filterClass = ["super", "extreme"],
				filterAwaken = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"],
				filterSuperAttackType = ["ki-blast", "unarmed", "physical", "other"],
				filterEza = ["eza", "noeza"],
				filterRecruit = ["summonable", "free-to-play"];


			const A = document.getElementsByClassName("checkedCategoryBtn").length;
			const B = document.getElementsByClassName("checkedRarityBtn").length;
			const C = document.getElementsByClassName("checkedTypeBtn").length;
			const D = document.getElementsByClassName("checkedClassBtn").length;
			const E = document.getElementsByClassName("checkedAwakenBtn").length;
			const F = document.getElementsByClassName("checkedSuperAttackTypeBtn").length;
			const G = document.getElementsByClassName("checkedEzaBtn").length;
			const H = document.getElementsByClassName("checkedRecruitBtn").length;
			const filtersEachLength = [A, B, C, D, E, F, G, H];
			const filtersEachLengthString = ["A", "B", "C", "D", "E", "F", "G", "H"];

			//sortDirection
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

			const filtersUsed = [filterCategoryUsed, filterRarityUsed, filterTypeUsed, filterClassUsed, filterAwakenUsed, filterSuperAttackTypeUsed, filterEzaUsed, filterRecruitUsed];

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

			createFilterPagination2(charListDefault);
		}
	});
}