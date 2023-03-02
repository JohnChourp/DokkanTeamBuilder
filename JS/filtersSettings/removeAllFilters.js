function removeAllFilters() {
  const filters = [
    {
      id: "sort-updated",
      class: "checkedSortBtn",
      list: [
        "sort-updated",
        "sort-released",
        "sort-type",
        "sort-rarity",
        "sort-cost",
        "sort-hp",
        "sort-attack",
        "sort-defense",
        "sort-character",
        "sort-sp-atk-lv",
        "sort-max-level",
      ],
    },
    {
      id: "year-1",
      class: "checkedAnniversaryBtn",
      list: [
        "year-1",
        "year-2",
        "year-3",
        "year-4",
        "year-5",
        "year-6",
        "year-7",
        "year-8",
      ],
    },
    {
      id: "agl",
      class: "checkedTypeBtn",
      list: ["agl", "teq", "int", "str", "phy"],
    },
    {
      id: "n",
      class: "checkedRarityBtn",
      list: ["n", "r", "sr", "ssr", "ur", "lr"],
    },
    { id: "super", class: "checkedClassBtn", list: ["super", "extreme"] },
    { id: "eza", class: "checkedEzaBtn", list: ["eza", "noeza"] },
    {
      id: "not-dokkan-awakened",
      class: "checkedAwakenBtn",
      list: ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"],
    },
    {
      id: "ki-blast",
      class: "checkedSuperAttackTypeBtn",
      list: ["ki-blast", "unarmed", "physical", "other"],
    },
    {
      id: "summonable",
      class: "checkedRecruitBtn",
      list: ["summonable", "free-to-play"],
    },
    {
      id: "db-saga",
      class: "checkedCategoryBtn",
      list: [
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
        "dragon-ball-heroes",
      ],
    },
  ];

  const filterIds = filters.reduce((result, filter) => {
    const selectedIds = filter.list.filter((id) =>
      document.getElementById(id).classList.contains(filter.class)
    );
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
    removeAllSortAndAddUpdated();
    removeAllAnniversary();
  }
  const searchBeforeEzaDropdown_btn = document.getElementById(
    "search-before-eza-id"
  );
  searchBeforeEzaDropdown_btn.placeholder = "Before EZA..";

  const searchAfterDropdown_btn = document.getElementById(
    "search-after-eza-id"
  );
  searchAfterDropdown_btn.placeholder = "After EZA..";
}
