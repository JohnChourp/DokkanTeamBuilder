function addCategory(categoryFilter) {
	const element = document.getElementById(categoryFilter);

	if (element.classList.contains("checkedCategoryBtn")) {
		element.classList.remove("checkedCategoryBtn");
		setButtonStyles(element, "#6B6B67", "#555555", 'linear-gradient(180deg, #B6B6B6, #948D87)');
	} else {
		element.classList.add("checkedCategoryBtn");
		setButtonStyles(element, "#2DA9DD", "#1B79C3", 'linear-gradient(180deg, #FFFFFF,#DBCEBD)');
	}
}

function setButtonStyles(element, bgColor1, bgColor2, bgImage) {
	element.children.item(0).style.backgroundColor = bgColor1;
	element.children.item(1).style.backgroundColor = bgColor2;
	element.children.item(8).style.backgroundImage = bgImage;
}

function filterCategory(category) {
	switch (category) {
		case "db-saga":
			addCategory("db-saga");
			break;
		case "saiyan-saga":
			addCategory("saiyan-saga");
			break;
		case "planet-namek-saga":
			addCategory("planet-namek-saga");
			break;
		case "androids-cell-saga":
			addCategory("androids-cell-saga");
			break;
		case "majin-buu-saga":
			addCategory("majin-buu-saga");
			break;
	}
}

function removeAllCategory() {
	const filterCategory = ["db-saga", "saiyan-saga", "planet-namek-saga", "androids-cell-saga", "majin-buu-saga"];
	for (let i = 0; i < filterCategory.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#6B6B67";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#555555";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
	}
}
