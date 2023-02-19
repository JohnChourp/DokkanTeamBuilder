function addCategory(categoryFilter) {
	const element = document.getElementById(categoryFilter);

	if (element.classList.contains("checkedCategoryBtn")) {
		element.classList.remove("checkedCategoryBtn");

		if (element.querySelector(".top-half-category-orange")) {
			setButtonStyles(element, "#85671C", "#7F4503", 'linear-gradient(180deg, #c0c0c0, #a19b95)');
		}
		if (element.querySelector(".top-half-category-green")) {
			setButtonStyles(element, "#51741F", "#2F5510", 'linear-gradient(180deg, #c0c0c0, #a19b95)');
		}
		if (element.querySelector(".top-half-category-yellow")) {
			setButtonStyles(element, "#868131", "#7E6C06", 'linear-gradient(180deg, #c0c0c0, #a19b95)');
		}
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
		case "future-saga":
			addCategory("future-saga");
			break;
		case "universe-survival-saga":
			addCategory("universe-survival-saga");
			break;
		case "shadow-dragon-saga":
			addCategory("shadow-dragon-saga");
			break;

		case "pure-saiyans":
			addCategory("pure-saiyans");
			break;
		case "hybrid-saiyans":
			addCategory("hybrid-saiyans");
			break;
		case "earthlings":
			addCategory("earthlings");
			break;
		case "namekians":
			addCategory("namekians");
			break;
		case "androids":
			addCategory("androids");
			break;
		case "artificial-life-forms":
			addCategory("artificial-life-forms");
			break;
		case "gokus-family":
			addCategory("gokus-family");
			break;
		case "vegetas-family":
			addCategory("vegetas-family");
			break;
		case "wicked-bloodline":
			addCategory("wicked-bloodline");
			break;
		case "youth":
			addCategory("youth");
			break;
		case "peppy-gals":
			addCategory("peppy-gals");
			break;

		case "super-saiyans":
			addCategory("super-saiyans");
			break;
		case "super-saiyan-2":
			addCategory("super-saiyan-2");
			break;
			case "super-saiyan-3":
			addCategory("super-saiyan-3");
			break;
			case "power-beyond-super-saiyan":
			addCategory("power-beyond-super-saiyan");
			break;
			case "fusion":
			addCategory("fusion");
			break;
			case "potara":
			addCategory("potara");
			break;
			case "fused-fighters":
			addCategory("fused-fighters");
			break;
			case "giant-form":
			addCategory("giant-form");
			break;
			case "transformation-boost":
			addCategory("transformation-boost");
			break;
			case "power-absorption":
			addCategory("power-absorption");
			break;
			case "kamehameha":
			addCategory("kamehameha");
			break;
	}
}

function removeAllCategory() {
	const topHalfCategoryOrange = document.getElementsByClassName("top-half-category-orange");
	const topHalfCategoryGreen = document.getElementsByClassName("top-half-category-green");
	const topHalfCategoryYellow = document.getElementsByClassName("top-half-category-yellow");
	const filterCategory = ["db-saga",
		"saiyan-saga",
		"planet-namek-saga",
		"androids-cell-saga",
		"majin-buu-saga",
		"future-saga",
		"universe-survival-saga",
		"shadow-dragon-saga",

		"pure-saiyans",
		"hybrid-saiyans",
		"earthlings",
		"namekians",
		"androids",
		"artificial-life-forms",
		"gokus-family",
		"vegetas-family",
		"wicked-bloodline",
		"youth",
		"peppy-gals",
					
		"super-saiyans",
		"super-saiyan-2",
		"super-saiyan-3",
		"power-beyond-super-saiyan",
		"fusion",
		"potara",
		"fused-fighters",
		"giant-form",
		"transformation-boost",
		"power-absorption",
		"kamehameha"];

	for (let i = 0; i < topHalfCategoryOrange.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#85671C";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#7F4503";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #c0c0c0, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#51741F";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#2F5510";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #c0c0c0, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length+topHalfCategoryYellow.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#868131";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#7E6C06";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #c0c0c0, #a19b95)';
	}
}

function openCategories() {
	const allCategoriesId = document.getElementById("all-categories-id");
	const closeCategories = document.getElementById("close-categories-id");
	const removeAllCategories = document.getElementById("remove-all-categories-id");

	let width = '401px';

	for (let i = 100; i < 416; i++) {
		if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
			width = (i - 1) + "px";
			break;
		}
	}

	allCategoriesId.style.width = width;
	closeCategories.style.left = "0";
	removeAllCategories.style.left = "0";
}


function closeCategories() {
	const allCategoriesId = document.getElementById("all-categories-id");
	const closeCategories = document.getElementById("close-categories-id");
	const removeAllCategories = document.getElementById("remove-all-categories-id");

	allCategoriesId.style.width = "0";
	closeCategories.style.left = "-30px";
	removeAllCategories.style.left = "-90px";
}