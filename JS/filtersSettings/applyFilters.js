function filtersMultipleUsed(
  dataChars,
  filtersEachLengthString,
  filtersEachLengthStringUsed,
  filtersUsed
) {
  const char = document.getElementsByClassName("char");

  let filters = [],
    filterCharItems = [],
    filterChars = [],
    filterCharItemsTemp = [],
    maxSuperAttackTypes = 0,
    maxCategories = 0,
    charListAll = create2DimensionalArray(
      filtersEachLengthStringUsed.length,
      1
    );

  for (j = 0; j < filtersEachLengthStringUsed.length; j++) {
    for (let i = 0; i < filtersEachLengthString.length; i++) {
      if (filtersEachLengthStringUsed[j] == filtersEachLengthString[i]) {
        filters[j] = filtersUsed[i];
        filterCharItems[j] = document.querySelectorAll(
          "[" + dataChars[i] + "]"
        );
        filterChars[j] = dataChars[i];
      }
    }
  }

  let filterSuperAttackTypeItems = create2DimensionalArray(
    filterCharItems[0].length,
    1
  );
  let filterCategoryItems = create2DimensionalArray(
    filterCharItems[0].length,
    1
  );

  for (k = 0; k < filtersEachLengthStringUsed.length; k++) {
    if (filtersUsed[0].length > 0) {
      for (let i = 0; i < filterCharItems[k].length; i++) {
        filterCharItemsTemp[i] = filterCharItems[k][i]
          .getAttribute(filterChars[k])
          .split(",");
        if (filterCharItemsTemp[i].length > maxCategories) {
          maxCategories = filterCharItemsTemp[i].length;
        }
      }
      for (let j = 0; j < maxCategories; j++) {
        for (let i = 0; i < filterCharItems[k].length; i++) {
          filterCategoryItems[i][j] = filterCharItemsTemp[i][j];
        }
      }
    }
    if (filtersUsed[5].length > 0) {
      for (let i = 0; i < filterCharItems[k].length; i++) {
        filterCharItemsTemp[i] = filterCharItems[k][i]
          .getAttribute(filterChars[k])
          .split(",");
        if (filterCharItemsTemp[i].length > maxSuperAttackTypes) {
          maxSuperAttackTypes = filterCharItemsTemp[i].length;
        }
      }
      for (let j = -1; j < maxSuperAttackTypes / 2 - 1; j++) {
        for (let i = 0; i < filterCharItems[k].length; i++) {
          filterSuperAttackTypeItems[i][j + 1] = filterCharItemsTemp[i][j + 2];
        }
      }
    }

    if (k == 0) {
      for (let j = 0; j < filters[k].length; j++) {
        for (let i = 0; i < char.length; i++) {
          if (filtersUsed[0].length > 0) {
            for (let l = 0; l < maxCategories; l++) {
              if (filterCategoryItems[i][l] == filters[k][j]) {
                charListAll[0][i] = char.item(i);
              }
            }
          }
          if (filtersUsed[5].length > 0) {
            for (let l = 0; l < maxSuperAttackTypes / 2; l++) {
              if (filterSuperAttackTypeItems[i][l] == filters[k][j]) {
                charListAll[0][i] = char.item(i);
              }
            }
          }
          if (
            filterCharItems[k][i].getAttribute(filterChars[k]) == filters[k][j]
          ) {
            charListAll[0][i] = char.item(i);
          }
        }
      }
    } else {
      for (let j = 0; j < filters[k].length; j++) {
        for (let i = 0; i < charListAll[k - 1].length; i++) {
          if (charListAll[k - 1][i] != undefined) {
            if (filtersUsed[0].length > 0) {
              for (let l = 0; l < maxCategories; l++) {
                if (filterCategoryItems[i][l] == filters[k][j]) {
                  charListAll[k][i] = char.item(i);
                }
              }
            }
            if (filtersUsed[5].length > 0) {
              for (let l = 0; l < maxSuperAttackTypes / 2; l++) {
                if (filterSuperAttackTypeItems[i][l] == filters[k][j]) {
                  charListAll[k][i] = char.item(i);
                }
              }
            }
            if (
              filterCharItems[k][i].getAttribute(filterChars[k]) ==
              filters[k][j]
            ) {
              charListAll[k][i] = char.item(i);
            }
          }
        }
      }
    }
  }
  return charListAll[filtersEachLengthStringUsed.length - 1];
}

