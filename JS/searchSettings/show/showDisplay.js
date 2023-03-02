window.onclick = function (event) {
  const dropdowns = document.getElementsByClassName("dropdown-options");
  let openDropdown;
  if (!event.target.matches("#selected-dropdown")) {
    for (let i = 0; i < dropdowns.length; i++) {
      openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function showDisplayOptions() {
  document
    .getElementsByClassName("dropdown-options")
    .item(0)
    .classList.toggle("show");
}

function addDropdownClass(filterDisplay) {
  const selecteddropdown_btn = document.getElementById("selected-dropdown");
  const dropdownOptionsValue = document.getElementsByClassName(
    "dropdown-options-value"
  );

  const dataCharName = "data-char-name",
    dataCharTitle = "data-char-title",
    dataCharEza = "data-char-eza",
    dataCharId = "data-char-id",
    dataCharHp = "data-char-hp",
    dataCharAttack = "data-char-attack",
    dataCharDefense = "data-char-defense",
    dataCharCost = "data-char-cost",
    dataCharMaxLevel = "data-char-max-level",
    dataCharRelease = "data-char-release",
    dataCharRecruit = "data-char-recruit",
    dataCharAwaken = "data-char-awaken",
    dataCharSuperAtkLevel = "data-char-super-atk-level",
    dataCharSuperAtkType = "data-char-super-atk-type",
    dataCharLinks = "data-char-links",
    dataCharCategories = "data-char-categories";

  const dataCharNameItems = document.querySelectorAll("[" + dataCharName + "]");
  const dataCharTitleItems = document.querySelectorAll(
    "[" + dataCharTitle + "]"
  );
  const dataCharEzaItems = document.querySelectorAll("[" + dataCharEza + "]");
  const dataCharIdItems = document.querySelectorAll("[" + dataCharId + "]");
  const dataCharHpItems = document.querySelectorAll("[" + dataCharHp + "]");
  const dataCharAttackItems = document.querySelectorAll(
    "[" + dataCharAttack + "]"
  );
  const dataCharDefenseItems = document.querySelectorAll(
    "[" + dataCharDefense + "]"
  );
  const dataCharCostItems = document.querySelectorAll("[" + dataCharCost + "]");
  const dataCharMaxLevelItems = document.querySelectorAll(
    "[" + dataCharMaxLevel + "]"
  );
  const dataCharRecruitItems = document.querySelectorAll(
    "[" + dataCharRecruit + "]"
  );
  const dataCharAwakenItems = document.querySelectorAll(
    "[" + dataCharAwaken + "]"
  );
  const dataCharSuperAtkLevelItems = document.querySelectorAll(
    "[" + dataCharSuperAtkLevel + "]"
  );
  const dataCharReleaseItems = document.querySelectorAll(
    "[" + dataCharRelease + "]"
  );
  const dataCharSuperAtkTypeItems = document.querySelectorAll(
    "[" + dataCharSuperAtkType + "]"
  );
  const dataCharLinksItems = document.querySelectorAll(
    "[" + dataCharLinks + "]"
  );
  const dataCharCategoriesItems = document.querySelectorAll(
    "[" + dataCharCategories + "]"
  );

  const char_display_text =
    document.getElementsByClassName("char_display_text");
  let listLinks = [],
    listCategories = [],
    listSuperAtkType = [],
    listRelease = [];
  let listLinksFormattedString = [],
    listCategoriesFormattedString = [],
    listSuperAtkTypeFormattedString = [],
    listReleaseFormattedString = [],
    a,
    b,
    position,
    temp;

  localStorage.setItem("filterDisplay", filterDisplay);
  selecteddropdown_btn.innerHTML =
    dropdownOptionsValue.item(filterDisplay).innerHTML;
  dropdownOptionsValue.item(filterDisplay).classList.add("checkedDisplayBtn");

  for (let i = 0; i < dropdownOptionsValue.length; i++) {
    if (i != filterDisplay) {
      dropdownOptionsValue.item(i).classList.remove("checkedDisplayBtn");
    }
  }

  for (let i = 0; i < char_display_text.length; i++) {
    listLinks[i] = dataCharLinksItems[i].getAttribute(dataCharLinks).split(",");
    listLinksFormattedString[i] = listLinks[i].join("\n");

    listSuperAtkType[i] = dataCharSuperAtkTypeItems[i]
      .getAttribute(dataCharSuperAtkType)
      .split(",");
    listSuperAtkTypeFormattedString[i] = listSuperAtkType[i].join("\n");

    if (dataCharReleaseItems[i].getAttribute(dataCharRelease).length == 25) {
      a = dataCharReleaseItems[i].getAttribute(dataCharRelease);
      b = "After EZA:.";
      position = 13;
      temp = [a.slice(0, position), b, a.slice(position)].join("");
      temp = "Before EZA:." + temp;
      listRelease[i] = temp.split(".");
    } else {
      listRelease[i] = dataCharReleaseItems[i]
        .getAttribute(dataCharRelease)
        .split(".");
    }
    listReleaseFormattedString[i] = listRelease[i].join("\n");
  }
  for (let i = 0; i < dataCharCategoriesItems.length; i++) {
    listCategories[i] = dataCharCategoriesItems[i]
      .getAttribute(dataCharCategories)
      .split(",");
    listCategoriesFormattedString[i] = listCategories[i].join("\n");
  }

  if (filterDisplay >= 0 && filterDisplay <= 7) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).style.left = "10px";
      char_display_text.item(i).style.display = "table-cell";
      char_display_text.item(i).style.top = "10px";
      char_display_text.item(i).style.textAlign = "center";
      if (window.matchMedia("(max-width: 413px)").matches) {
        char_display_text.item(i).style.width = "70px";
      } else {
        char_display_text.item(i).style.width = "180px";
      }
    }
  }

  if (filterDisplay == 8) {
    for (let i = 0; i < char_display_text.length; i++) {
      if (dataCharEzaItems[i].getAttribute(dataCharEza) == "eza") {
        char_display_text.item(i).style.display = "block";
        char_display_text.item(i).style.removeProperty("top");
        char_display_text.item(i).style.textAlign = "center";
        char_display_text.item(i).style.left = "10px";
      } else {
        char_display_text.item(i).style.left = "15px";
      }
      if (window.matchMedia("(max-width: 413px)").matches) {
        char_display_text.item(i).style.left = "8px";
        char_display_text.item(i).style.width = "64px";
      } else {
        char_display_text.item(i).style.width = "180px";
      }
    }
  }

  if (filterDisplay == 9 || filterDisplay == 10 || filterDisplay == 11) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).style.display = "table-cell";
      char_display_text.item(i).style.top = "10px";
      char_display_text.item(i).style.removeProperty("left");
      char_display_text.item(i).style.textAlign = "center";
      if (window.matchMedia("(max-width: 413px)").matches) {
        char_display_text.item(i).style.left = "5px";
        char_display_text.item(i).style.width = "70px";
      } else {
        char_display_text.item(i).style.width = "200px";
      }
    }
  }

  if (filterDisplay == 12) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).style.display = "block";
      char_display_text.item(i).style.removeProperty("top");
      char_display_text.item(i).style.left = "10px";
      char_display_text.item(i).style.textAlign = "center";
      if (window.matchMedia("(max-width: 413px)").matches) {
        char_display_text.item(i).style.width = "64px";
      } else {
        char_display_text.item(i).style.width = "180px";
      }
    }
  }
  if (filterDisplay == 13 || filterDisplay == 14) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).style.display = "block";
      char_display_text.item(i).style.removeProperty("top");
      char_display_text.item(i).style.textAlign = "start";
      char_display_text.item(i).style.left = "10px";
      if (window.matchMedia("(max-width: 413px)").matches) {
        char_display_text.item(i).style.width = "64px";
      } else {
        char_display_text.item(i).style.width = "180px";
      }
    }
  }
  //Name
  if (filterDisplay == 0) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent =
        dataCharNameItems[i].getAttribute(dataCharName);
    }
  }
  //Title
  if (filterDisplay == 1) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent =
        dataCharTitleItems[i].getAttribute(dataCharTitle);
    }
  }
  //Char ID
  if (filterDisplay == 2) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent =
        dataCharIdItems[i].getAttribute(dataCharId);
    }
  }
  //HP
  if (filterDisplay == 3) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).innerHTML = new Intl.NumberFormat().format(
        dataCharHpItems[i].getAttribute(dataCharHp)
      );
    }
  }
  //Attack
  if (filterDisplay == 4) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).innerHTML = new Intl.NumberFormat().format(
        dataCharAttackItems[i].getAttribute(dataCharAttack)
      );
    }
  }
  //Defense
  if (filterDisplay == 5) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).innerHTML = new Intl.NumberFormat().format(
        dataCharDefenseItems[i].getAttribute(dataCharDefense)
      );
    }
  }
  //Cost
  if (filterDisplay == 6) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent =
        dataCharCostItems[i].getAttribute(dataCharCost);
    }
  }
  //Max Level
  if (filterDisplay == 7) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent =
        dataCharMaxLevelItems[i].getAttribute(dataCharMaxLevel);
    }
  }
  //Release Date
  if (filterDisplay == 8) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent = listReleaseFormattedString[i];
    }
  }
  //Recruit
  if (filterDisplay == 9) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent =
        dataCharRecruitItems[i].getAttribute(dataCharRecruit);
    }
  }
  //Awaken
  if (filterDisplay == 10) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent =
        dataCharAwakenItems[i].getAttribute(dataCharAwaken);
    }
  }
  //Super ATK Level
  if (filterDisplay == 11) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent = dataCharSuperAtkLevelItems[
        i
      ].getAttribute(dataCharSuperAtkLevel);
    }
  }
  //Super ATK Type
  if (filterDisplay == 12) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent =
        listSuperAtkTypeFormattedString[i];
    }
  }
  //Links
  if (filterDisplay == 13) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent = listLinksFormattedString[i];
    }
  }
  //Categories
  if (filterDisplay == 14) {
    for (let i = 0; i < char_display_text.length; i++) {
      char_display_text.item(i).textContent = listCategoriesFormattedString[i];
    }
  }
}
