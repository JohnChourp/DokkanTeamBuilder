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
		if (element.querySelector(".top-half-category-cyan")) {
			setButtonStyles(element, "#136B73", "#105B59", 'linear-gradient(180deg, #c0c0c0, #a19b95)');
		}
		if (element.querySelector(".top-half-category-blue")) {
			setButtonStyles(element, "#0F6089", "#053C7C", 'linear-gradient(180deg, #c0c0c0, #a19b95)');
		}
		if (element.querySelector(".top-half-category-purple")) {
			setButtonStyles(element, "#6C5087", "#513474", 'linear-gradient(180deg, #c0c0c0, #a19b95)');
		}
		if (element.querySelector(".top-half-category-roze")) {
			setButtonStyles(element, "#83445A", "#742133", 'linear-gradient(180deg, #c0c0c0, #a19b95)');
		}
		if (element.querySelector(".top-half-category-dark-green")) {
			setButtonStyles(element, "#105E4B", "#073F2B", 'linear-gradient(180deg, #c0c0c0, #a19b95)');
		}
		if (element.querySelector(".top-half-category-dark-blue")) {
			setButtonStyles(element, "#29355B", "#0A093C", 'linear-gradient(180deg, #c0c0c0, #a19b95)');
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

		case "realm-of-gods":
			addCategory("realm-of-gods");
			break;
		case "full-power":
			addCategory("full-power");
			break;
		case "giant-ape-power":
			addCategory("giant-ape-power");
			break;
		case "majin-power":
			addCategory("majin-power");
			break;
		case "powerful-comeback":
			addCategory("powerful-comeback");
			break;
		case "miraculous-awakening":
			addCategory("miraculous-awakening");
			break;
		case "corroded-body-and-mind":
			addCategory("corroded-body-and-mind");
			break;
		case "rapid-growth":
			addCategory("rapid-growth");
			break;
		case "mastered-evolution":
			addCategory("mastered-evolution");
			break;
		case "time-limit":
			addCategory("time-limit");
			break;
		case "final-trump-card":
			addCategory("final-trump-card");
			break;

		case "worthy-rivals":
			addCategory("worthy-rivals");
			break;
		case "sworn-enemies":
			addCategory("sworn-enemies");
			break;
		case "joined-forces":
			addCategory("joined-forces");
			break;
		case "bond-of-parent-and-child":
			addCategory("bond-of-parent-and-child");
			break;
		case "siblings-bond":
			addCategory("siblings-bond");
			break;
		case "bond-of-friendship":
			addCategory("bond-of-friendship");
			break;
		case "bond-of-master-and-disciple":
			addCategory("bond-of-master-and-disciple");
			break;

		case "ginyu-force":
			addCategory("ginyu-force");
			break;
		case "team-bardock":
			addCategory("team-bardock");
			break;
		case "universe-6":
			addCategory("universe-6");
			break;
		case "representatives-of-universe-7":
			addCategory("representatives-of-universe-7");
			break;
		case "universe-11":
			addCategory("universe-11");
			break;
		case "gt-heroes":
			addCategory("gt-heroes");
			break;
		case "gt-bosses":
			addCategory("gt-bosses");
			break;
		case "super-heroes":
			addCategory("super-heroes");
			break;
		case "movie-heroes":
			addCategory("movie-heroes");
			break;
		case "movie-bosses":
			addCategory("movie-bosses");
			break;
		case "turtle-school":
			addCategory("turtle-school");
			break;
		case "world-tournament":
			addCategory("world-tournament");
			break;

		case "low-class-warrior":
			addCategory("low-class-warrior");
			break;
		case "earth-bred-fighters":
			addCategory("earth-bred-fighters");
			break;
		case "gifted-warriors":
			addCategory("gifted-warriors");
			break;
		case "otherworld-warriors":
			addCategory("otherworld-warriors");
			break;
		case "resurrected-warriors":
			addCategory("resurrected-warriors");
			break;
		case "space-traveling-warriors":
			addCategory("space-traveling-warriors");
			break;
		case "time-travelers":
			addCategory("time-travelers");
			break;
		case "dragon-ball-seekers":
			addCategory("dragon-ball-seekers");
			break;
		case "storied-figures":
			addCategory("storied-figures");
			break;
		case "legendary-existence":
			addCategory("legendary-existence");
			break;
		case "saviors":
			addCategory("saviors");
			break;
		case "defenders-of-justice":
			addCategory("defenders-of-justice");
			break;

		case "revenge":
			addCategory("revenge");
			break;
		case "target-goku":
			addCategory("target-goku");
			break;
		case "terrifying-conquerors":
			addCategory("terrifying-conquerors");
			break;
		case "inhumal-deeds":
			addCategory("inhumal-deeds");
			break;
		case "planetary-destruction":
			addCategory("planetary-destruction");
			break;
		case "exploding-rage":
			addCategory("exploding-rage");
			break;
		case "connected-hope":
			addCategory("connected-hope");
			break;
		case "entrusted-will":
			addCategory("entrusted-will");
			break;
		case "all-out-struggle":
			addCategory("all-out-struggle");
			break;
		case "battle-of-wits":
			addCategory("battle-of-wits");
			break;
		case "accelerated-battle":
			addCategory("accelerated-battle");
			break;
		case "battle-of-fate":
			addCategory("battle-of-fate");
			break;
		case "heavenly-events":
			addCategory("heavenly-events");
			break;
		case "special-pose":
			addCategory("special-pose");
			break;
		case "worldwide-chaos":
			addCategory("worldwide-chaos");
			break;

			case "crossover":
			addCategory("crossover");
			break;
			case "dragon-ball-heroes":
			addCategory("dragon-ball-heroes");
			break;
	}
}

