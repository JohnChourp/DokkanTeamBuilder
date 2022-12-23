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
//filterType,filterRarity
function showCharTypeAndRarityFilter(char, dataCharTypeItems, dataCharType, filterType, dataCharRarityItems, dataCharRarity, filterRarity) {
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
//filterType,filterClass
function showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, filterType, dataCharClassItems, dataCharClass, filterClass) {
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
//filterType,filterEza
function showCharTypeAndEzaFilter(dataCharType, filterType, dataCharEzaItems, dataCharEza, filterEza) {
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
//filterClass,filterRarity
function showCharClassAndRarityFilter(char, dataCharClassItems, dataCharClass, filterClass, dataCharRarityItems, dataCharRarity, filterRarity) {
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
//filterClass,filterEza
function showCharClassAndEzaFilter(dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza) {
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
//filteRarity,filterEza
function showCharRarityAndEzaFilter(dataCharRarity, filterRarity, dataCharEzaItems, dataCharEza, filterEza) {
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
//filterType,filterRarity,filterClass
function showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, filterType, dataCharClassItems, dataCharClass, filterClass, dataCharRarityItems, dataCharRarity, filterRarity) {
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
//filterType,filterRarity,filterEza
function showCharTypeAndRarityAndEzaFilter(dataCharType, filterType, dataCharRarity, filterRarity, dataCharEzaItems, dataCharEza, filterEza) {
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
//filterType,filterClass,filterEza
function showCharTypeAndClassAndEzaFilter(dataCharType, filterType, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza) {
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
//filterRarity,filterClass,filterEza
function showCharRarityAndClassAndEzaFilter(dataCharRarity, filterRarity, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza) {
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
function showCharTypeAndRarityAndClassAndEzaFilter(dataCharType, filterType, dataCharRarity, filterRarity, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza) {
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
	//filterType
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		showCharTypeFilter(char, dataCharTypeItems, dataCharType);
	}
	//filterRarity
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		showCharRarity(char, dataCharRarityItems, dataCharRarity);
	}
	//filterClass
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		showCharClass(char, dataCharClassItems, dataCharClass);
	}
	//filterEza
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		showCharEza(char, dataCharEzaItems, dataCharEza);
	}
	//------------------------choose one filter only---------------------

	//-----------------------filterType + other filter-------------------
	//filterType,filterRarity
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length == 0)) {
		showCharTypeAndRarityFilter(char, dataCharTypeItems, dataCharType, filterType, dataCharRarityItems, dataCharRarity, filterRarity);
	}
	//filterType,filterClass
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, filterType, dataCharClassItems, dataCharClass, filterClass);
	}
	//filterType,filterEza
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		showCharTypeAndEzaFilter(dataCharType, filterType, dataCharEzaItems, dataCharEza, filterEza);
	}
	//-----------------------filterType + other filter-------------------

	//-----------------------filterClass + other filter-------------------
	//filterClass,filterRarity
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		showCharClassAndRarityFilter(char, dataCharClassItems, dataCharClass, filterClass, dataCharRarityItems, dataCharRarity, filterRarity);
	}
	//filterClass,filterEza
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		showCharClassAndEzaFilter(dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza);
	}
	//-----------------------filterClass + other filter-------------------

	//-----------------------filterRarity + other filter-------------------
	//filteRarity,filterEza
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		showCharRarityAndEzaFilter(dataCharRarity, filterRarity, dataCharEzaItems, dataCharEza, filterEza);
	}
	//-----------------------filterRarity + other filter-------------------

	//----------3 filters used----------
	//filterType,filterRarity,filterClass
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length == 0)) {
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, filterType, dataCharClassItems, dataCharClass, filterClass, dataCharRarityItems, dataCharRarity, filterRarity);
	}
	//filterType,filterRarity,filterEza
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length == 0) && (checkedEzaBtn.length > 0)) {
		showCharTypeAndRarityAndEzaFilter(dataCharType, filterType, dataCharRarity, filterRarity, dataCharEzaItems, dataCharEza, filterEza);
	}
	//filterType,filterClass,filterEza
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length == 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		showCharTypeAndClassAndEzaFilter(dataCharType, filterType, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza);
	}
	//filterRarity,filterClass,filterEza
	if ((checkedTypeBtn.length == 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		showCharRarityAndClassAndEzaFilter(dataCharRarity, filterRarity, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza);
	}
	//----------3 filters used----------

	//----------4 filters used----------
	//filterType,filterRarity,filterClass,filterEza
	if ((checkedTypeBtn.length > 0) && (checkedRarityBtn.length > 0) && (checkedClassBtn.length > 0) && (checkedEzaBtn.length > 0)) {
		showCharTypeAndRarityAndClassAndEzaFilter(dataCharType, filterType, dataCharRarity, filterRarity, dataCharClass, filterClass, dataCharEzaItems, dataCharEza, filterEza);
	}
	//----------4 filters used----------
}