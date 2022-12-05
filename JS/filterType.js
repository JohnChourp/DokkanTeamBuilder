function typeDisappearFilter(char) {
	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "none";
	}
}

function showCharAllFilter(char, dataCharTypeItems, dataCharType) {
	if (document.getElementById("agl").classList.contains("checkedTypeBtn")) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "agl") {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if (document.getElementById("int").classList.contains("checkedTypeBtn")) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "int") {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if (document.getElementById("phy").classList.contains("checkedTypeBtn")) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "phy") {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if (document.getElementById("str").classList.contains("checkedTypeBtn")) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "str") {
				char.item(i).style.display = "inline-block";
			}
		}
	}

	if (document.getElementById("teq").classList.contains("checkedTypeBtn")) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "teq") {
				char.item(i).style.display = "inline-block";
			}
		}
	}
}

function aglFilter() {
	let dataCharType = 'data-char-type';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let char = document.getElementsByClassName("char");

	if (document.getElementById("agl").classList.contains("checkedTypeBtn")) {
		document.getElementById("agl").classList.remove("checkedTypeBtn");
	} else {
		document.getElementById("agl").classList.add("checkedTypeBtn");
	}

	typeDisappearFilter(char);
	showCharAllFilter(char, dataCharTypeItems, dataCharType);

	if (document.getElementsByClassName("checkedTypeBtn").length == 0) {
		for (let i = 0; i < char.length; i++) {
			char.item(i).style.display = "inline-block";
		}
	}
}

function intFilter() {
	let dataCharType = 'data-char-type';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let char = document.getElementsByClassName("char");

	if (document.getElementById("int").classList.contains("checkedTypeBtn")) {
		document.getElementById("int").classList.remove("checkedTypeBtn");
	} else {
		document.getElementById("int").classList.add("checkedTypeBtn");
	}

	typeDisappearFilter(char);
	showCharAllFilter(char, dataCharTypeItems, dataCharType);
	
	if (document.getElementsByClassName("checkedTypeBtn").length == 0) {
		for (let i = 0; i < char.length; i++) {
			char.item(i).style.display = "inline-block";
		}
	}
}

function phyFilter() {
	let dataCharType = 'data-char-type';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let char = document.getElementsByClassName("char");

	if (document.getElementById("phy").classList.contains("checkedTypeBtn")) {
		document.getElementById("phy").classList.remove("checkedTypeBtn");
	} else {
		document.getElementById("phy").classList.add("checkedTypeBtn");
	}

	typeDisappearFilter(char);
	showCharAllFilter(char, dataCharTypeItems, dataCharType);
	
	if (document.getElementsByClassName("checkedTypeBtn").length == 0) {
		for (let i = 0; i < char.length; i++) {
			char.item(i).style.display = "inline-block";
		}
	}
}

function strFilter() {
	let dataCharType = 'data-char-type';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let char = document.getElementsByClassName("char");

	if (document.getElementById("str").classList.contains("checkedTypeBtn")) {
		document.getElementById("str").classList.remove("checkedTypeBtn");
	} else {
		document.getElementById("str").classList.add("checkedTypeBtn");
	}

	typeDisappearFilter(char);
	showCharAllFilter(char, dataCharTypeItems, dataCharType);
	
	if (document.getElementsByClassName("checkedTypeBtn").length == 0) {
		for (let i = 0; i < char.length; i++) {
			char.item(i).style.display = "inline-block";
		}
	}
}

function teqFilter() {
	let dataCharType = 'data-char-type';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let char = document.getElementsByClassName("char");

	if (document.getElementById("teq").classList.contains("checkedTypeBtn")) {
		document.getElementById("teq").classList.remove("checkedTypeBtn");
	} else {
		document.getElementById("teq").classList.add("checkedTypeBtn");
	}

	typeDisappearFilter(char);
	showCharAllFilter(char, dataCharTypeItems, dataCharType);
	
	if (document.getElementsByClassName("checkedTypeBtn").length == 0) {
		for (let i = 0; i < char.length; i++) {
			char.item(i).style.display = "inline-block";
		}
	}
}

