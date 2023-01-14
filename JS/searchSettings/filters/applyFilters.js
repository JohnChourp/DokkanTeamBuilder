function applyFilters() {
	getCharList();
	//sortDirection
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

	//select one char
	let searchOneCharDropdownValue = document.getElementsByClassName("search-one-char-dropdown-options-value");
	for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
		if (searchOneCharDropdownValue.item(i).classList.contains("checkedSearchOneCharBtn")) {
			addSearchOneCharDropdownClass(i);
		}
	}

	let dataCharType = 'data-char-type';
	let dataCharClass = 'data-char-class';
	let dataCharRarity = 'data-char-rarity';
	let dataCharEza = 'data-char-eza';
	let dataCharAwaken = 'data-char-awaken';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let dataCharEzaItems = document.querySelectorAll('[' + dataCharEza + ']');
	let dataCharAwakenItems = document.querySelectorAll('[' + dataCharAwaken + ']');
	let filterType = ["agl", "teq", "int", "str", "phy"];
	let filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
	let filterClass = ["super", "extreme"];
	let filterEza = "eza";
	let checkedTypeBtn = document.getElementsByClassName("checkedTypeBtn");
	let checkedClassBtn = document.getElementsByClassName("checkedClassBtn");
	let checkedRarityBtn = document.getElementsByClassName("checkedRarityBtn");
	let checkedEzaBtn = document.getElementsByClassName("checkedEzaBtn");
	let checkedAwakenBtn = document.getElementsByClassName("checkedAwakenBtn");
	let charList = [];

	//disappear all characters
	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "none";
	}

	//no filters
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let i = 0; i < char.length; i++) {
			char.item(i).style.display = "inline-block";
			charList[i] = char.item(i);
		}
	}

	//-------------------------------1 filter used-------------------------------
	//type
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		if (document.getElementById("agl").classList.contains("checkedTypeBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "agl") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}

		if (document.getElementById("teq").classList.contains("checkedTypeBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "teq") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}

		if (document.getElementById("int").classList.contains("checkedTypeBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "int") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}

		if (document.getElementById("str").classList.contains("checkedTypeBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "str") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}

		if (document.getElementById("phy").classList.contains("checkedTypeBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "phy") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}
	}
	//rarity
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		if (document.getElementById("n").classList.contains("checkedRarityBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "n") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}
		if (document.getElementById("r").classList.contains("checkedRarityBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "r") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}
		if (document.getElementById("sr").classList.contains("checkedRarityBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "sr") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}
		if (document.getElementById("ssr").classList.contains("checkedRarityBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "ssr") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}
		if (document.getElementById("ur").classList.contains("checkedRarityBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "ur") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}
		if (document.getElementById("lr").classList.contains("checkedRarityBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "lr") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}
	}
	//class
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		if (document.getElementById("super").classList.contains("checkedClassBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "super") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}
		if (document.getElementById("extreme").classList.contains("checkedClassBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "extreme") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}
	}
	//eza
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		if (document.getElementById("eza").classList.contains("checkedEzaBtn")) {
			for (let i = 0; i < char.length; i++) {
				if (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == "eza") {
					char.item(i).style.display = "inline-block";
					charList[i] = char.item(i);
				}
			}
		}
	}
	//-------------------------------1 filter used-------------------------------


	//------------------------------2 filters used------------------------------
	//type,rarity
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < filterRarity.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
							&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k])) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//type,class
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < filterClass.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
							&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k])) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//type,eza
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		for (let j = 0; j < filterType.length; j++) {
			if (document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
						&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}
		}
	}
	//rarity,class
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let k = 0; k < filterClass.length; k++) {
			for (let j = 0; j < filterRarity.length; j++) {
				if ((document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn"))
					&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k])
							&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//rarity,eza
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		for (let j = 0; j < filterRarity.length; j++) {
			if (document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn")) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])
						&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}
		}
	}
	//class,eza
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let j = 0; j < filterClass.length; j++) {
			if (document.getElementById(filterClass[j]).classList.contains("checkedClassBtn")) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[j])
						&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						char.item(i).style.display = "inline-block";
						charList[i] = char.item(i);
					}
				}
			}
		}
	}
	//------------------------------2 filters used------------------------------


	//------------------------------3 filters used------------------------------
	//type,rarity,class
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		for (let l = 0; l < filterClass.length; l++) {
			for (let k = 0; k < filterRarity.length; k++) {
				for (let j = 0; j < filterType.length; j++) {
					if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
						&& (document.getElementById(filterClass[l]).classList.contains("checkedClassBtn"))
						&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
						for (let i = 0; i < char.length; i++) {
							if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
								&& (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k])
								&& (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l])) {
								char.item(i).style.display = "inline-block";
								charList[i] = char.item(i);
							}
						}
					}
				}
			}
		}
	}
	//type,rarity,eza
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		for (let l = 0; l < filterRarity.length; l++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterRarity[l]).classList.contains("checkedRarityBtn"))) {
					for (let i = 0; i < dataCharEzaItems.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[l])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//type,class,eza
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let l = 0; l < filterClass.length; l++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
					&& (document.getElementById(filterClass[l]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < dataCharEzaItems.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//rarity,class,eza
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let k = 0; k < filterClass.length; k++) {
			for (let j = 0; j < filterRarity.length; j++) {
				if ((document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn"))
					&& (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < dataCharEzaItems.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])
							&& (dataCharEzaItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k])
							&& (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
							char.item(i).style.display = "inline-block";
							charList[i] = char.item(i);
						}
					}
				}
			}
		}
	}
	//------------------------------3 filters used------------------------------


	//------------------------------4 filters used------------------------------
	//type,rarity,class,eza
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		for (let l = 0; l < filterClass.length; l++) {
			for (let k = 0; k < filterRarity.length; k++) {
				for (let j = 0; j < filterType.length; j++) {
					if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn"))
						&& (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))
						&& (document.getElementById(filterClass[l]).classList.contains("checkedClassBtn"))) {
						for (let i = 0; i < dataCharEzaItems.length; i++) {
							if ((dataCharEzaItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j])
								&& (dataCharEzaItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k])
								&& (dataCharEzaItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l])
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
	//------------------------------4 filters used------------------------------


	//eza
	if (checkedEzaBtn.length == 1) {
		if (document.getElementById(filterEza).classList.contains("checkedEzaBtn")) {
			for (let i = 0; i < char.length; i++) {
				if ((char.item(i).style.display == "inline-block") && (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
					charList[i] = char.item(i);
				} else {
					delete charList[i];
				}
			}
		}
	}
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

	let characterSearchId = document.getElementById("char-search-id");
	if (characterSearchId.value.length > 0) {
		let buttonYes = document.getElementsByClassName("searchTitles").item(0);
		if (buttonYes.classList.contains("checkedTitlesnBtn")) {
			searchCharNameOrTitle(2);
			searchCharName(2);
		} else {
			searchCharNameOrTitle(1);
			searchCharName(1);
		}
	}
	addDropdownClass(localStorage.getItem("filterDisplay"));
}