function addType(typeFilter) {
	if (document.getElementById(typeFilter).classList.contains("checkedTypeBtn")) {
		document.getElementById(typeFilter).classList.remove("checkedTypeBtn");
		document.getElementById(typeFilter).children.item(0).style.backgroundColor = "#6B6B67";
		document.getElementById(typeFilter).children.item(1).style.backgroundColor = "#555555";
		document.getElementById(typeFilter).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
	} else {
		document.getElementById(typeFilter).classList.add("checkedTypeBtn");
		document.getElementById(typeFilter).children.item(0).style.backgroundColor = "#2DA9DD";
		document.getElementById(typeFilter).children.item(1).style.backgroundColor = "#1B79C3";
		document.getElementById(typeFilter).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF,#DBCEBD)';
	}
}

function aglFilter() {
	addType("agl");
}

function teqFilter() {
	addType("teq");
}

function intFilter() {
	addType("int");
}

function strFilter() {
	addType("str");
}

function phyFilter() {
	addType("phy");
}

function removeAllType() {
	let filterType = ["agl", "teq", "int", "str", "phy"];
	for (let i = 0; i < filterType.length; i++) {
		document.getElementById(filterType[i]).classList.remove("checkedTypeBtn");
		document.getElementById(filterType[i]).children.item(0).style.backgroundColor = "#6B6B67";
		document.getElementById(filterType[i]).children.item(1).style.backgroundColor = "#555555";
		document.getElementById(filterType[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
	}
}
