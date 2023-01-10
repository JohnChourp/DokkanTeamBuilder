function searchCharName(nameOrTitle) {
	let characterSearchId = document.getElementById("char-search-id");
	characterSearchId.addEventListener("keypress", function (event) {
		// If the user presses the "Enter" key on the keyboard
		if (event.key === "Enter") {
			charListSaved = [];
			//retreive characters from local storage
			let charList_dataCharNameItems = JSON.parse(localStorage.getItem('charList_dataCharNameItems'));
			let charList_dataCharTitleItems = JSON.parse(localStorage.getItem('charList_dataCharTitleItems'));
			let charList_dataCharTypeItems = JSON.parse(localStorage.getItem('charList_dataCharTypeItems'));
			let charList_dataCharRarityItems = JSON.parse(localStorage.getItem('charList_dataCharRarityItems'));
			let charList_dataCharClassItems = JSON.parse(localStorage.getItem('charList_dataCharClassItems'));
			let charList_dataCharEzaItems = JSON.parse(localStorage.getItem('charList_dataCharEzaItems'));
			let charList_dataCharidItems = JSON.parse(localStorage.getItem('charList_dataCharidItems'));
			let charList_dataCharHpItems = JSON.parse(localStorage.getItem('charList_dataCharHpItems'));
			let charList_dataCharAttackItems = JSON.parse(localStorage.getItem('charList_dataCharAttackItems'));
			let charList_dataCharDefenseItems = JSON.parse(localStorage.getItem('charList_dataCharDefenseItems'));
			let charList_dataCharCostItems = JSON.parse(localStorage.getItem('charList_dataCharCostItems'));
			let charList_dataCharMaxLevelItems = JSON.parse(localStorage.getItem('charList_dataCharMaxLevelItems'));
			let charList_dataCharSuperAtkLevelItems = JSON.parse(localStorage.getItem('charList_dataCharSuperAtkLevelItems'));
			let charList_dataCharRecruitItems = JSON.parse(localStorage.getItem('charList_dataCharRecruitItems'));
			let charList_dataCharAwakenItems = JSON.parse(localStorage.getItem('charList_dataCharAwakenItems'));
			let charList_dataCharReleaseItems = JSON.parse(localStorage.getItem('charList_dataCharReleaseItems'));
			let charList_dataCharSuperAtkTypeItems = JSON.parse(localStorage.getItem('charList_dataCharSuperAtkTypeItems'));
			let charList_dataCharLinksItems = JSON.parse(localStorage.getItem('charList_dataCharLinksItems'));
			let charList_dataCharCategoriesItems = JSON.parse(localStorage.getItem('charList_dataCharCategoriesItems'));

			//put characters in temporary charList
			for (let i = 0; i < charList_dataCharNameItems.length; i++) {
				let char_div = document.createElement("div");
				char_div.classList.add("char");
				setAttributes(char_div,
					"data-char-name", charList_dataCharNameItems[i],
					"data-char-title", charList_dataCharTitleItems[i],
					"data-char-type", charList_dataCharTypeItems[i],
					"data-char-rarity", charList_dataCharRarityItems[i],
					"data-char-class", charList_dataCharClassItems[i],
					"data-char-eza", charList_dataCharEzaItems[i],
					"data-char-id", charList_dataCharidItems[i],
					"data-char-hp", charList_dataCharHpItems[i],
					"data-char-attack", charList_dataCharAttackItems[i],
					"data-char-defense", charList_dataCharDefenseItems[i],
					"data-char-cost", charList_dataCharCostItems[i],
					"data-char-max-level", charList_dataCharMaxLevelItems[i],
					"data-char-super-atk-level", charList_dataCharSuperAtkLevelItems[i],
					"data-char-recruit", charList_dataCharRecruitItems[i],
					"data-char-awaken", charList_dataCharAwakenItems[i],
					"data-char-release", charList_dataCharReleaseItems[i],
					"data-char-super-atk-type", charList_dataCharSuperAtkTypeItems[i],
					"data-char-links", charList_dataCharLinksItems[i],
					"data-char-categories", charList_dataCharCategoriesItems[i]);
				charListSaved[i] = char_div;
			}

			//add all characters
			let char_container = document.getElementById("char_container");
			char_container.innerHTML = "";
			for (let j = 0; j < charListSaved.length; j++) {
				char_container.appendChild(charListSaved[j]);
			}
			addChar();

			let char = document.getElementsByClassName("char");
			let checkedDirectionBtn = document.getElementsByClassName("checkedDirectionBtn");
			if (checkedDirectionBtn.length == 1) {
				let temp_char = [];
				for (let i = 0; i < char.length; i++) {
					temp_char[i] = char.item(i);
				}
				let charLength = char.length;
				char_container.innerHTML = "";
				for (let i = charLength - 1; i > -1; i--) {
					char_container.appendChild(temp_char[i]);
				}
			}
			let dataCharName = 'data-char-name';
			let dataCharTitle = 'data-char-title';
			let dataCharType = 'data-char-type';
			let dataCharClass = 'data-char-class';
			let dataCharRarity = 'data-char-rarity';
			let dataCharEza = 'data-char-eza';
			let dataCharAwaken = 'data-char-awaken';

			let filterType = ["agl", "teq", "int", "str", "phy"];
			let filterClass = ["super", "extreme"];
			let filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
			let filterEza = "eza";

			let dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
			let dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');
			let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
			let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
			let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
			let dataCharEzaItems = document.querySelectorAll('[' + dataCharEza + ']');
			let dataCharAwakenItems = document.querySelectorAll('[' + dataCharAwaken + ']');

			let characterSearchId = document.getElementById("char-search-id");

			let checkedTypeBtn = document.getElementsByClassName("checkedTypeBtn");
			let checkedClassBtn = document.getElementsByClassName("checkedClassBtn");
			let checkedRarityBtn = document.getElementsByClassName("checkedRarityBtn");
			let checkedEzaBtn = document.getElementsByClassName("checkedEzaBtn");
			let checkedAwakenBtn = document.getElementsByClassName("checkedAwakenBtn");

			let dataCharNameOrTitleItems, dataCharNameOrTitle;
			let charList = [];

			// Cancel the default action, if needed
			event.preventDefault();
			if (nameOrTitle == 1) {
				dataCharNameOrTitleItems = dataCharNameItems;
				dataCharNameOrTitle = dataCharName;
			}
			if (nameOrTitle == 2) {
				dataCharNameOrTitleItems = dataCharTitleItems;
				dataCharNameOrTitle = dataCharTitle;
			}
			//disappear all characters
			for (let i = 0; i < char.length; i++) {
				char.item(i).style.display = "none";
			}
			//no filters
			if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
				for (let i = 0; i < char.length; i++) {
					if (dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}

			//-----------------------1 filter used-------------------
			//type
			if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
				for (let j = 0; j < filterType.length; j++) {
					if (document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
								&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])) {
								char.item(i).style.display = "inline-block";
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
			//class
			if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
				for (let j = 0; j < filterClass.length; j++) {
					if (document.getElementById(filterClass[j]).classList.contains("checkedClassBtn")) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
								&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[j])) {
								char.item(i).style.display = "inline-block";
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
			//rarity
			if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
				for (let j = 0; j < filterRarity.length; j++) {
					if (document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn")) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
								&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[j])) {
								char.item(i).style.display = "inline-block";
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
			//eza
			if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}
			//-----------------------1 filter used-------------------


			//------------------------2 filters used------------------------
			//type,class
			if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
				for (let k = 0; k < filterClass.length; k++) {
					for (let j = 0; j < filterType.length; j++) {
						if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
							&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
							for (let i = 0; i < char.length; i++) {
								if ((dataCharNameOrTitleItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
									&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])
									&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[k])) {
									char.item(i).style.display = "inline-block";
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
			//type,rarity
			if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
				for (let k = 0; k < filterRarity.length; k++) {
					for (let j = 0; j < filterType.length; j++) {
						if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
							&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
							for (let i = 0; i < char.length; i++) {
								if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
									&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])
									&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[k])) {
									char.item(i).style.display = "inline-block";
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
			//type,eza
			if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
				for (let j = 0; j < filterType.length; j++) {
					if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))) {
						for (let i = 0; i < dataCharEzaItems.length; i++) {
							if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
								&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
								char.item(i).style.display = "inline-block";
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
			//class,rarity
			if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
				for (let k = 0; k < filterRarity.length; k++) {
					for (let j = 0; j < filterClass.length; j++) {
						if ((document.getElementById(filterClass[j]).classList.contains("checkedClassBtn"))
							&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
							for (let i = 0; i < char.length; i++) {
								if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
									&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[j])
									&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[k])) {
									char.item(i).style.display = "inline-block";
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
			//class,eza
			if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
				for (let j = 0; j < filterClass.length; j++) {
					if ((document.getElementById(filterClass[j]).classList.contains("checkedClassBtn"))) {
						for (let i = 0; i < dataCharEzaItems.length; i++) {
							if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
								&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[j])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
								char.item(i).style.display = "inline-block";
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
			//rarity,eza
			if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
				for (let j = 0; j < filterRarity.length; j++) {
					if ((document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn"))) {
						for (let i = 0; i < dataCharEzaItems.length; i++) {
							if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
								&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[j])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
								char.item(i).style.display = "inline-block";
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
			//------------------------2 filters used------------------------


			//------------------------3 filters used------------------------
			//type,class,rarity
			if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
				for (let l = 0; l < filterRarity.length; l++) {
					for (let k = 0; k < filterClass.length; k++) {
						for (let j = 0; j < filterType.length; j++) {
							if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
								&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))
								&& (document.getElementById(filterRarity[l]).classList.contains("checkedRarityBtn"))) {
								for (let i = 0; i < char.length; i++) {
									if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
										&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])
										&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[k])
										&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[l])) {
										char.item(i).style.display = "inline-block";
										charList[i] = char.item(i);
									}
								}
							}
						}
					}
				}
			}
			//type,class,eza
			if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
				for (let k = 0; k < filterClass.length; k++) {
					for (let j = 0; j < filterType.length; j++) {
						if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
							&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
							for (let i = 0; i < dataCharEzaItems.length; i++) {
								if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
									&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
									&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[k])
									&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
									char.item(i).style.display = "inline-block";
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
			//type,rarity,eza
			if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
				for (let k = 0; k < filterRarity.length; k++) {
					for (let j = 0; j < filterType.length; j++) {
						if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
							&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
							for (let i = 0; i < dataCharEzaItems.length; i++) {
								if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
									&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
									&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[k])
									&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
									char.item(i).style.display = "inline-block";
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
			//class,rarity,eza
			if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
				for (let k = 0; k < filterClass.length; k++) {
					for (let j = 0; j < filterRarity.length; j++) {
						if ((document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn"))
							&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
							for (let i = 0; i < dataCharEzaItems.length; i++) {
								if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
									&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[j])
									&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[k])
									&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
									char.item(i).style.display = "inline-block";
									charList[i] = char.item(i);
								}
							}
						}
					}
				}
			}
			//------------------------3 filters used------------------------


			//----------4 filters used----------
			//type,class,rarity,eza
			if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
				for (let l = 0; l < filterRarity.length; l++) {
					for (let k = 0; k < filterClass.length; k++) {
						for (let j = 0; j < filterType.length; j++) {
							if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
								&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))
								&& (document.getElementById(filterRarity[l]).classList.contains("checkedRarityBtn"))) {
								for (let i = 0; i < dataCharEzaItems.length; i++) {
									if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
										&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
										&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[k])
										&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[l])
										&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
										char.item(i).style.display = "inline-block";
										charList[i] = char.item(i);
									}
								}
							}
						}
					}
				}
			}
			//----------4 filters used----------
			//dokkan-awakened
			if ((checkedAwakenBtn.length == 1)) {
				if (document.getElementById("notDokkanAwakened").classList.contains("checkedAwakenBtn")) {
					for (let i = 0; i < char.length; i++) {
						if ((char.item(i).style.display == "inline-block") && (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "not-dokkan-awakened")) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						} else {
							delete charList[i];
						}
					}
				}

				if (document.getElementById("preDokkanAwakened").classList.contains("checkedAwakenBtn")) {
					for (let i = 0; i < char.length; i++) {
						if ((char.item(i).style.display == "inline-block") && (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "pre-dokkan-awakened")) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						} else {
							delete charList[i];
						}
					}
				}

				if (document.getElementById("dokkanAwakened").classList.contains("checkedAwakenBtn")) {
					for (let i = 0; i < char.length; i++) {
						if ((char.item(i).style.display == "inline-block") && (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "dokkan-awakened")) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						} else {
							delete charList[i];
						}
					}
				}
			}
			if ((checkedAwakenBtn.length == 2)) {
				if (document.getElementById("notDokkanAwakened").classList.contains("checkedAwakenBtn") && document.getElementById("preDokkanAwakened").classList.contains("checkedAwakenBtn")) {
					for (let i = 0; i < char.length; i++) {
						if ((char.item(i).style.display == "inline-block")
							&& ((dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "not-dokkan-awakened")
								|| (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "pre-dokkan-awakened"))) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						} else {
							delete charList[i];
						}
					}
				}

				if (document.getElementById("notDokkanAwakened").classList.contains("checkedAwakenBtn") && document.getElementById("dokkanAwakened").classList.contains("checkedAwakenBtn")) {
					for (let i = 0; i < char.length; i++) {
						if ((char.item(i).style.display == "inline-block")
							&& ((dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "not-dokkan-awakened")
								|| (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "dokkan-awakened"))) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						} else {
							delete charList[i];
						}
					}
				}

				if (document.getElementById("preDokkanAwakened").classList.contains("checkedAwakenBtn") && document.getElementById("dokkanAwakened").classList.contains("checkedAwakenBtn")) {
					for (let i = 0; i < char.length; i++) {
						if ((char.item(i).style.display == "inline-block")
							&& ((dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "pre-dokkan-awakened")
								|| (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "dokkan-awakened"))) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						} else {
							delete charList[i];
						}
					}
				}
			}
			charList.clean(undefined);
			createFilterPagination(charList);
		}
	});
}

