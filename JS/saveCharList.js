function saveCharList() {
	let charList_dataCharNameItems = [], charList_dataCharTitleItems = [], charList_dataCharTypeItems = [],
		charList_dataCharRarityItems = [], charList_dataCharClassItems = [], charList_dataCharEzaItems = [],
		charList_dataCharidItems = [], charList_dataCharHpItems = [], charList_dataCharAttackItems = [],
		charList_dataCharDefenseItems = [], charList_dataCharCostItems = [], charList_dataCharMaxLevelItems = [],
		charList_dataCharSuperAtkLevelItems = [], charList_dataCharRecruitItems = [], charList_dataCharAwakenItems = [],
		charList_dataCharReleaseItems = [], charList_dataCharSuperAtkTypeItems = [], charList_dataCharLinksItems = [], charList_dataCharCategoriesItems = [];
	let char = document.getElementsByClassName("char");
	for (let i = 0; i < char.length; i++) {
		charList_dataCharNameItems[i] = char.item(i).getAttribute("data-char-name");
		charList_dataCharTitleItems[i] = char.item(i).getAttribute("data-char-title");
		charList_dataCharTypeItems[i] = char.item(i).getAttribute("data-char-type");
		charList_dataCharRarityItems[i] = char.item(i).getAttribute("data-char-rarity");
		charList_dataCharClassItems[i] = char.item(i).getAttribute("data-char-class");
		charList_dataCharEzaItems[i] = char.item(i).getAttribute("data-char-eza");
		charList_dataCharidItems[i] = char.item(i).getAttribute("data-char-id");
		charList_dataCharHpItems[i] = char.item(i).getAttribute("data-char-hp");
		charList_dataCharAttackItems[i] = char.item(i).getAttribute("data-char-attack");
		charList_dataCharDefenseItems[i] = char.item(i).getAttribute("data-char-defense");
		charList_dataCharCostItems[i] = char.item(i).getAttribute("data-char-cost");
		charList_dataCharMaxLevelItems[i] = char.item(i).getAttribute("data-char-max-level");
		charList_dataCharSuperAtkLevelItems[i] = char.item(i).getAttribute("data-char-super-atk-level");
		charList_dataCharRecruitItems[i] = char.item(i).getAttribute("data-char-recruit");
		charList_dataCharAwakenItems[i] = char.item(i).getAttribute("data-char-awaken");
		charList_dataCharReleaseItems[i] = char.item(i).getAttribute("data-char-release");
		charList_dataCharSuperAtkTypeItems[i] = char.item(i).getAttribute("data-char-super-atk-type");
		charList_dataCharLinksItems[i] = char.item(i).getAttribute("data-char-links");
		charList_dataCharCategoriesItems[i] = char.item(i).getAttribute("data-char-categories");
	}

	localStorage.setItem("charList_dataCharNameItems", JSON.stringify(charList_dataCharNameItems));
	localStorage.setItem("charList_dataCharTitleItems", JSON.stringify(charList_dataCharTitleItems));
	localStorage.setItem("charList_dataCharTypeItems", JSON.stringify(charList_dataCharTypeItems));
	localStorage.setItem("charList_dataCharRarityItems", JSON.stringify(charList_dataCharRarityItems));
	localStorage.setItem("charList_dataCharClassItems", JSON.stringify(charList_dataCharClassItems));
	localStorage.setItem("charList_dataCharEzaItems", JSON.stringify(charList_dataCharEzaItems));
	localStorage.setItem("charList_dataCharidItems", JSON.stringify(charList_dataCharidItems));
	localStorage.setItem("charList_dataCharHpItems", JSON.stringify(charList_dataCharHpItems));
	localStorage.setItem("charList_dataCharAttackItems", JSON.stringify(charList_dataCharAttackItems));
	localStorage.setItem("charList_dataCharDefenseItems", JSON.stringify(charList_dataCharDefenseItems));
	localStorage.setItem("charList_dataCharCostItems", JSON.stringify(charList_dataCharCostItems));
	localStorage.setItem("charList_dataCharMaxLevelItems", JSON.stringify(charList_dataCharMaxLevelItems));
	localStorage.setItem("charList_dataCharSuperAtkLevelItems", JSON.stringify(charList_dataCharSuperAtkLevelItems));
	localStorage.setItem("charList_dataCharRecruitItems", JSON.stringify(charList_dataCharRecruitItems));
	localStorage.setItem("charList_dataCharAwakenItems", JSON.stringify(charList_dataCharAwakenItems));
	localStorage.setItem("charList_dataCharReleaseItems", JSON.stringify(charList_dataCharReleaseItems));
	localStorage.setItem("charList_dataCharSuperAtkTypeItems", JSON.stringify(charList_dataCharSuperAtkTypeItems));
	localStorage.setItem("charList_dataCharLinksItems", JSON.stringify(charList_dataCharLinksItems));
	localStorage.setItem("charList_dataCharCategoriesItems", JSON.stringify(charList_dataCharCategoriesItems));;
}

