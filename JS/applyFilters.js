function charDisappear(char) {
	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "none";
	}
}
function charAllAppear(char) {
	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "inline-block";
	}
}

//-----------------------filterType + other filter-------------------
function showTypeRarity(char, dataCharTypeItems, dataCharType, filterType, dataCharRarityItems, dataCharRarity, filterRarity) {
	for (let k = 0; k < filterRarity.length; k++) {
		for (let j = 0; j < filterType.length; j++) {
			if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) && (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j]) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
}
function showTypeClass(char, dataCharTypeItems, dataCharType, filterType, dataCharClassItems, dataCharClass, filterClass) {
	for (let k = 0; k < filterClass.length; k++) {
		for (let j = 0; j < filterType.length; j++) {
			if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j]) && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
}
function showTypeEza(dataCharType, filterType, dataCharEzaItems, dataCharEza, filterEza) {
	for (let j = 0; j < filterType.length; j++) {
		if (document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) {
			for (let i = 0; i < dataCharEzaItems.length; i++) {
				if ((dataCharEzaItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j]) && (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
					dataCharEzaItems.item(i).style.display = "inline-block";
				}
			}
		}
	}
}
//-----------------------filterType + other filter-------------------

//-----------------------filterClass + other filter-------------------
function showClassRarity(char, dataCharClassItems, dataCharClass, filterClass, dataCharRarityItems, dataCharRarity, filterRarity) {
	for (let k = 0; k < filterClass.length; k++) {
		for (let j = 0; j < filterRarity.length; j++) {
			if ((document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn")) && (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
				for (let i = 0; i < char.length; i++) {
					if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k]) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j])) {
						char.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
}
function showClassEza(dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza) {
	for (let j = 0; j < filterClass.length; j++) {
		if (document.getElementById(filterClass[j]).classList.contains("checkedClassBtn")) {
			for (let i = 0; i < dataCharEzaItems.length; i++) {
				if ((dataCharEzaItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[j]) && (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
					dataCharEzaItems.item(i).style.display = "inline-block";
				}
			}
		}
	}
}
//-----------------------filterClass + other filter-------------------

//-----------------------filterRarity + other filter-------------------
function showRarityEza(dataCharRarity, filterRarity, dataCharEzaItems, dataCharEza, filterEza) {
	for (let j = 0; j < filterRarity.length; j++) {
		if (document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn")) {
			for (let i = 0; i < dataCharEzaItems.length; i++) {
				if ((dataCharEzaItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j]) && (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
					dataCharEzaItems.item(i).style.display = "inline-block";
				}
			}
		}
	}
}
//-----------------------filterRarity + other filter-------------------

//----------3 filters used----------
function showTypeClassRarity(char, dataCharTypeItems, dataCharType, filterType, dataCharClassItems, dataCharClass, filterClass, dataCharRarityItems, dataCharRarity, filterRarity) {
	for (let l = 0; l < filterClass.length; l++) {
		for (let k = 0; k < filterRarity.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass[l]).classList.contains("checkedClassBtn")) && (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn"))) {
					for (let i = 0; i < char.length; i++) {
						if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j]) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k]) && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l])) {
							char.item(i).style.display = "inline-block";
						}
					}
				}
			}
		}
	}
}
function showTypeRarityEza(dataCharType, filterType, dataCharRarity, filterRarity, dataCharEzaItems, dataCharEza, filterEza) {
	for (let l = 0; l < filterRarity.length; l++) {
		for (let j = 0; j < filterType.length; j++) {
			if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) && (document.getElementById(filterRarity[l]).classList.contains("checkedRarityBtn"))) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j]) && (dataCharEzaItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[l]) && (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						dataCharEzaItems.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
}
function showTypeClassEza(dataCharType, filterType, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza) {
	for (let l = 0; l < filterClass.length; l++) {
		for (let j = 0; j < filterType.length; j++) {
			if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass[l]).classList.contains("checkedClassBtn"))) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j]) && (dataCharEzaItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l]) && (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						dataCharEzaItems.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
}
function showRarityClassEza(dataCharRarity, filterRarity, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza) {
	for (let k = 0; k < filterClass.length; k++) {
		for (let j = 0; j < filterRarity.length; j++) {
			if ((document.getElementById(filterRarity[j]).classList.contains("checkedRarityBtn")) && (document.getElementById(filterClass[k]).classList.contains("checkedClassBtn"))) {
				for (let i = 0; i < dataCharEzaItems.length; i++) {
					if ((dataCharEzaItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[j]) && (dataCharEzaItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[k]) && (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
						dataCharEzaItems.item(i).style.display = "inline-block";
					}
				}
			}
		}
	}
}
//----------3 filters used----------

//----------4 filters used----------
function showTypeRarityClassEza(dataCharType, filterType, dataCharRarity, filterRarity, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza) {
	for (let l = 0; l < filterClass.length; l++) {
		for (let k = 0; k < filterRarity.length; k++) {
			for (let j = 0; j < filterType.length; j++) {
				if ((document.getElementById(filterType[j]).classList.contains("checkedTypeBtn")) && (document.getElementById(filterRarity[k]).classList.contains("checkedRarityBtn")) && (document.getElementById(filterClass[l]).classList.contains("checkedClassBtn"))) {
					for (let i = 0; i < dataCharEzaItems.length; i++) {
						if ((dataCharEzaItems[i].getAttribute(dataCharType).toLowerCase() == filterType[j]) && (dataCharEzaItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity[k]) && (dataCharEzaItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass[l]) && (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == filterEza)) {
							dataCharEzaItems.item(i).style.display = "inline-block";
						}
					}
				}
			}
		}
	}
}
//----------4 filters used----------

function filterOk() {
	let dataCharType = 'data-char-type';
	let dataCharClass = 'data-char-class';
	let dataCharRarity = 'data-char-rarity';
	let dataCharEza = 'data-char-eza';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let dataCharEzaItems = document.querySelectorAll('[' + dataCharEza + ']');
	let char = document.getElementsByClassName("char");
	let filterType = ["agl", "teq", "int", "str", "phy"];
	let filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
	let filterClass = ["super", "extreme"];
	let filterEza = "eza";
	let checkedTypeBtn = document.getElementsByClassName("checkedTypeBtn");
	let checkedClassBtn = document.getElementsByClassName("checkedClassBtn");
	let checkedRarityBtn = document.getElementsByClassName("checkedRarityBtn");
	let checkedEzaBtn = document.getElementsByClassName("checkedEzaBtn");
	//disappear all characters
	charDisappear(char);
	//no filters
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		charAllAppear(char);
	}

	//------------------------choose one filter only---------------------
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		showType(char, dataCharTypeItems, dataCharType);
	}
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		showRarity(char, dataCharRarityItems, dataCharRarity);
	}
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		showClass(char, dataCharClassItems, dataCharClass);
	}
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		showEza(char, dataCharEzaItems, dataCharEza);
	}
	//------------------------choose one filter only---------------------

	//-----------------------filterType + other filter-------------------
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		showTypeRarity(char, dataCharTypeItems, dataCharType, filterType, dataCharRarityItems, dataCharRarity, filterRarity);
	}
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		showTypeClass(char, dataCharTypeItems, dataCharType, filterType, dataCharClassItems, dataCharClass, filterClass);
	}
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		showTypeEza(dataCharType, filterType, dataCharEzaItems, dataCharEza, filterEza);
	}
	//-----------------------filterType + other filter-------------------

	//-----------------------filterClass + other filter-------------------
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		showClassRarity(char, dataCharClassItems, dataCharClass, filterClass, dataCharRarityItems, dataCharRarity, filterRarity);
	}
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		showClassEza(dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza);
	}
	//-----------------------filterClass + other filter-------------------

	//-----------------------filterRarity + other filter-------------------
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		showRarityEza(dataCharRarity, filterRarity, dataCharEzaItems, dataCharEza, filterEza);
	}
	//-----------------------filterRarity + other filter-------------------

	//----------3 filters used----------
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		showTypeClassRarity(char, dataCharTypeItems, dataCharType, filterType, dataCharClassItems, dataCharClass, filterClass, dataCharRarityItems, dataCharRarity, filterRarity);
	}
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		showTypeRarityEza(dataCharType, filterType, dataCharRarity, filterRarity, dataCharEzaItems, dataCharEza, filterEza);
	}
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		showTypeClassEza(dataCharType, filterType, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza);
	}
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		showRarityClassEza(dataCharRarity, filterRarity, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza);
	}
	//----------3 filters used----------

	//----------4 filters used----------
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		showTypeRarityClassEza(dataCharType, filterType, dataCharRarity, filterRarity, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza);
	}
	//----------4 filters used----------
}