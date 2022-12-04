function typeFilter(dataCharType, dataCharTypeItems, char, type) {
	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "none";
	}

	for (let i = 0; i < char.length; i++) {
		if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == type) {
			char.item(i).style.display = "inline-block";
		} else {
			char.item(i).style.display = "none";
		}
	}
}

function aglFilter() {
	let dataCharType = 'data-char-type';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let char = document.getElementsByClassName("char");
	typeFilter(dataCharType, dataCharTypeItems, char, "agl");
}

function intFilter() {
	let dataCharType = 'data-char-type';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let char = document.getElementsByClassName("char");
	typeFilter(dataCharType, dataCharTypeItems, char, "int");
}

function phyFilter() {
	let dataCharType = 'data-char-type';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let char = document.getElementsByClassName("char");
	typeFilter(dataCharType, dataCharTypeItems, char, "phy");
}

function strFilter() {
	let dataCharType = 'data-char-type';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let char = document.getElementsByClassName("char");
	typeFilter(dataCharType, dataCharTypeItems, char, "str");
}

function teqFilter() {
	let dataCharType = 'data-char-type';
	let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let char = document.getElementsByClassName("char");
	typeFilter(dataCharType, dataCharTypeItems, char, "teq");
}

