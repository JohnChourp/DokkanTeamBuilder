function addCategory(categoryFilter) {
	const element = document.getElementById(categoryFilter);

	if (element.classList.contains("checkedCategoryBtn")) {
		element.classList.remove("checkedCategoryBtn");

		if (element.querySelector(".top-half-category-orange")) {
			setButtonStylesCategories(element, "#85671C", "#7F4503", 'linear-gradient(180deg, #FFFFFF, #a19b95)');
		}
		if (element.querySelector(".top-half-category-green")) {
			setButtonStylesCategories(element, "#51741F", "#2F5510", 'linear-gradient(180deg, #FFFFFF, #a19b95)');
		}
		if (element.querySelector(".top-half-category-yellow")) {
			setButtonStylesCategories(element, "#868131", "#7E6C06", 'linear-gradient(180deg, #FFFFFF, #a19b95)');
		}
		if (element.querySelector(".top-half-category-cyan")) {
			setButtonStylesCategories(element, "#136B73", "#105B59", 'linear-gradient(180deg, #FFFFFF, #a19b95)');
		}
		if (element.querySelector(".top-half-category-blue")) {
			setButtonStylesCategories(element, "#0F6089", "#053C7C", 'linear-gradient(180deg, #FFFFFF, #a19b95)');
		}
		if (element.querySelector(".top-half-category-purple")) {
			setButtonStylesCategories(element, "#6C5087", "#513474", 'linear-gradient(180deg, #FFFFFF, #a19b95)');
		}
		if (element.querySelector(".top-half-category-roze")) {
			setButtonStylesCategories(element, "#83445A", "#742133", 'linear-gradient(180deg, #FFFFFF, #a19b95)');
		}
		if (element.querySelector(".top-half-category-dark-green")) {
			setButtonStylesCategories(element, "#105E4B", "#073F2B", 'linear-gradient(180deg, #FFFFFF, #a19b95)');
		}
		if (element.querySelector(".top-half-category-dark-blue")) {
			setButtonStylesCategories(element, "#29355B", "#0A093C", 'linear-gradient(180deg, #FFFFFF, #a19b95)');
		}
	} else {
		element.classList.add("checkedCategoryBtn");
		if (element.querySelector(".top-half-category-orange")) {
			setButtonStylesCategories(element, "#FFB721", "#FF7500", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (element.querySelector(".top-half-category-green")) {
			setButtonStylesCategories(element, "#9CF434", "#61C81C", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (element.querySelector(".top-half-category-yellow")) {
			setButtonStylesCategories(element, "#F7EE3E", "#F2CC00", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (element.querySelector(".top-half-category-cyan")) {
			setButtonStylesCategories(element, "#00DFDE", "#00B0AD", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (element.querySelector(".top-half-category-blue")) {
			setButtonStylesCategories(element, "#00AAFF", "#0055EF", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (element.querySelector(".top-half-category-purple")) {
			setButtonStylesCategories(element, "#C46CF3", "#823ADF", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (element.querySelector(".top-half-category-roze")) {
			setButtonStylesCategories(element, "#F65589", "#E60543", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (element.querySelector(".top-half-category-dark-green")) {
			setButtonStylesCategories(element, "#00BB8D", "#00885B", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (element.querySelector(".top-half-category-dark-blue")) {
			setButtonStylesCategories(element, "#4250AC", "#212C72", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
	}
}

function setButtonStylesCategories(element, bgColor1, bgColor2, bgImage) {
	element.children.item(0).style.backgroundColor = bgColor1;
	element.children.item(1).style.backgroundColor = bgColor2;
	element.children.item(8).style.backgroundImage = bgImage;
}

const categories = {
	"db-saga": true,
	"saiyan-saga": true,
	"planet-namek-saga": true,
	"androids-cell-saga": true,
	"majin-buu-saga": true,
	"future-saga": true,
	"universe-survival-saga": true,
	"shadow-dragon-saga": true,

	"pure-saiyans": true,
	"hybrid-saiyans": true,
	"earthlings": true,
	"namekians": true,
	"androids": true,
	"artificial-life-forms": true,
	"gokus-family": true,
	"vegetas-family": true,
	"wicked-bloodline": true,
	"youth": true,
	"peppy-gals": true,

	"super-saiyans": true,
	"super-saiyan-2": true,
	"super-saiyan-3": true,
	"power-beyond-super-saiyan": true,
	"fusion": true,
	"potara": true,
	"fused-fighters": true,
	"giant-form": true,
	"transformation-boost": true,
	"power-absorption": true,
	"kamehameha": true,

	"realm-of-gods": true,
	"full-power": true,
	"giant-ape-power": true,
	"majin-power": true,
	"powerful-comeback": true,
	"miraculous-awakening": true,
	"corroded-body-and-mind": true,
	"rapid-growth": true,
	"mastered-evolution": true,
	"time-limit": true,
	"final-trump-card": true,

	"worthy-rivals": true,
	"sworn-enemies": true,
	"joined-forces": true,
	"bond-of-parent-and-child": true,
	"siblings-bond": true,
	"bond-of-friendship": true,
	"bond-of-master-and-disciple": true,

	"ginyu-force": true,
	"team-bardock": true,
	"universe-6": true,
	"representatives-of-universe-7": true,
	"universe-11": true,
	"gt-heroes": true,
	"gt-bosses": true,
	"super-heroes": true,
	"movie-heroes": true,
	"movie-bosses": true,
	"turtle-school": true,
	"world-tournament": true,

	"low-class-warrior": true,
	"earth-bred-fighters": true,
	"gifted-warriors": true,
	"otherworld-warriors": true,
	"resurrected-warriors": true,
	"space-traveling-warriors": true,
	"time-travelers": true,
	"dragon-ball-seekers": true,
	"storied-figures": true,
	"legendary-existence": true,
	"saviors": true,
	"defenders-of-justice": true,

	"revenge": true,
	"target-goku": true,
	"terrifying-conquerors": true,
	"inhumal-deeds": true,
	"planetary-destruction": true,
	"exploding-rage": true,
	"connected-hope": true,
	"entrusted-will": true,
	"all-out-struggle": true,
	"battle-of-wits": true,
	"accelerated-battle": true,
	"battle-of-fate": true,
	"heavenly-events": true,
	"special-pose": true,
	"worldwide-chaos": true,

	"crossover": true,
	"dragon-ball-heroes": true
};

function filterCategory(category) {
	if (categories[category]) {
		addCategory(category);
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
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#51741F";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#2F5510";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#868131";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#7E6C06";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#136B73";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#105B59";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#0F6089";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#053C7C";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#6C5087";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#513474";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length + topHalfCategoryRoze.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#83445A";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#742133";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length + topHalfCategoryRoze.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length + topHalfCategoryRoze.length + topHalfCategoryDarkGreen.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#105E4B";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#073F2B";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF, #a19b95)';
	}
	for (let i = topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length + topHalfCategoryRoze.length + topHalfCategoryDarkGreen.length; i < topHalfCategoryOrange.length + topHalfCategoryGreen.length + topHalfCategoryYellow.length + topHalfCategoryCyan.length + topHalfCategoryBlue.length + topHalfCategoryPurple.length + topHalfCategoryRoze.length + topHalfCategoryDarkGreen.length + topHalfCategoryDarkBlue.length; i++) {
		document.getElementById(filterCategory[i]).classList.remove("checkedCategoryBtn");
		document.getElementById(filterCategory[i]).children.item(0).style.backgroundColor = "#29355B";
		document.getElementById(filterCategory[i]).children.item(1).style.backgroundColor = "#0A093C";
		document.getElementById(filterCategory[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF, #a19b95)';
	}
	let filterCategoryContainerTextFirst = document.getElementsByClassName("filter-category-container-text-first");
	filterCategoryContainerTextFirst.item(0).innerHTML = "Select Category";
	const categoriesSelectId = document.getElementById("categories-select-id");
	categoriesSelectId.style.fontSize = "medium";
	setButtonStylesCategories(categoriesSelectId, "#6B6B67", "#555555", 'linear-gradient(180deg, #B6B6B6, #948D87)');
}

function openCategories() {
	const allCategoriesId = document.getElementById("all-categories-id");

	const applyCategoriesBgId = document.getElementById("apply-categories-bg-id");
	const applyCategoriesId = document.getElementById("apply-categories-id");
	const applyCategoriesTextId = document.getElementById("apply-categories-text-id");
	const removeAllCategories = document.getElementById("remove-all-categories-id");
	const okCategories = document.getElementById("ok-categories-id");


	let width = '400px';

	for (let i = 100; i < 416; i++) {
		if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
			width = (i - 1) + "px";
			break;
		}
	}


	applyCategoriesBgId.style.width = width;
	allCategoriesId.style.width = width;
	applyCategoriesId.style.width = width;
	applyCategoriesTextId.style.left = "0";
	removeAllCategories.style.left = "0";
	okCategories.style.left = "0";

	const applyFiltersBg = document.getElementById("apply-filters-bg-id");
	const applyFilters = document.getElementById("apply-filters-id");
	const applyFiltersText = document.getElementById("apply-filters-text-id");
	const ok = document.getElementById("ok");
	const removeAll = document.getElementById("remove-all-id");
	applyFiltersBg.style.width = "0";
	applyFilters.style.width = "0";
	applyFiltersText.style.left = "-70px";

	ok.style.left = "-30px";
	removeAll.style.left = "-120px";

}

function closeCategories() {
	const allCategoriesId = document.getElementById("all-categories-id");

	const applyCategoriesBgId = document.getElementById("apply-categories-bg-id");
	const applyCategoriesId = document.getElementById("apply-categories-id");
	const applyCategoriesTextId = document.getElementById("apply-categories-text-id");
	const okCategories = document.getElementById("ok-categories-id");
	const removeAllCategories = document.getElementById("remove-all-categories-id");

	applyCategoriesBgId.style.width = "0";
	allCategoriesId.style.width = "0";
	applyCategoriesId.style.width = "0";

	applyCategoriesTextId.style.left = "-400px";
	okCategories.style.left = "-300px";
	removeAllCategories.style.left = "-400px";

	const applyFiltersBg = document.getElementById("apply-filters-bg-id");
	const applyFilters = document.getElementById("apply-filters-id");
	const applyFiltersText = document.getElementById("apply-filters-text-id");
	const ok = document.getElementById("ok");
	const removeAll = document.getElementById("remove-all-id");

	let width = '400px';

	for (let i = 100; i < 416; i++) {
		if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
			width = (i - 1) + "px";
			break;
		}
	}
	applyFiltersBg.style.width = width;
	applyFiltersBg.style.left = "-10px";
	applyFilters.style.width = width;

	applyFiltersText.style.left = "-10px";
	ok.style.left = "-10px";
	removeAll.style.left = "-10px";
	closeCategoriesSelectBtn();
}

function closeCategoriesSelectBtn() {
	const filterCategories = ["db-saga",
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
		"dragon-ball-heroes"],
		filterCategoriesNames = ["DB Saga",
			"Saiyan Saga",
			"Planet Namek Saga",
			"Androids/Cell Saga",
			"Majin Buu Saga",
			"Future Saga",
			"Universe Survival Saga",
			"Shadow Dragon Saga",

			"Pure Saiyans",
			"Hybrid Saiyans",
			"Earthlings",
			"Namekians",
			"Androids",
			"Artificial Life Forms",
			"Goku's Family",
			"Vegeta's Family",
			"Wicked Bloodline",
			"Youth",
			"Peppy Gals",

			"Super Saiyans",
			"Super Saiyan 2",
			"Super Saiyan 3",
			"Power Beyond Super Saiyan",
			"Fusion",
			"Potara",
			"Fused Fighters",
			"Giant Form",
			"Transformation Boost",
			"Power Absorption",
			"Kamehameha",

			"Realm of Gods",
			"Full Power",
			"Giant Ape Power",
			"Majin Power",
			"Powerful Comeback",
			"Miraculous Awakening",
			"Corroded Body And Mind",
			"Rapid Growth",
			"Mastered Evolution",
			"Time Limit",
			"Final Trump Card",

			"Worthy Rivals",
			"Sworn Enemies",
			"Joined Forces",
			"Bond of Parent and Child",
			"Siblings' Bond",
			"Bond of Friendship",
			"Bond of Master and Disciple",

			"Ginyu Force",
			"Team Bardock",
			"Universe 6",
			"Representatives of Universe 7",
			"Universe 11",
			"GT Heroes",
			"GT Bosses",
			"Super Heroes",
			"Movie Heroes",
			"Movie Bosses",
			"Turtle School",
			"World Tournament",

			"Low Class Warrior",
			"Earth-Bred Fighters",
			"Gifted Warriors",
			"Otherworld Warriors",
			"Resurrected Warriors",
			"Space Traveling Warriors",
			"Time Travelers",
			"Dragon Ball Seekers",
			"Storied Figures",
			"Legendary Existence",
			"Saviors",
			"Defenders of Justice",

			"Revenge",
			"Target: Goku",
			"Terrifying Conquerors",
			"Inhumal Deeds",
			"Planetary Destruction",
			"Exploding Rage",
			"Connected Hope",
			"Entrusted Will",
			"All-Out Struggle",
			"Battle of Wits",
			"Accelerated Battle",
			"Battle of Fate",
			"Heavenly Events",
			"Special Pose",
			"Worldwide Chaos",

			"Crossover",
			"Dragon Ball Heroes"];
	let filterCategoryUsed = [], filterCategoryUsedPos = 0;
	//filterCategory
	for (let i = 0; i < filterCategories.length; i++) {
		if (document.getElementById(filterCategories[i]).classList.contains("checkedCategoryBtn")) {
			filterCategoryUsed[i] = filterCategoriesNames[i];
		}
	}
	for (let i = 0; i < filterCategories.length; i++) {
		if (filterCategoryUsed[i] != undefined) {
			filterCategoryUsedPos = i;
		}
	}
	filterCategoryUsed = cleanArray(filterCategoryUsed, undefined);

	let filterCategoryContainerTextFirst = document.getElementsByClassName("filter-category-container-text-first");
	const categoriesSelectId = document.getElementById("categories-select-id");
	categoriesSelectId.style.fontSize = "medium";
	if (filterCategoryUsed.length > 1) {
		setButtonStylesCategories(categoriesSelectId, "#57C75B", "#199411", 'linear-gradient(rgb(255, 255, 255), rgb(219, 206, 189))');
		filterCategoryContainerTextFirst.item(0).innerHTML = "Selected: " + filterCategoryUsed.length;
	}
	if (filterCategoryUsed.length == 0) {
		setButtonStylesCategories(categoriesSelectId, "#6B6B67", "#555555", 'linear-gradient(180deg, #B6B6B6, #948D87)');
		filterCategoryContainerTextFirst.item(0).innerHTML = "Select Category";
	}

	if (filterCategoryUsed.length == 1) {
		if (filterCategoryUsedPos >= 0 && filterCategoryUsedPos <= 7) {
			setButtonStylesCategories(categoriesSelectId, "#FFB721", "#FF7500", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (filterCategoryUsedPos >= 8 && filterCategoryUsedPos <= 18) {
			setButtonStylesCategories(categoriesSelectId, "#9CF434", "#61C81C", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (filterCategoryUsedPos >= 19 && filterCategoryUsedPos <= 29) {
			setButtonStylesCategories(categoriesSelectId, "#F7EE3E", "#F2CC00", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (filterCategoryUsedPos >= 30 && filterCategoryUsedPos <= 40) {
			setButtonStylesCategories(categoriesSelectId, "#00DFDE", "#00B0AD", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (filterCategoryUsedPos >= 41 && filterCategoryUsedPos <= 47) {
			setButtonStylesCategories(categoriesSelectId, "#00AAFF", "#0055EF", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (filterCategoryUsedPos >= 48 && filterCategoryUsedPos <= 59) {
			setButtonStylesCategories(categoriesSelectId, "#C46CF3", "#823ADF", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (filterCategoryUsedPos >= 60 && filterCategoryUsedPos <= 71) {
			setButtonStylesCategories(categoriesSelectId, "#F65589", "#E60543", "#742133", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (filterCategoryUsedPos >= 72 && filterCategoryUsedPos <= 86) {
			setButtonStylesCategories(categoriesSelectId, "#105E4B", "#073F2B", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		if (filterCategoryUsedPos >= 87 && filterCategoryUsedPos <= 88) {
			setButtonStylesCategories(categoriesSelectId, "#00BB8D", "#00885B", 'linear-gradient(rgb(0 0 0), rgb(0 0 0))');
		}
		filterCategoryContainerTextFirst.item(0).innerHTML = filterCategoryUsed[0];
		categoriesSelectId.style.fontSize = "small";
	}
}