function getCharList() {
	let charListSaved = [];
	
	let charList_dataCharNameItems = JSON.parse(localStorage.getItem('charList_dataCharNameItems'));
	let charList_dataCharTitleItems = JSON.parse(localStorage.getItem('charList_dataCharTitleItems'));
	let charList_dataCharTypeItems = JSON.parse(localStorage.getItem('charList_dataCharTypeItems'));
	let charList_dataCharRarityItems = JSON.parse(localStorage.getItem('charList_dataCharRarityItems'));
	let charList_dataCharClassItems = JSON.parse(localStorage.getItem('charList_dataCharClassItems'));
	let charList_dataCharEzaItems = JSON.parse(localStorage.getItem('charList_dataCharEzaItems'));
	let charList_dataCharidItems = JSON.parse(localStorage.getItem('charList_dataCharidItems'));
	let charList_dataCharHpItems = JSON.parse(localStorage.getItem('charList_dataCharHpItems'));
	let charList_dataCharAttackItems = JSON.parse(localStorage.getItem('charList_dataCharAttackItems'));
	let charList_dataCharDefenseItems = JSON.parse(localStorage.getItem('charList_dataCharDefenseItems'));
	let charList_dataCharCostItems = JSON.parse(localStorage.getItem('charList_dataCharCostItems'));
	let charList_dataCharMaxLevelItems = JSON.parse(localStorage.getItem('charList_dataCharMaxLevelItems'));
	let charList_dataCharSuperAtkLevelItems = JSON.parse(localStorage.getItem('charList_dataCharSuperAtkLevelItems'));
	let charList_dataCharRecruitItems = JSON.parse(localStorage.getItem('charList_dataCharRecruitItems'));
	let charList_dataCharAwakenItems = JSON.parse(localStorage.getItem('charList_dataCharAwakenItems'));
	let charList_dataCharReleaseItems = JSON.parse(localStorage.getItem('charList_dataCharReleaseItems'));
	let charList_dataCharSuperAtkTypeItems = JSON.parse(localStorage.getItem('charList_dataCharSuperAtkTypeItems'));
	let charList_dataCharLinksItems = JSON.parse(localStorage.getItem('charList_dataCharLinksItems'));
	let charList_dataCharCategoriesItems = JSON.parse(localStorage.getItem('charList_dataCharCategoriesItems'));

	for (let i = 0; i < charList_dataCharNameItems.length; i++) {
		let char_div = document.createElement("div");
		char_div.classList.add("char");
		setAttributes(char_div,
			"data-char-name", charList_dataCharNameItems[i],
			"data-char-title", charList_dataCharTitleItems[i],
			"data-char-type", charList_dataCharTypeItems[i],
			"data-char-rarity", charList_dataCharRarityItems[i],
			"data-char-class", charList_dataCharClassItems[i],
			"data-char-eza", charList_dataCharEzaItems[i],
			"data-char-id", charList_dataCharidItems[i],
			"data-char-hp", charList_dataCharHpItems[i],
			"data-char-attack", charList_dataCharAttackItems[i],
			"data-char-defense", charList_dataCharDefenseItems[i],
			"data-char-cost", charList_dataCharCostItems[i],
			"data-char-max-level", charList_dataCharMaxLevelItems[i],
			"data-char-super-atk-level", charList_dataCharSuperAtkLevelItems[i],
			"data-char-recruit", charList_dataCharRecruitItems[i],
			"data-char-awaken", charList_dataCharAwakenItems[i],
			"data-char-release", charList_dataCharReleaseItems[i],
			"data-char-super-atk-type", charList_dataCharSuperAtkTypeItems[i],
			"data-char-links", charList_dataCharLinksItems[i],
			"data-char-categories", charList_dataCharCategoriesItems[i]);
		charListSaved[i] = char_div;
	}
	
	let char_container_id = document.getElementById("char-container-id");
	char_container_id.innerHTML = "";
	for (let j = 0; j < charListSaved.length; j++) {
		char_container_id.appendChild(charListSaved[j]);
	}
	addChar();
}