function applyFilters() {
  const sortUpdated = document.getElementById("sort-updated");

  //filterAnniversary
  const filterAnniversary = [
    "year-1",
    "year-2",
    "year-3",
    "year-4",
    "year-5",
    "year-6",
    "year-7",
    "year-8",
  ];
  let filterAnniversaryUsed = [];
  for (let i = 0; i < filterAnniversary.length; i++) {
    if (
      document
        .getElementById(filterAnniversary[i])
        .classList.contains("checkedAnniversaryBtn")
    ) {
      filterAnniversaryUsed[i] = filterAnniversary[i];
    }
  }
  filterAnniversaryUsed = cleanArray(filterAnniversaryUsed, undefined);

  if (
    sortUpdated.classList.contains("checkedSortBtn") ||
    filterAnniversaryUsed.length > 0
  ) {
    setCharList();
    saveCharListTemp();
  } else {
    setCharListTemp();
  }
  const charContainerId = document.getElementById("char-container-id");
  const char = document.getElementsByClassName("char");
  const searchOneCharDropdownValue = document.getElementsByClassName(
    "search-one-char-dropdown-options-value"
  );

  const dataCharCategories = "data-char-categories",
    dataCharRarity = "data-char-rarity",
    dataCharType = "data-char-type",
    dataCharClass = "data-char-class",
    dataCharAwaken = "data-char-awaken",
    dataCharSuperAtkType = "data-char-super-atk-type",
    dataCharEza = "data-char-eza",
    dataCharRecruit = "data-char-recruit",
    dataCharRelease = "data-char-release",
    dataCharCost = "data-char-cost",
    dataCharHp = "data-char-hp",
    dataCharAttack = "data-char-attack",
    dataCharDefense = "data-char-defense",
    dataCharName = "data-char-name",
    dataCharSpAtkLv = "data-char-super-atk-level",
    dataCharMaxLevel = "data-char-max-level";

  const dataChars = [
    dataCharCategories,
    dataCharRarity,
    dataCharType,
    dataCharClass,
    dataCharAwaken,
    dataCharSuperAtkType,
    dataCharEza,
    dataCharRecruit,
  ];

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
    ],
    filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"],
    filterType = ["agl", "teq", "int", "str", "phy"],
    filterClass = ["super", "extreme"],
    filterAwaken = [
      "not-dokkan-awakened",
      "pre-dokkan-awakened",
      "dokkan-awakened",
    ],
    filterSuperAttackType = ["ki-blast", "unarmed", "physical", "other"],
    filterEza = ["eza", "noeza"],
    filterRecruit = ["summonable", "free-to-play"];

  //checked filter Btn
  const filterClasses = [
    "checkedCategoryBtn",
    "checkedRarityBtn",
    "checkedTypeBtn",
    "checkedClassBtn",
    "checkedAwakenBtn",
    "checkedSuperAttackTypeBtn",
    "checkedEzaBtn",
    "checkedRecruitBtn",
  ];
  const filtersEachLength = [];
  const filtersEachLengthString = [];

  for (let i = 0; i < filterClasses.length; i++) {
    const length = document.getElementsByClassName(filterClasses[i]).length;
    filtersEachLength.push(length);
    filtersEachLengthString.push(String.fromCharCode(65 + i)); // Convert index to corresponding letter of the alphabet
  }

  //select one char
  selectOneChar(searchOneCharDropdownValue);

  //sortRelease
  const sortReleased = document.getElementById("sort-released");
  if (sortReleased.classList.contains("checkedSortBtn")) {
    const dataCharReleaseItems = document.querySelectorAll(
      "[" + dataCharRelease + "]"
    );
    let [temp_char, charLength] = sortDirectionDisplayOrder(
      char,
      charContainerId
    );

    const sortedChars = {};
    for (let i = 0; i < charLength; i++) {
      const releaseDate = dataCharReleaseItems[i].getAttribute(dataCharRelease);
      let year, month;
      if (releaseDate.length == 12) {
        year = releaseDate.slice(-4);
        month = releaseDate.slice(-12, -9);
      }
      if (releaseDate.length == 25) {
        year = releaseDate.slice(-17, -13);
        month = releaseDate.slice(-25, -22);
      }

      if (
        year === "2015" ||
        year === "2016" ||
        year === "2017" ||
        year === "2018" ||
        year === "2019" ||
        year === "2020" ||
        year === "2021" ||
        year === "2022" ||
        year === "2023"
      ) {
        if (!sortedChars[year]) {
          sortedChars[year] = {};
        }

        if (!sortedChars[year][month]) {
          sortedChars[year][month] = [];
        }

        sortedChars[year][month].push(temp_char[i]);
      }
    }

    for (const year in sortedChars) {
      for (const month in sortedChars[year]) {
        const chars = sortedChars[year][month];
        chars.forEach((char) => charContainerId.appendChild(char));
      }
    }
  }
  //sortType
  const sortType = document.getElementById("sort-type");
  if (sortType.classList.contains("checkedSortBtn")) {
    const dataCharTypeItems = document.querySelectorAll(
      "[" + dataCharType + "]"
    );
    let [temp_char, charLength] = sortDirectionDisplayOrder(
      char,
      charContainerId
    );

    const charByType = {};
    for (let i = 0; i < charLength; i++) {
      const type = dataCharTypeItems[i].getAttribute(dataCharType).slice(-4);
      if (!charByType[type]) {
        charByType[type] = [];
      }
      charByType[type].push(temp_char[i]);
    }

    const types = ["agl", "teq", "int", "str", "phy"];
    const typesLength = types.length;
    for (let i = 0; i < typesLength; i++) {
      const type = types[i];
      if (charByType[type]) {
        const charByTypeLength = charByType[type].length;
        for (let j = 0; j < charByTypeLength; j++) {
          charContainerId.appendChild(charByType[type][j]);
        }
      }
    }
  }
  //sortRarity
  const sortRarity = document.getElementById("sort-rarity");
  if (sortRarity.classList.contains("checkedSortBtn")) {
    const dataCharRarityItems = document.querySelectorAll(
      "[" + dataCharRarity + "]"
    );
    let [temp_char, charLength] = sortDirectionDisplayOrder(
      char,
      charContainerId
    );

    const charByRarity = {};
    for (let i = 0; i < charLength; i++) {
      const rarity = dataCharRarityItems[i]
        .getAttribute(dataCharRarity)
        .slice(-4);
      if (!charByRarity[rarity]) {
        charByRarity[rarity] = [];
      }
      charByRarity[rarity].push(temp_char[i]);
    }

    const rarities = ["n", "r", "sr", "ssr", "ur", "lr"];
    const raritiesLength = rarities.length;
    for (let i = 0; i < raritiesLength; i++) {
      const rarity = rarities[i];
      if (charByRarity[rarity]) {
        const charByRarityLength = charByRarity[rarity].length;
        for (let j = 0; j < charByRarityLength; j++) {
          charContainerId.appendChild(charByRarity[rarity][j]);
        }
      }
    }
  }
  //sortCost
  const sortCost = document.getElementById("sort-cost");
  if (sortCost.classList.contains("checkedSortBtn")) {
    const dataCharCostItems = document.querySelectorAll(
      "[" + dataCharCost + "]"
    );
    let [temp_char, charLength] = sortDirectionDisplayOrder(
      char,
      charContainerId
    );
    displayOrderremoveDuplicatesAndSortValues(
      charLength,
      dataCharCostItems,
      dataCharCost,
      charContainerId,
      temp_char
    );
  }
  //sortHp
  const sortHp = document.getElementById("sort-hp");
  if (sortHp.classList.contains("checkedSortBtn")) {
    const dataChaHpItems = document.querySelectorAll("[" + dataCharHp + "]");
    let [temp_char, charLength] = sortDirectionDisplayOrder(
      char,
      charContainerId
    );
    displayOrderremoveDuplicatesAndSortValues(
      charLength,
      dataChaHpItems,
      dataCharHp,
      charContainerId,
      temp_char
    );
  }
  //sortAttack
  const sortAttack = document.getElementById("sort-attack");
  if (sortAttack.classList.contains("checkedSortBtn")) {
    const dataCharAttackItems = document.querySelectorAll(
      "[" + dataCharAttack + "]"
    );
    let [temp_char, charLength] = sortDirectionDisplayOrder(
      char,
      charContainerId
    );
    displayOrderremoveDuplicatesAndSortValues(
      charLength,
      dataCharAttackItems,
      dataCharAttack,
      charContainerId,
      temp_char
    );
  }
  //sortDefense
  const sortDefense = document.getElementById("sort-defense");
  if (sortDefense.classList.contains("checkedSortBtn")) {
    const dataCharDefenseItems = document.querySelectorAll(
      "[" + dataCharDefense + "]"
    );
    let [temp_char, charLength] = sortDirectionDisplayOrder(
      char,
      charContainerId
    );
    displayOrderremoveDuplicatesAndSortValues(
      charLength,
      dataCharDefenseItems,
      dataCharDefense,
      charContainerId,
      temp_char
    );
  }
  //sortCharacter
  //need better sort names method so thats it sorts like the in-game method
  const sortCharacter = document.getElementById("sort-character");
  if (sortCharacter.classList.contains("checkedSortBtn")) {
    const dataCharNameItems = document.querySelectorAll(
      "[" + dataCharName + "]"
    );
    const temp_char = Array.from(char);
    const charLength = char.length;
    charContainerId.innerHTML = "";

    let values = new Array(charLength);
    for (let i = 0; i < charLength; i++) {
      values[i] = dataCharNameItems[i].getAttribute(dataCharName);
    }
    let sortedvalues = removeDuplicates(values);

    const fragment = document.createDocumentFragment();
    for (j = 0; j < sortedvalues.length; j++) {
      for (let i = 0; i < charLength; i++) {
        if (values[i] === sortedvalues[j]) {
          fragment.appendChild(temp_char[i]);
        }
      }
    }
    charContainerId.appendChild(fragment);
  }
  //sortSpAtkLv
  const sortSpAtkLv = document.getElementById("sort-sp-atk-lv");
  if (sortSpAtkLv.classList.contains("checkedSortBtn")) {
    const dataCharSpAtkLevelItems = document.querySelectorAll(
      "[" + dataCharSpAtkLv + "]"
    );
    let [temp_char, charLength] = sortDirectionDisplayOrder(
      char,
      charContainerId
    );
    displayOrderremoveDuplicatesAndSortValues(
      charLength,
      dataCharSpAtkLevelItems,
      dataCharSpAtkLv,
      charContainerId,
      temp_char
    );
  }
  //sortMaxLevel
  const sortMaxLevel = document.getElementById("sort-max-level");
  if (sortMaxLevel.classList.contains("checkedSortBtn")) {
    const dataCharMaxLevelItems = document.querySelectorAll(
      "[" + dataCharMaxLevel + "]"
    );
    let [temp_char, charLength] = sortDirectionDisplayOrder(
      char,
      charContainerId
    );
    displayOrderremoveDuplicatesAndSortValues(
      charLength,
      dataCharMaxLevelItems,
      dataCharMaxLevel,
      charContainerId,
      temp_char
    );
  }

  //BeforeEza AfterEza
  const searchBeforeEzaDropdown_btn = document.getElementById(
    "search-before-eza-id"
  );
  const searchAfterEzaDropdown_btn = document.getElementById(
    "search-after-eza-id"
  );
  if (
    searchBeforeEzaDropdown_btn.placeholder != "Before EZA.." ||
    searchAfterEzaDropdown_btn.placeholder != "After EZA.."
  ) {
    const yearBeforePlaceHolder =
      searchBeforeEzaDropdown_btn.placeholder.slice(-4);
    const monthBeforePlaceHolder =
      searchBeforeEzaDropdown_btn.placeholder.slice(-12, -9);
    const dayBeforePlaceHolder = searchBeforeEzaDropdown_btn.placeholder.slice(
      -8,
      -6
    );

    const yearAfterPlaceHolder =
      searchAfterEzaDropdown_btn.placeholder.slice(-4);
    const monthAfterPlaceHolder = searchAfterEzaDropdown_btn.placeholder.slice(
      -12,
      -9
    );
    const dayAfterPlaceHolder = searchAfterEzaDropdown_btn.placeholder.slice(
      -8,
      -6
    );

    let [temp_char, charLength] = sortDirectionDisplayOrder(
      char,
      charContainerId
    );

    const sortedChars = {};
    for (let i = 0; i < charLength; i++) {
      let [yearBeforeEza, monthBeforeEza, dayBeforeEza] =
        filterBeforeEzaReleaseDate(dataCharReleaseItems, dataCharRelease, i);

      let [yearAfterEza, monthAfterEza, dayAfterEza] =
        filterAfterEzaReleaseDate(dataCharReleaseItems, dataCharRelease, i);

      if (
        (yearBeforeEza == yearBeforePlaceHolder.toString() &&
          monthBeforeEza == monthBeforePlaceHolder &&
          dayBeforeEza == dayBeforePlaceHolder.toString()) ||
        (yearAfterEza == yearAfterPlaceHolder.toString() &&
          monthAfterEza == monthAfterPlaceHolder &&
          dayAfterEza == dayAfterPlaceHolder.toString())
      ) {
        anniversaryFilterPushCharInSortedChars(
          sortedChars,
          yearBeforeEza,
          monthBeforeEza,
          dayBeforeEza,
          temp_char,
          i
        );
      }
    }
    filterBeforeAfterEzaPutCharInContainer(sortedChars, charContainerId);
  }

  //save list to local storage
  if (
    !sortUpdated.classList.contains("checkedSortBtn") ||
    filterAnniversaryUsed.length < 0
  ) {
    saveCharListTemp();
  }

  //sortDirection
  sortDirectionAscendingDesencding(char, charContainerId);

  //filters used
  const filtersUsed = filterCategoryUsed(
    filterCategories,
    filterCategoriesNames,
    filterRarity,
    filterType,
    filterClass,
    filterAwaken,
    filterSuperAttackType,
    filterEza,
    filterRecruit
  );

  //check how many filter are used
  let [sumFilterUsed, filtersEachLengthStringUsed] = filterSumCategoryUsed(
    filtersUsed,
    filtersEachLength,
    filtersEachLengthString
  );

  //create list of filtered characters
  let charListDefault = [];
  if (sumFilterUsed == 0) {
    for (let i = 0; i < char.length; i++) {
      charListDefault[i] = char.item(i);
    }
  }
  if (sumFilterUsed > 0) {
    charListDefault = filtersMultipleUsed(
      dataChars,
      filtersEachLengthString,
      filtersEachLengthStringUsed,
      filtersUsed
    );
  }
  charListDefault = cleanArray(charListDefault);

  //anniversaryFilter
  if (filterAnniversaryUsed.length > 0) {
    let dataCharReleaseItems = [],
      charListDefaultAnniversary = [];
    for (let i = 0; i < charListDefault.length; i++) {
      dataCharReleaseItems[i] =
        charListDefault[i].getAttribute(dataCharRelease);
    }

    for (let j = 0; j < filterAnniversary.length; j++) {
      if (filterAnniversaryUsed[0] == "year-" + (j + 1)) {
        for (let i = 0; i < charListDefault.length; i++) {
          let year, month, day;
          const releaseDate = dataCharReleaseItems[i];
          if (releaseDate.length == 12) {
            year = releaseDate.slice(-4);
            month = releaseDate.slice(-12, -9);
            day = parseInt(releaseDate.slice(-8, -6));
          }
          if (releaseDate.length == 25) {
            year = releaseDate.slice(-17, -13);
            month = releaseDate.slice(-25, -22);
            day = releaseDate.slice(-21, -19);
          }
          if (
            year === (2015 + j).toString() &&
            ((month === "Jul" && day > 15) ||
              month === "Aug" ||
              month === "Sep" ||
              month === "Oct" ||
              month === "Nov" ||
              month === "Dec")
          ) {
            charListDefaultAnniversary[i] = charListDefault[i];
          }
          if (
            year === (2016 + j).toString() &&
            (month === "Jan" ||
              month === "Feb" ||
              month === "Mar" ||
              month === "Apr" ||
              month === "May" ||
              month === "Jun" ||
              (month === "Jul" && day < 16))
          ) {
            charListDefaultAnniversary[i] = charListDefault[i];
          }
        }
      }
    }
    charListDefaultAnniversary = cleanArray(charListDefaultAnniversary);

    //create pagination
    createFilterPagination(charListDefaultAnniversary);

    //add filter names in search one char
    if (sumFilterUsed > 0 || filterAnniversaryUsed.length > 0) {
      let charListFilteredNames = [];
      for (let i = 0; i < charListDefaultAnniversary.length; i++) {
        charListFilteredNames[i] =
          charListDefaultAnniversary[i].getAttribute("data-char-name");
      }
      addOnlyFilteredCharNames();
    }
  } else {
    //create pagination
    createFilterPagination(charListDefault);

    //add filter names in search one char
    if (sumFilterUsed > 0 || filterAnniversaryUsed.length > 0) {
      let charListFilteredNames = [];
      for (let i = 0; i < charListDefault.length; i++) {
        charListFilteredNames[i] =
          charListDefault[i].getAttribute("data-char-name");
      }
      addOnlyFilteredCharNames();
    }
  }
}
