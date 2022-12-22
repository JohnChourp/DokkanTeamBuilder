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
function showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, filterClass) {
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
function showCharTypeAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharRarity, dataCharRarityItems, filterRarity) {
	if ((document.getElementById("agl").classList.contains("checkedTypeBtn")) && (document.getElementById(filterRarity).classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "agl") && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("teq").classList.contains("checkedTypeBtn")) && (document.getElementById(filterRarity).classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "teq") && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("int").classList.contains("checkedTypeBtn")) && (document.getElementById(filterRarity).classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "int") && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("str").classList.contains("checkedTypeBtn")) && (document.getElementById(filterRarity).classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "str") && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("phy").classList.contains("checkedTypeBtn")) && (document.getElementById(filterRarity).classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "phy") && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
}
function showCharClassAndRarityFilter(char, dataCharClassItems, dataCharClass, dataCharRarity, dataCharRarityItems, filterClass) {
	if ((document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById("n").classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "n")) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
	if ((document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById("r").classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "r")) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
	if ((document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById("sr").classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "sr")) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
	if ((document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById("ssr").classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "ssr")) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
	if ((document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById("ur").classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "ur")) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
	if ((document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById("lr").classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "lr")) {
				char.item(i).style.display = "inline-block";
			}
		}
	}
}
function showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, filterClass, filterRarity) {
	if ((document.getElementById("agl").classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById(filterRarity).classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "agl") && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("teq").classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById(filterRarity).classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "teq") && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("int").classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById(filterRarity).classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "int") && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("str").classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById(filterRarity).classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "str") && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity)) {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if ((document.getElementById("phy").classList.contains("checkedTypeBtn")) && (document.getElementById(filterClass).classList.contains("checkedClassBtn")) && (document.getElementById(filterRarity).classList.contains("checkedRarityBtn"))) {
		for (let i = 0; i < char.length; i++) {
			if ((dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "phy") && (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == filterClass) && (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == filterRarity)) {
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
	//no filters
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		charAllAppear(char);
	}
	//filterType
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		showCharTypeFilter(char, dataCharTypeItems, dataCharType);
	}
	//filterClass
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		showCharClass(char, dataCharClassItems, dataCharClass);
	}
	//filterRarity
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
		showCharRarity(char, dataCharRarityItems, dataCharRarity);
	}
	//filterType,filterClass
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, "super");
		showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, "extreme");
	}
	//filterType,filterRarity
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length == 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
		showCharTypeAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharRarity, dataCharRarityItems, "n");
		showCharTypeAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharRarity, dataCharRarityItems, "r");
		showCharTypeAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharRarity, dataCharRarityItems, "sr");
		showCharTypeAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharRarity, dataCharRarityItems, "ssr");
		showCharTypeAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharRarity, dataCharRarityItems, "ur");
		showCharTypeAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharRarity, dataCharRarityItems, "lr");
	}
	//filterClass,filterRarity
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
		showCharClassAndRarityFilter(char, dataCharClassItems, dataCharClass, dataCharRarity, dataCharRarityItems, "super");
		showCharClassAndRarityFilter(char, dataCharClassItems, dataCharClass, dataCharRarity, dataCharRarityItems, "extreme");
	}
	//filterType,filterClass,filterRarity
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length > 0)) {
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "super", "n");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "super", "r");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "super", "sr");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "super", "ssr");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "super", "ur");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "super", "lr");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "extreme", "n");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "extreme", "r");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "extreme", "sr");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "extreme", "ssr");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "extreme", "ur");
		showCharTypeAndClassAndRarityFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, dataCharRarity, dataCharRarityItems, "extreme", "lr");
	}
}