function removeAllCategory() {
	const topHalfCategoryOrange = document.getElementsByClassName("top-half-category-orange");
	const topHalfCategoryGreen = document.getElementsByClassName("top-half-category-green");
	const topHalfCategoryYellow = document.getElementsByClassName("top-half-category-yellow");
	const topHalfCategoryCyan = document.getElementsByClassName("top-half-category-cyan");
	const topHalfCategoryBlue = document.getElementsByClassName("top-half-category-blue");
	const topHalfCategoryPurple = document.getElementsByClassName("top-half-category-purple");
	const topHalfCategoryRoze = document.getElementsByClassName("top-half-category-roze");
	const topHalfCategoryDarkGreen = document.getElementsByClassName("top-half-category-dark-green");
	const topHalfCategoryDarkBlue = document.getElementsByClassName("top-half-category-dark-blue");
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
		"kamehameha",

		"realm-of-gods",
		"full-power",
		"giant-ape-power",
		"majin-power",
		"powerful-comeback",
		"miraculous-awakening",
		"corroded-body-and-mind",
		"rapid-growth",
		"mastered-evolution",
		"time-limit",
		"final-trump-card",

		"worthy-rivals",
		"sworn-enemies",
		"joined-forces",
		"bond-of-parent-and-child",
		"siblings-bond",
		"bond-of-friendship",
		"bond-of-master-and-disciple",

		"ginyu-force",
		"team-bardock",
		"universe-6",
		"representatives-of-universe-7",
		"universe-11",
		"gt-heroes",
		"gt-bosses",
		"super-heroes",
		"movie-heroes",
		"movie-bosses",
		"turtle-school",
		"world-tournament",

		"low-class-warrior",
		"earth-bred-fighters",
		"gifted-warriors",
		"otherworld-warriors",
		"resurrected-warriors",
		"space-traveling-warriors",
		"time-travelers",
		"dragon-ball-seekers",
		"storied-figures",
		"legendary-existence",
		"saviors",
		"defenders-of-justice",

		"revenge",
		"target-goku",
		"terrifying-conquerors",
		"inhumal-deeds",
		"planetary-destruction",
		"exploding-rage",
		"connected-hope",
		"entrusted-will",
		"all-out-struggle",
		"battle-of-wits",
		"accelerated-battle",
		"battle-of-fate",
		"heavenly-events",
		"special-pose",
		"worldwide-chaos",

		"crossover",
		"dragon-ball-heroes"];

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
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#868131";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#7E6C06";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #c0c0c0, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#136B73";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#105B59";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #c0c0c0, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#0F6089";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#053C7C";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #c0c0c0, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#6C5087";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#513474";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #c0c0c0, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length + topHalfCategoryRoze.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#83445A";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#742133";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #c0c0c0, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length + topHalfCategoryRoze.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length + topHalfCategoryRoze.length + topHalfCategoryDarkGreen.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#105E4B";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#073F2B";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #c0c0c0, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length + topHalfCategoryRoze.length + topHalfCategoryDarkGreen.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length + topHalfCategoryRoze.length + topHalfCategoryDarkGreen.length + topHalfCategoryDarkBlue.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#29355B";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#0A093C";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #c0c0c0, #a19b95)';
	}
}

function openCategories() {
	const applyCategoriesBgId = document.getElementById("apply-categories-bg-id");
	const allCategoriesId = document.getElementById("all-categories-id");
	const applyCategoriesId = document.getElementById("apply-categories-id");
 	
	const applyCategoriesTextId = document.getElementById("apply-categories-text-id");
	const removeAllCategories = document.getElementById("remove-all-categories-id");
	const okCategories = document.getElementById("ok-categories-id");
	

	let width = '390px';

	for (let i = 100; i < 416; i++) {
		if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
			width = (i - 1) + "px";
			break;
		}
	}


	applyCategoriesBgId.style.width = width;
	applyCategoriesBgId.style.marginBottom = "110px";

	allCategoriesId.style.width = width;
	allCategoriesId.style.marginBottom = "110px";

	applyCategoriesId.style.width = width;
	applyCategoriesId.style.marginBottom = "110px";

	applyCategoriesTextId.style.left = "0";
	removeAllCategories.style.left = "0";
	okCategories.style.left = "0";
}

function closeCategories() {
	const applyCategoriesBgId = document.getElementById("apply-categories-bg-id");
	const allCategoriesId = document.getElementById("all-categories-id");
	
	const applyCategoriesTextId = document.getElementById("apply-categories-text-id");
	const okCategories = document.getElementById("ok-categories-id");
	const removeAllCategories = document.getElementById("remove-all-categories-id");

	applyCategoriesBgId.style.width = "0";
	allCategoriesId.style.width = "0";

	applyCategoriesTextId.style.left = "-300px";
	okCategories.style.left = "-200px";
	removeAllCategories.style.left = "-300px";
}