function searchCharNameOrTitle(nameOrTitle) {
	charListSaved = [];
	//retreive characters from local storage
	let charList_dataCharNameItems = JSON.parse(localStorage.getItem('charList_dataCharNameItems'));
	let charList_dataCharTitleItems = JSON.parse(localStorage.getItem('charList_dataCharTitleItems'));
	let charList_dataCharTypeItems = JSON.parse(localStorage.getItem('charList_dataCharTypeItems'));
	let charList_dataCharRarityItems = JSON.parse(localStorage.getItem('charList_dataCharRarityItems'));
	let charList_dataCharClassItems = JSON.parse(localStorage.getItem('charList_dataCharClassItems'));
	let charList_dataCharEzaItems = JSON.parse(localStorage.getItem('charList_dataCharEzaItems'));
	let charList_dataCharidItems = JSON.parse(localStorage.getItem('charList_dataCharidItems'));
	let charList_dataCharHpItems = JSON.parse(localStorage.getItem('charList_dataCharHpItems'));
	let charList_dataCharAttackItems = JSON.parse(localStorage.getItem('charList_dataCharAttackItems'));
	let charList_dataCharDefenseItems = JSON.parse(localStorage.getItem('charList_dataCharDefenseItems'));
	let charList_dataCharCostItems = JSON.parse(localStorage.getItem('charList_dataCharCostItems'));
	let charList_dataCharMaxLevelItems = JSON.parse(localStorage.getItem('charList_dataCharMaxLevelItems'));
	let charList_dataCharSuperAtkLevelItems = JSON.parse(localStorage.getItem('charList_dataCharSuperAtkLevelItems'));
	let charList_dataCharRecruitItems = JSON.parse(localStorage.getItem('charList_dataCharRecruitItems'));
	let charList_dataCharAwakenItems = JSON.parse(localStorage.getItem('charList_dataCharAwakenItems'));
	let charList_dataCharReleaseItems = JSON.parse(localStorage.getItem('charList_dataCharReleaseItems'));
	let charList_dataCharSuperAtkTypeItems = JSON.parse(localStorage.getItem('charList_dataCharSuperAtkTypeItems'));
	let charList_dataCharLinksItems = JSON.parse(localStorage.getItem('charList_dataCharLinksItems'));
	let charList_dataCharCategoriesItems = JSON.parse(localStorage.getItem('charList_dataCharCategoriesItems'));

	//put characters in temporary charList
	for (let i = 0; i < charList_dataCharNameItems.length; i++) {
		let char_div = document.createElement("div");
		char_div.classList.add("char");
		setAttributes(char_div,
			"data-char-name", charList_dataCharNameItems[i],
			"data-char-title", charList_dataCharTitleItems[i],
			"data-char-type", charList_dataCharTypeItems[i],
			"data-char-rarity", charList_dataCharRarityItems[i],
			"data-char-class", charList_dataCharClassItems[i],
			"data-char-eza", charList_dataCharEzaItems[i],
			"data-char-id", charList_dataCharidItems[i],
			"data-char-hp", charList_dataCharHpItems[i],
			"data-char-attack", charList_dataCharAttackItems[i],
			"data-char-defense", charList_dataCharDefenseItems[i],
			"data-char-cost", charList_dataCharCostItems[i],
			"data-char-max-level", charList_dataCharMaxLevelItems[i],
			"data-char-super-atk-level", charList_dataCharSuperAtkLevelItems[i],
			"data-char-recruit", charList_dataCharRecruitItems[i],
			"data-char-awaken", charList_dataCharAwakenItems[i],
			"data-char-release", charList_dataCharReleaseItems[i],
			"data-char-super-atk-type", charList_dataCharSuperAtkTypeItems[i],
			"data-char-links", charList_dataCharLinksItems[i],
			"data-char-categories", charList_dataCharCategoriesItems[i]);
		charListSaved[i] = char_div;
	}

	//add all characters
	let char_container = document.getElementById("char_container");
	char_container.innerHTML = "";
	for (let j = 0; j < charListSaved.length; j++) {
		char_container.appendChild(charListSaved[j]);
	}
	addChar();

	let char = document.getElementsByClassName("char");
	let checkedDirectionBtn = document.getElementsByClassName("checkedDirectionBtn");
	if (checkedDirectionBtn.length == 1) {
		let temp_char = [];
		for (let i = 0; i < char.length; i++) {
			temp_char[i] = char.item(i);
		}
		let charLength = char.length;
		char_container.innerHTML = "";
		for (let i = charLength - 1; i > -1; i--) {
			char_container.appendChild(temp_char[i]);
		}
	}
	let dataCharName = 'data-char-name';
	let dataCharTitle = 'data-char-title';
	let dataCharType = 'data-char-type';
	let dataCharClass = 'data-char-class';
	let dataCharRarity = 'data-char-rarity';
	let dataCharEza = 'data-char-eza';
	let dataCharAwaken = 'data-char-awaken';

	let filterType = ["agl", "teq", "int", "str", "phy"];
	let filterClass = ["super", "extreme"];
	let filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
	let filterEza = "eza";

	let dataCharNameItems = document.querySelectorAll('[' + dataCharName + ']');
	let dataCharTitleItems = document.querySelectorAll('[' + dataCharTitle + ']');
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let dataCharEzaItems = document.querySelectorAll('[' + dataCharEza + ']');
	let dataCharAwakenItems = document.querySelectorAll('[' + dataCharAwaken + ']');

	let characterSearchId = document.getElementById("char-search-id");

	let checkedTypeBtn = document.getElementsByClassName("checkedTypeBtn");
	let checkedClassBtn = document.getElementsByClassName("checkedClassBtn");
	let checkedRarityBtn = document.getElementsByClassName("checkedRarityBtn");
	let checkedEzaBtn = document.getElementsByClassName("checkedEzaBtn");
	let checkedAwakenBtn = document.getElementsByClassName("checkedAwakenBtn");

	let dataCharNameOrTitleItems, dataCharNameOrTitle;
	let charList = [];
	if (nameOrTitle == 1) {
		dataCharNameOrTitleItems = dataCharNameItems;
		dataCharNameOrTitle = dataCharName;
	}
	if (nameOrTitle == 2) {
		dataCharNameOrTitleItems = dataCharTitleItems;
		dataCharNameOrTitle = dataCharTitle;
	}
	//disappear all characters
	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "none";
	}
	//no filters
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
				char.item(i).style.display = "inline-block";
				charList[i] = char.item(i);
			}
		}
	}

	//-----------------------1 filter used-------------------
	//type
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let j = 0; j < filterType.length; j++) {
			if (document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}
		}
	}
	//class
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let j = 0; j < filterClass.length; j++) {
			if (document.getElementById(filterClass[j]).classList.contains("checkedClassBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[j])) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}
		}
	}
	//rarity
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let j = 0; j < filterRarity.length; j++) {
			if (document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn")) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[j])) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}
		}
	}
	//eza
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		for (let i = 0; i < dataCharEzaItems.length; i++) {
			if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
				&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
				char.item(i).style.display = "inline-block";
				charList[i] = char.item(i);
			}
		}
	}
	//-----------------------1 filter used-------------------


	//------------------------2 filters used------------------------
	//type,class
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < filterClass.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharNameOrTitleItems[i].getAttribute(dataCharName).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])
							&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[k])) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//type,rarity
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < filterRarity.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])
							&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[k])) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//type,eza
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		for (let j = 0; j < filterType.length; j++) {
			if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
						&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}
		}
	}
	//class,rarity
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < filterRarity.length; k++) {
			for (let j = 0; j < filterClass.length; j++) {
				if ((document.getElementById(filterClass[j]).classList.contains("checkedClassBtn"))
					&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[j])
							&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[k])) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//class,eza
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		for (let j = 0; j < filterClass.length; j++) {
			if ((document.getElementById(filterClass[j]).classList.contains("checkedClassBtn"))) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[j])
						&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}
		}
	}
	//rarity,eza
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let j = 0; j < filterRarity.length; j++) {
			if ((document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn"))) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
						&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[j])
						&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}
		}
	}
	//------------------------2 filters used------------------------


	//------------------------3 filters used------------------------
	//type,class,rarity
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let l = 0; l < filterRarity.length; l++) {
			for (let k = 0; k < filterClass.length; k++) {
				for (let j = 0; j < filterType.length; j++) {
					if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
						&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))
						&& (document.getElementById(filterRarity[l]).classList.contains("checkedRarityBtn"))) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
								&& (dataCharTypeItems[i].getAttribute(dataCharType) == filterType[j])
								&& (dataCharClassItems[i].getAttribute(dataCharClass) == filterClass[k])
								&& (dataCharRarityItems[i].getAttribute(dataCharRarity) == filterRarity[l])) {
								char.item(i).style.display = "inline-block";
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
	}
	//type,class,eza
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		for (let k = 0; k < filterClass.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < dataCharEzaItems.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[k])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//type,rarity,eza
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let k = 0; k < filterRarity.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
					for (let i = 0; i < dataCharEzaItems.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[k])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//class,rarity,eza
	if ((checkedTypeBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let k = 0; k < filterClass.length; k++) {
			for (let j = 0; j < filterRarity.length; j++) {
				if ((document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn"))
					&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < dataCharEzaItems.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
							&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[k])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//------------------------3 filters used------------------------


	//----------4 filters used----------
	//type,class,rarity,eza
	if ((checkedTypeBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let l = 0; l < filterRarity.length; l++) {
			for (let k = 0; k < filterClass.length; k++) {
				for (let j = 0; j < filterType.length; j++) {
					if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
						&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))
						&& (document.getElementById(filterRarity[l]).classList.contains("checkedRarityBtn"))) {
						for (let i = 0; i < dataCharEzaItems.length; i++) {
							if ((dataCharEzaItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0)
								&& (dataCharEzaItems[i].getAttribute(dataCharType) == filterType[j])
								&& (dataCharEzaItems[i].getAttribute(dataCharClass) == filterClass[k])
								&& (dataCharEzaItems[i].getAttribute(dataCharRarity) == filterRarity[l])
								&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
								char.item(i).style.display = "inline-block";
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
	}
	//----------4 filters used----------
	//dokkan-awakened
	if ((checkedAwakenBtn.length == 1)) {
		if (document.getElementById("notDokkanAwakened").classList.contains("checkedAwakenBtn")) {
			for (let i = 0; i < char.length; i++) {
				if ((char.item(i).style.display == "inline-block") && (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "not-dokkan-awakened")) {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				} else {
					delete charList[i];
				}
			}
		}

		if (document.getElementById("preDokkanAwakened").classList.contains("checkedAwakenBtn")) {
			for (let i = 0; i < char.length; i++) {
				if ((char.item(i).style.display == "inline-block") && (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "pre-dokkan-awakened")) {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				} else {
					delete charList[i];
				}
			}
		}

		if (document.getElementById("dokkanAwakened").classList.contains("checkedAwakenBtn")) {
			for (let i = 0; i < char.length; i++) {
				if ((char.item(i).style.display == "inline-block") && (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "dokkan-awakened")) {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				} else {
					delete charList[i];
				}
			}
		}
	}
	if ((checkedAwakenBtn.length == 2)) {
		if (document.getElementById("notDokkanAwakened").classList.contains("checkedAwakenBtn") && document.getElementById("preDokkanAwakened").classList.contains("checkedAwakenBtn")) {
			for (let i = 0; i < char.length; i++) {
				if ((char.item(i).style.display == "inline-block")
					&& ((dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "not-dokkan-awakened")
						|| (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "pre-dokkan-awakened"))) {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				} else {
					delete charList[i];
				}
			}
		}

		if (document.getElementById("notDokkanAwakened").classList.contains("checkedAwakenBtn") && document.getElementById("dokkanAwakened").classList.contains("checkedAwakenBtn")) {
			for (let i = 0; i < char.length; i++) {
				if ((char.item(i).style.display == "inline-block")
					&& ((dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "not-dokkan-awakened")
						|| (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "dokkan-awakened"))) {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				} else {
					delete charList[i];
				}
			}
		}

		if (document.getElementById("preDokkanAwakened").classList.contains("checkedAwakenBtn") && document.getElementById("dokkanAwakened").classList.contains("checkedAwakenBtn")) {
			for (let i = 0; i < char.length; i++) {
				if ((char.item(i).style.display == "inline-block")
					&& ((dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "pre-dokkan-awakened")
						|| (dataCharAwakenItems[i].getAttribute(dataCharAwaken).toLowerCase() == "dokkan-awakened"))) {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				} else {
					delete charList[i];
				}
			}
		}
	}
	charList.clean(undefined);
	createFilterPagination(charList);
}