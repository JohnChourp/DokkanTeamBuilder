function searchCharName(nameOrTitle) {
	let characterSearchId = document.getElementById("char-search-id");
	characterSearchId.addEventListener("keypress", function (event) {
		// If the user presses the "Enter" key on the keyboard
		if (event.key === "Enter") {
			getCharList();
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
			createFilterPagination(charList, localStorage.getItem("charsPerPageNumItem"));
		}
	});
}

function searchCharNameOrTitle(nameOrTitle) {
	getCharList();
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
	createFilterPagination(charList, localStorage.getItem("charsPerPageNumItem"));
}