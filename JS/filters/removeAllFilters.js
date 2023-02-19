function removeAllFilters() {
	const filters = [{ id: "agl", class: "checkedTypeBtn", list: ["agl", "teq", "int", "str", "phy"] },
	{ id: "n", class: "checkedRarityBtn", list: ["n", "r", "sr", "ssr", "ur", "lr"] },
	{ id: "super", class: "checkedClassBtn", list: ["super", "extreme"] },
	{ id: "eza", class: "checkedEzaBtn", list: ["eza", "noeza"] },
	{ id: "not-dokkan-awakened", class: "checkedAwakenBtn", list: ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"] },
	{ id: "ki-blast", class: "checkedSuperAttackTypeBtn", list: ["ki-blast", "unarmed", "physical", "other"] },
	{ id: "summonable", class: "checkedRecruitBtn", list: ["summonable", "free-to-play"] },
	{
		id: "db-saga", class: "checkedCategoryBtn", list: [
			"db-saga",
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
			"kamehameha"]
	}
	];

	const filterIds = filters.reduce((result, filter) => {
		const selectedIds = filter.list.filter(id => document.getElementById(id).classList.contains(filter.class));
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
		removeAllCategory();
	}
}