function addSort(sortFilter) {
	removeAllSort();
	const element = document.getElementById(sortFilter);

	if (element.classList.contains("checkedSortBtn")) {
		element.classList.remove("checkedSortBtn");
		setButtonStylesSort(element, "#6B6B67", "#555555", 'linear-gradient(180deg, #B6B6B6, #948D87)');
	} else {
		element.classList.add("checkedSortBtn");
		setButtonStylesSort(element, "#A9C857", "#77A331", 'linear-gradient(180deg, #FFFFFF,#DBCEBD)');
	}
}

function setButtonStylesSort(element, bgColor1, bgColor2, bgImage) {
	element.children.item(0).children.item(0).style.backgroundColor = bgColor1;
	element.children.item(0).children.item(1).style.backgroundColor = bgColor2;
	element.children.item(0).children.item(3).style.backgroundImage = bgImage;
}

function filterSort(sort) {
	switch (sort) {
		case "sort-updated":
			addSort("sort-updated");
			break;
		case "sort-released":
			addSort("sort-released");
			break;
		case "sort-type":
			addSort("sort-type");
			break;

		case "sort-level":
			addSort("sort-level");
			break;
		case "sort-rarity":
			addSort("sort-rarity");
			break;
		case "sort-cost":
			addSort("sort-cost");
			break;

		case "sort-hp":
			addSort("sort-hp");
			break;
		case "sort-attack":
			addSort("sort-attack");
			break;
		case "sort-defense":
			addSort("sort-defense");
			break;

		case "sort-character":
			addSort("sort-character");
			break;
		case "sort-sp-atk-lv":
			addSort("sort-sp-atk-lv");
			break;
		case "sort-max-level":
			addSort("sort-max-level");
			break;
	}
}

function removeAllSort() {
	const filterType = ["sort-updated","sort-released", "sort-type",
		"sort-level", "sort-rarity", "sort-cost"
		, "sort-hp", "sort-attack", "sort-defense"
		, "sort-character", "sort-sp-atk-lv", "sort-max-level"];
	for (let i = 0; i < filterType.length; i++) {
		document.getElementById(filterType[i]).classList.remove("checkedSortBtn");
		document.getElementById(filterType[i]).children.item(0).children.item(0).style.backgroundColor = "#6B6B67";
		document.getElementById(filterType[i]).children.item(0).children.item(1).style.backgroundColor = "#555555";
		document.getElementById(filterType[i]).children.item(0).children.item(3).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
	}
}

function removeAllSortAndAddUpdated() {
	const filterType = ["sort-released", "sort-type",
		"sort-level", "sort-rarity", "sort-cost"
		, "sort-hp", "sort-attack", "sort-defense"
		, "sort-character", "sort-sp-atk-lv", "sort-max-level"];
	for (let i = 0; i < filterType.length; i++) {
		document.getElementById(filterType[i]).classList.remove("checkedSortBtn");
		document.getElementById(filterType[i]).children.item(0).children.item(0).style.backgroundColor = "#6B6B67";
		document.getElementById(filterType[i]).children.item(0).children.item(1).style.backgroundColor = "#555555";
		document.getElementById(filterType[i]).children.item(0).children.item(3).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
	}
	document.getElementById("sort-updated").classList.add("checkedSortBtn");
	document.getElementById("sort-updated").children.item(0).children.item(0).style.backgroundColor = "#A9C857";
	document.getElementById("sort-updated").children.item(0).children.item(1).style.backgroundColor = "#77A331";
	document.getElementById("sort-updated").children.item(0).children.item(3).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF,#DBCEBD)';
}
