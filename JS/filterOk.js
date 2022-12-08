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
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
	let char = document.getElementsByClassName("char");

	//disappear all characters
	charDisappear(char);
	//if only filterType used
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length == 0)) {
		showCharTypeFilter(char, dataCharTypeItems, dataCharType);
	}
	//if only classFilter used
	if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0)) {
		if (document.getElementById("super").classList.contains("checkedClassBtn")) {
			showCharClass(char, dataCharClassItems, dataCharClass, "super");
		}
		if (document.getElementById("extreme").classList.contains("checkedClassBtn")) {
			showCharClass(char, dataCharClassItems, dataCharClass, "extreme");
		}
	}
	//if both filterType and classFilter are used
	if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0)) {	
		showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, "super");
		showCharTypeAndClassFilter(char, dataCharTypeItems, dataCharType, dataCharClass, dataCharClassItems, "extreme");
	}

}