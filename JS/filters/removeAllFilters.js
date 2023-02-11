function removeAllFilters() {
	let filters = [{ id: "agl", class: "checkedTypeBtn", list: ["agl", "teq", "int", "str", "phy"] },
	{ id: "n", class: "checkedRarityBtn", list: ["n", "r", "sr", "ssr", "ur", "lr"] },
	{ id: "super", class: "checkedClassBtn", list: ["super", "extreme"] },
	{ id: "eza", class: "checkedEzaBtn", list: ["eza", "noeza"] },
	{ id: "not-dokkan-awakened", class: "checkedAwakenBtn", list: ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"] },
	{ id: "ki-blast", class: "checkedSuperAttackTypeBtn", list: ["ki-blast", "unarmed", "physical", "other"] },
	{ id: "summonable", class: "checkedRecruitBtn", list: ["summonable", "free-to-play"] }
	];

	let filterIds = filters.reduce((result, filter) => {
		let selectedIds = filter.list.filter(id => document.getElementById(id).classList.contains(filter.class));
		return result.concat(selectedIds);
	}, []);

	if (filterIds.length > 0) {
		removeAllRarity();
		removeAllType();
		removeAllClass();
		removeAllEza();
		removeAllDokkanAwaken();
		removeAllSuperAttackType();
		removeAllRecruit();
	}
}