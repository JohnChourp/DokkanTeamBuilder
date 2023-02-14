function saveCharList() {
	localStorage.setItem("nameOrTitle", 1);

	const char = document.getElementsByClassName("char");
	const charList = Array.from(char).map(c => ({
		name: c.getAttribute("data-char-name"),
		title: c.getAttribute("data-char-title"),
		type: c.getAttribute("data-char-type"),
		rarity: c.getAttribute("data-char-rarity"),
		class: c.getAttribute("data-char-class"),
		eza: c.getAttribute("data-char-eza"),
		id: c.getAttribute("data-char-id"),
		hp: c.getAttribute("data-char-hp"),
		attack: c.getAttribute("data-char-attack"),
		defense: c.getAttribute("data-char-defense"),
		cost: c.getAttribute("data-char-cost"),
		maxLevel: c.getAttribute("data-char-max-level"),
		superAtkLevel: c.getAttribute("data-char-super-atk-level"),
		recruit: c.getAttribute("data-char-recruit"),
		awaken: c.getAttribute("data-char-awaken"),
		release: c.getAttribute("data-char-release"),
		superAtkType: c.getAttribute("data-char-super-atk-type"),
		links: c.getAttribute("data-char-links"),
		categories: c.getAttribute("data-char-categories")
	}));

	localStorage.setItem("charList", JSON.stringify(charList));
	if (localStorage.getItem("charsPerPageNumItem") == null) {
		localStorage.setItem("charsPerPageNumItem", 32);
	}
}


function setCharList() {
	let charListSaved = [];
	const charListData = JSON.parse(localStorage.getItem('charList'));

	if (!charListData) {
		return;
	}

	const char_container_id = document.getElementById("char-container-id");

	for (let i = 0; i < charListData.length; i++) {
		const data = charListData[i];

		const char_div = document.createElement("div");
		char_div.classList.add("char");
		setAttributes(char_div,
			"data-char-name", data.name,
			"data-char-title", data.title,
			"data-char-type", data.type,
			"data-char-rarity", data.rarity,
			"data-char-class", data.class,
			"data-char-eza", data.eza,
			"data-char-id", data.id,
			"data-char-hp", data.hp,
			"data-char-attack", data.attack,
			"data-char-defense", data.defense,
			"data-char-cost", data.cost,
			"data-char-max-level", data.maxLevel,
			"data-char-super-atk-level", data.superAtkLevel,
			"data-char-recruit", data.recruit,
			"data-char-awaken", data.awaken,
			"data-char-release", data.release,
			"data-char-super-atk-type", data.superAtkType,
			"data-char-links", data.links,
			"data-char-categories", data.categories);
		charListSaved[i] = char_div;
	}

	char_container_id.innerHTML = "";
	for (let j = 0; j < charListSaved.length; j++) {
		char_container_id.appendChild(charListSaved[j]);
	}
}
