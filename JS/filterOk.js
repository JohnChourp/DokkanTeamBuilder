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

function showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems) {
	let filterClass;

	if (document.getElementById("super").classList.contains("checkedClassBtn")) {
		filterClass = "super";
	}

	if (document.getElementById("extreme").classList.contains("checkedClassBtn")) {
		filterClass = "extreme";
	}

	if ((document.getElementById("agl").classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass).classList.contains("checkedClassBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "agl") && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("teq").classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass).classList.contains("checkedClassBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "teq") && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("int").classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass).classList.contains("checkedClassBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "int") && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("str").classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass).classList.contains("checkedClassBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "str") && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("phy").classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass).classList.contains("checkedClassBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "phy") && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
}

function filterOk() {
	let dataCharType = 'data-char-type';
	let dataCharClass = 'data-char-class';
	let dataCharRarity = 'data-char-rarity';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let dataCharRarityItems = document.querySelectorAll('[' + dataCharRarity + ']');
	let char = document.getElementsByClassName("char");

	//disappear all characters
	charDisappear(char);
	//if no filters used
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		charAllAppear(char);
	}
	//if only filterType used
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		showCharTypeFilter(char, dataCharTypeItems, dataCharType);
	}
	//if only filterClass used
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		showCharClass(char, dataCharClassItems, dataCharClass);
	}
	//if only filterRarity used
	if ((document.getElementsByClassName("checkedRarityBtn").length > 0) && (document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0)) {
		showCharRarity(char, dataCharRarityItems, dataCharRarity);
	}
	//if both filterType and filterClass are used
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems);
	}
}