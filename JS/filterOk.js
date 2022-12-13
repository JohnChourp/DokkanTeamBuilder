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
	//if only classFilter used
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {
		if (document.getElementById("super").classList.contains("checkedClassBtn")) {
			showCharClass(char, dataCharClassItems, dataCharClass, "super");
		}
		if (document.getElementById("extreme").classList.contains("checkedClassBtn")) {
			showCharClass(char, dataCharClassItems, dataCharClass, "extreme");
		}
	}
	//if only classRarity used
	if ((document.getElementsByClassName("checkedRarityBtn").length > 0) && (document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0)) {
		if (document.getElementById("n").classList.contains("checkedRarityBtn")) {
			showCharRarity(char, dataCharRarityItems, dataCharRarity, "n");
		}
		if (document.getElementById("r").classList.contains("checkedRarityBtn")) {
			showCharRarity(char, dataCharRarityItems, dataCharRarity, "r");
		}
		if (document.getElementById("sr").classList.contains("checkedRarityBtn")) {
			showCharRarity(char, dataCharRarityItems, dataCharRarity, "sr");
		}
		if (document.getElementById("ssr").classList.contains("checkedRarityBtn")) {
			showCharRarity(char, dataCharRarityItems, dataCharRarity, "ssr");
		}
		if (document.getElementById("ur").classList.contains("checkedRarityBtn")) {
			showCharRarity(char, dataCharRarityItems, dataCharRarity, "ur");
		}
		if (document.getElementById("lr").classList.contains("checkedRarityBtn")) {
			showCharRarity(char, dataCharRarityItems, dataCharRarity, "lr");
		}
	}
	//if both filterType and classFilter are used
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0) && (document.getElementsByClassName("checkedRarityBtn").length == 0)) {	
		showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, "super");
		showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, "extreme");
	}


}