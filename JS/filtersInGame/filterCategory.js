function filterCategory(categoryFilter) {
  const filterCategories = [
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
  ];

  const categoryId = document.getElementById(categoryFilter);
  let categoryFilterPos = 0;
  for (let i = 0; i < filterCategories.length; i++) {
    if (filterCategories[i] == categoryFilter) {
      categoryFilterPos = i;
    }
  }
  const categoryChecked = categoryId.classList.contains("checkedCategoryBtn");
  if (!categoryChecked) {
    categoryId.classList.add("checkedCategoryBtn");
    //filterCategory
    if (categoryFilterPos > -1 && categoryFilterPos < 8) {
      categoryId.children.item(0).classList.add("checkedCategoryBtnInsideOrange");
    }
    if (categoryFilterPos > 7 && categoryFilterPos < 19) {
      categoryId.children.item(0).classList.add("checkedCategoryBtnInsideGreen");
    }
    if (categoryFilterPos > 18 && categoryFilterPos < 30) {
      categoryId.children.item(0).classList.add("checkedCategoryBtnInsideYellow");
    }
    if (categoryFilterPos > 29 && categoryFilterPos < 41) {
      categoryId.children.item(0).classList.add("checkedCategoryBtnInsideCyan");
    }
    if (categoryFilterPos > 40 && categoryFilterPos < 48) {
      categoryId.children.item(0).classList.add("checkedCategoryBtnInsideBlue");
    }
    if (categoryFilterPos > 47 && categoryFilterPos < 60) {
      categoryId.children.item(0).classList.add("checkedCategoryBtnInsidePurple");
    }
    if (categoryFilterPos > 59 && categoryFilterPos < 72) {
      categoryId.children.item(0).classList.add("checkedCategoryBtnInsideRoze");
    }
    if (categoryFilterPos > 71 && categoryFilterPos < 87) {
      categoryId.children.item(0).classList.add("checkedCategoryBtnInsideDarkGreen");
    }
    if (categoryFilterPos > 86 && categoryFilterPos < 89) {
      categoryId.children.item(0).classList.add("checkedCategoryBtnInsideDarkBlue");
    }
  } else {
    categoryId.classList.remove("checkedCategoryBtn");
    if (categoryFilterPos > -1 && categoryFilterPos < 8) {
      categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideOrange");
    }
    if (categoryFilterPos > 7 && categoryFilterPos < 19) {
      categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideGreen");
    }
    if (categoryFilterPos > 18 && categoryFilterPos < 30) {
      categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideYellow");
    }
    if (categoryFilterPos > 29 && categoryFilterPos < 41) {
      categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideCyan");
    }
    if (categoryFilterPos > 40 && categoryFilterPos < 48) {
      categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideBlue");
    }
    if (categoryFilterPos > 47 && categoryFilterPos < 60) {
      categoryId.children.item(0).classList.remove("checkedCategoryBtnInsidePurple");
    }
    if (categoryFilterPos > 59 && categoryFilterPos < 72) {
      categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideRoze");
    }
    if (categoryFilterPos > 71 && categoryFilterPos < 87) {
      categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideDarkGreen");
    }
    if (categoryFilterPos > 86 && categoryFilterPos < 89) {
      categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideDarkBlue");
    }
  }
}

function removeAllCategory() {
  const filterCategory = [
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
  ];

  const categoriesSelectId = document.getElementById("categories-select-id");
  categoriesSelectId.style.fontSize = "16px";

  for (let i = 0; i < filterCategory.length; i++) {
    const categoryId = document.getElementById(filterCategory[i]);
    if (categoryId.classList.contains("checkedCategoryBtn")) {
      if (i > -1 && i < 8) {
        categoryId.classList.remove("checkedCategoryBtn");
        categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideOrange");
        removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
      }
      if (i > 7 && i < 19) {
        categoryId.classList.remove("checkedCategoryBtn");
        categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideGreen");
        removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
      }
      if (i > 18 && i < 30) {
        categoryId.classList.remove("checkedCategoryBtn");
        categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideYellow");
        removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
      }
      if (i > 29 && i < 41) {
        categoryId.classList.remove("checkedCategoryBtn");
        categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideCyan");
        removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
      }
      if (i > 40 && i < 48) {
        categoryId.classList.remove("checkedCategoryBtn");
        categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideBlue");
        removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
      }
      if (i > 47 && i < 60) {
        categoryId.classList.remove("checkedCategoryBtn");
        categoryId.children.item(0).classList.remove("checkedCategoryBtnInsidePurple");
        removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
      }
      if (i > 59 && i < 72) {
        categoryId.classList.remove("checkedCategoryBtn");
        categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideRoze");
        removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
      }
      if (i > 71 && i < 87) {
        categoryId.classList.remove("checkedCategoryBtn");
        categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideDarkGreen");
        removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
      }
      if (i > 86 && i < 89) {
        categoryId.classList.remove("checkedCategoryBtn");
        categoryId.children.item(0).classList.remove("checkedCategoryBtnInsideDarkBlue");
        removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");
      }
    }
  }

  let filterCategoryContainerTextDefault = document.getElementsByClassName(
    "filter-category-container-text-default"
  );
  filterCategoryContainerTextDefault.item(0).innerHTML = "Select Category";
}

