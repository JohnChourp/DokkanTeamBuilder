function addType(typeFilter) {
	if (document.getElementById(typeFilter).classList.contains("checkedTypeBtn")) {
		document.getElementById(typeFilter).classList.remove("checkedTypeBtn");
	} else {
		document.getElementById(typeFilter).classList.add("checkedTypeBtn");
	}
}

function showType(char, dataCharTypeItems, dataCharType) {
	if (document.getElementById("agl").classList.contains("checkedTypeBtn")) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "agl") {
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

	if (document.getElementById("int").classList.contains("checkedTypeBtn")) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "int") {
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

	if (document.getElementById("phy").classList.contains("checkedTypeBtn")) {
		for (let i = 0; i < char.length; i++) {
			if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "phy") {
				char.item(i).style.display = "inline-block";
			}
		}
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

