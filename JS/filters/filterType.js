function addType(typeFilter) {
	if (document.getElementById(typeFilter).classList.contains("checkedTypeBtn")) {
		document.getElementById(typeFilter).classList.remove("checkedTypeBtn");
	} else {
		document.getElementById(typeFilter).classList.add("checkedTypeBtn");
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