function openCategories() {
  const allCategoriesId = document.getElementById("all-categories-id");

  const applyCategoriesBgId = document.getElementById("apply-categories-bg-id");
  const applyCategoriesId = document.getElementById("apply-categories-id");
  const applyCategoriesTextId = document.getElementById(
    "apply-categories-text-id"
  );
  const removeAllCategories = document.getElementById(
    "remove-all-categories-id"
  );
  const okCategories = document.getElementById("ok-categories-id");

  let width = "400px";

  for (let i = 100; i < 416; i++) {
    if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
      width = i - 1 + "px";
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
  const applyCategoriesTextId = document.getElementById(
    "apply-categories-text-id"
  );
  const okCategories = document.getElementById("ok-categories-id");
  const removeAllCategories = document.getElementById(
    "remove-all-categories-id"
  );

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

  let width = "400px";

  for (let i = 100; i < 416; i++) {
    if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
      width = i - 1 + "px";
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
  const filterCategories = [
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
    filterCategoriesNames = [
      "DB Saga",
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

      "Low-Class Warrior",
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
      "Dragon Ball Heroes",
    ];
  let filterCategoryUsed = [],
    filterCategoryUsedPos = 0;
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

  //set default select categories btn
  const categoriesSelectId = document.getElementById("categories-select-id");
  categoriesSelectId.style.fontSize = "16px";

  if (filterCategoryUsed.length == 0) {
    removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
    removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
    removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
    removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
    removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
    removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
    removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
    removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
    removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");
    const filterCategoryContainerTextDefault = document.getElementsByClassName(
      "filter-category-container-text-default"
    );
    filterCategoryContainerTextDefault.item(0).innerHTML = "Select Category";
  }

  if (filterCategoryUsed.length == 1) {
    if (filterCategoryUsedPos > -1 && filterCategoryUsedPos < 8) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");

      setCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
    }
    if (filterCategoryUsedPos > 7 && filterCategoryUsedPos < 19) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");

      setCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
    }
    if (filterCategoryUsedPos > 18 && filterCategoryUsedPos < 30) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");

      setCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
    }
    if (filterCategoryUsedPos > 29 && filterCategoryUsedPos < 41) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");

      setCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
    }
    if (filterCategoryUsedPos > 40 && filterCategoryUsedPos < 48) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");

      setCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
    }
    if (filterCategoryUsedPos > 47 && filterCategoryUsedPos < 60) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");

      setCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
    }
    if (filterCategoryUsedPos > 59 && filterCategoryUsedPos < 72) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");

      setCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
    }
    if (filterCategoryUsedPos > 71 && filterCategoryUsedPos < 87) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");

      setCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
    }
    if (filterCategoryUsedPos > 86 && filterCategoryUsedPos < 89) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");

      setCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");
    }
    const filterCategoryContainerTextDefault = document.getElementsByClassName(
      "filter-category-container-text-categories"
    );
    filterCategoryContainerTextDefault.item(0).innerHTML = filterCategoryUsed[0];
    if (filterCategoryUsed[0] == "Representatives of Universe 7") {
      categoriesSelectId.style.fontSize = "12px";
    } else if (filterCategoryUsed[0] == "Power Beyond Super Saiyan") {
      categoriesSelectId.style.fontSize = "12.5px";
    } else if (filterCategoryUsed[0] == "Bond of Master and Disciple") {
      categoriesSelectId.style.fontSize = "13px";
    } else if (filterCategoryUsed[0] == "Corroded Body And Mind") {
      categoriesSelectId.style.fontSize = "14px";
    } else if (filterCategoryUsed[0] == "Bond of Parent and Child" || filterCategoryUsed[0] == "Space Traveling Warriors") {
      categoriesSelectId.style.fontSize = "14.5px";
    } else if (filterCategoryUsed[0] == "Universe Survival Saga") {
      categoriesSelectId.style.fontSize = "15.5px";
    } else {
      categoriesSelectId.style.fontSize = "16px";
    }
  }

  if (filterCategoryUsed.length > 1) {
    if (filterCategoryUsedPos > -1 && filterCategoryUsedPos < 8) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "orange");
    }
    if (filterCategoryUsedPos > 7 && filterCategoryUsedPos < 19) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "green");
    }
    if (filterCategoryUsedPos > 18 && filterCategoryUsedPos < 30) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "yellow");
    }
    if (filterCategoryUsedPos > 29 && filterCategoryUsedPos < 41) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "cyan");
    }
    if (filterCategoryUsedPos > 40 && filterCategoryUsedPos < 48) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "blue");
    }
    if (filterCategoryUsedPos > 47 && filterCategoryUsedPos < 60) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "purple");
    }
    if (filterCategoryUsedPos > 59 && filterCategoryUsedPos < 72) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "roze");
    }
    if (filterCategoryUsedPos > 71 && filterCategoryUsedPos < 87) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-green");
    }
    if (filterCategoryUsedPos > 86 && filterCategoryUsedPos < 89) {
      removeCategoriesSelectIdStylesBtn(categoriesSelectId, "dark-blue");
    }

    const filterCategoryContainerTextDefault = document.getElementsByClassName(
      "filter-category-container-text-default"
    );
    filterCategoryContainerTextDefault.item(0).innerHTML =
    '<span id="categories-sum-number-selected-id">'+"Selected: "+ "</span>" +'<span id="categories-sum-number-id">'+ filterCategoryUsed.length + "</span>";
  }
}

function setCategoriesSelectIdStylesBtn(categoriesSelectId, categoryColor) {
  switch (categoryColor) {
    case "orange":
      categoriesSelectId.children.item(0).classList.add("checkedCategoryBtnInsideOrange");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside-orange");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category-orange");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category-orange");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-categories");
      break;
    case "green":
      categoriesSelectId.children.item(0).classList.add("checkedCategoryBtnInsideGreen");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside-green");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category-green");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category-green");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-categories");
      break;
    case "yellow":
      categoriesSelectId.children.item(0).classList.add("checkedCategoryBtnInsideYellow");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside-yellow");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category-yellow");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category-yellow");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-categories");
      break;
    case "cyan":
      categoriesSelectId.children.item(0).classList.add("checkedCategoryBtnInsideCyan");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside-cyan");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category-cyan");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category-cyan");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-categories");
      break;
    case "blue":
      categoriesSelectId.children.item(0).classList.add("checkedCategoryBtnInsideBlue");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside-blue");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category-blue");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category-blue");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-categories");
      break;
    case "purple":
      categoriesSelectId.children.item(0).classList.add("checkedCategoryBtnInsidePurple");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside-purple");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category-purple");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category-purple");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-categories");
      break;
    case "roze":
      categoriesSelectId.children.item(0).classList.add("checkedCategoryBtnInsideRoze");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside-roze");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category-roze");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category-roze");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-categories");
      break;
    case "dark-green":
      categoriesSelectId.children.item(0).classList.add("checkedCategoryBtnInsideDarkGreen");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside-dark-green");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category-dark-green");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category-dark-green");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-categories");
      break;
    case "dark-blue":
      categoriesSelectId.children.item(0).classList.add("checkedCategoryBtnInsideDarkBlue");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside-dark-blue");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category-dark-blue");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category-dark-blue");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-categories");
      break;
  }
}

function removeCategoriesSelectIdStylesBtn(categoriesSelectId, categoryColor) {
  switch (categoryColor) {
    case "orange":
      categoriesSelectId.children.item(0).classList.remove("checkedCategoryBtnInsideOrange");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside-orange");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category-orange");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category-orange");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-categories");
      break;
    case "green":
      categoriesSelectId.children.item(0).classList.remove("checkedCategoryBtnInsideGreen");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside-green");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category-green");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category-green");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-categories");
      break;
    case "yellow":
      categoriesSelectId.children.item(0).classList.remove("checkedCategoryBtnInsideYellow");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside-yellow");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category-yellow");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category-yellow");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-categories");
      break;
    case "cyan":
      categoriesSelectId.children.item(0).classList.remove("checkedCategoryBtnInsideCyan");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside-cyan");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category-cyan");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category-cyan");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-categories");
      break;
    case "blue":
      categoriesSelectId.children.item(0).classList.remove("checkedCategoryBtnInsideBlue");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside-blue");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category-blue");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category-blue");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-categories");
      break;
    case "purple":
      categoriesSelectId.children.item(0).classList.remove("checkedCategoryBtnInsidePurple");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside-purple");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category-purple");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category-purple");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-categories");
      break;
    case "roze":
      categoriesSelectId.children.item(0).classList.remove("checkedCategoryBtnInsideRoze");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside-roze");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category-roze");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category-roze");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-categories");
      break;
    case "dark-green":
      categoriesSelectId.children.item(0).classList.remove("checkedCategoryBtnInsideDarkGreen");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside-dark-green");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category-dark-green");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category-dark-green");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-categories");
      break;
    case "dark-blue":
      categoriesSelectId.children.item(0).classList.remove("checkedCategoryBtnInsideDarkBlue");
      categoriesSelectId.children.item(0).classList.add("filter-category-container-inside");
      categoriesSelectId.children.item(0).classList.remove("filter-category-container-inside-dark-blue");
      categoriesSelectId.children.item(0).children.item(0).classList.add("top-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(0).classList.remove("top-half-bg-color-category-dark-blue");
      categoriesSelectId.children.item(0).children.item(1).classList.add("bottom-half-bg-color-category");
      categoriesSelectId.children.item(0).children.item(1).classList.remove("bottom-half-bg-color-category-dark-blue");
      categoriesSelectId.children.item(0).children.item(3).classList.add("filter-category-container-text-default");
      categoriesSelectId.children.item(0).children.item(3).classList.remove("filter-category-container-text-categories");
      break;
  }
}