function searchOneCharOptions() {
  const dropdown = document
    .getElementsByClassName("search-one-char-dropdown-options")
    .item(0);
  dropdown.classList.toggle("showOneCharName");
  document.getElementById("search-one-char-menu-id").style.display =
    dropdown.classList.contains("showOneCharName") ? "block" : "none";
}

function addAllCharNames() {
  const dropdowns = document.getElementsByClassName(
    "search-one-char-dropdown-options"
  );
  dropdowns[0].innerHTML = "";
  // Attach event listener to document
  document.addEventListener("click", hideDropdown);

  // Add "All" option to dropdown
  addAllDropdownOptionNames(0, "All", addSearchOneCharDropdownClass);

  // Add character names to dropdown
  const charList = JSON.parse(localStorage.getItem("charList"));
  const uniqueCharNames = removeDuplicates(charList.map((char) => char.name));
  uniqueCharNames.sort().forEach((charName, index) => {
    addAllDropdownOptionNames(
      index + 1,
      charName,
      addSearchOneCharDropdownClass
    );
  });

  function hideDropdown(event) {
    // Hide dropdown if user clicked outside of it
    const target = event.target;
    if (
      !target.matches("#search-one-char-selected-dropdown") &&
      !target.matches("#search-one-char-menu-id")
    ) {
      for (let i = 0; i < dropdowns.length; i++) {
        const dropdown = dropdowns[i];
        if (dropdown.classList.contains("showOneCharName")) {
          dropdown.classList.remove("showOneCharName");
          document.getElementById("search-one-char-menu-id").style.display =
            "none";
          break;
        }
      }
    }
  }

  function addAllDropdownOptionNames(index, text, clickHandler) {
    const charListDiv = dropdowns[0];
    const option = document.createElement("a");
    option.classList.add("search-one-char-dropdown-options-value");
    option.href = "#";
    option.innerHTML = text;
    option.onclick = function () {
      clickHandler(index, 2);
    };
    charListDiv.appendChild(option);
  }
}

function addOnlyFilteredCharNames() {
  const dropdowns = document.getElementsByClassName(
    "search-one-char-dropdown-options"
  );
  dropdowns[0].innerHTML = "";

  const chars = [];
  const charElements = document.querySelectorAll(".char");
  charElements.forEach((element) => {
    const char = {
      name: element.getAttribute("data-char-name"),
    };
    chars.push(char);
  });

  // Attach event listener to document
  document.addEventListener("click", hideDropdown);

  // Add "All" option to dropdown
  addAllDropdownOptionOneChar(0, "All", addSearchOneCharDropdownClass);

  // Add character names to dropdown

  const uniqueCharNames = removeDuplicates(chars.map((char) => char.name));
  uniqueCharNames.sort().forEach((charName, index) => {
    addAllDropdownOptionOneChar(
      index + 1,
      charName,
      addSearchOneCharDropdownClass
    );
  });

  function hideDropdown(event) {
    // Hide dropdown if user clicked outside of it
    const target = event.target;
    if (
      !target.matches("#search-one-char-selected-dropdown") &&
      !target.matches("#search-one-char-menu-id")
    ) {
      for (let i = 0; i < dropdowns.length; i++) {
        const dropdown = dropdowns[i];
        if (dropdown.classList.contains("showOneCharName")) {
          dropdown.classList.remove("showOneCharName");
          document.getElementById("search-one-char-menu-id").style.display =
            "none";
          break;
        }
      }
    }
  }

  function addAllDropdownOptionOneChar(index, text, clickHandler) {
    const charListDiv = dropdowns[0];
    const option = document.createElement("a");
    option.classList.add("search-one-char-dropdown-options-value");
    option.href = "#";
    option.innerHTML = text;
    option.onclick = function () {
      clickHandler(index, 2);
    };
    charListDiv.appendChild(option);
  }
}

function addSearchOneCharDropdownClass(charNamePos, applyfiltersRunCheck) {
  const searchOneCharDropdown_btn = document.getElementById(
    "search-one-char-selected-dropdown"
  );
  const searchOneCharDropdownValue = document.getElementsByClassName(
    "search-one-char-dropdown-options-value"
  );

  searchOneCharDropdown_btn.innerHTML =
    searchOneCharDropdownValue.item(charNamePos).innerHTML;
  searchOneCharDropdownValue
    .item(charNamePos)
    .classList.add("checkedSearchOneCharBtn");

  for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
    if (i != charNamePos) {
      searchOneCharDropdownValue
        .item(i)
        .classList.remove("checkedSearchOneCharBtn");
    }
  }

  const selectedCharName =
    searchOneCharDropdownValue.item(charNamePos).innerHTML;
  let charListSaved = [];
  const charListLocalStorage = JSON.parse(localStorage.getItem("charList"));
  const charList_dataCharNameItems = charListLocalStorage.map(
    (char) => char.name
  );

  for (let i = 0; i < charListLocalStorage.length; i++) {
    const char = charListLocalStorage[i];

    const char_div = document.createElement("div");
    char_div.classList.add("char");

    setAttributes(
      char_div,
      "data-char-name",
      char.name,
      "data-char-title",
      char.title,
      "data-char-type",
      char.type,
      "data-char-rarity",
      char.rarity,
      "data-char-class",
      char.class,
      "data-char-eza",
      char.eza,
      "data-char-id",
      char.id,
      "data-char-hp",
      char.hp,
      "data-char-attack",
      char.attack,
      "data-char-defense",
      char.defense,
      "data-char-cost",
      char.cost,
      "data-char-max-level",
      char.maxLevel,
      "data-char-super-atk-level",
      char.superAtkLevel,
      "data-char-recruit",
      char.recruit,
      "data-char-awaken",
      char.awaken,
      "data-char-release",
      char.release,
      "data-char-super-atk-type",
      char.superAtkType,
      "data-char-links",
      char.links,
      "data-char-categories",
      char.categories
    );
    charListSaved[i] = char_div;
  }

  const char_container_id = document.getElementById("char-container-id");
  char_container_id.innerHTML = "";

  const tempPos = selectedCharName.indexOf("&");
  const tempPos2 = selectedCharName.indexOf("&", tempPos + 1);

  if (charNamePos != 0) {
    if (tempPos2 == -1) {
      if (tempPos == -1) {
        for (let j = 0; j < charListSaved.length; j++) {
          temp = charList_dataCharNameItems[j];
          if (temp == selectedCharName) {
            char_container_id.appendChild(charListSaved[j]);
          }
        }
      } else {
        for (let j = 0; j < charListSaved.length; j++) {
          temp = charList_dataCharNameItems[j];
          temp = temp.split("");
          temp[tempPos] = "&amp;";
          temp = temp.join("");

          if (temp == selectedCharName) {
            char_container_id.appendChild(charListSaved[j]);
          }
        }
      }
    } else {
      for (let j = 0; j < charListSaved.length; j++) {
        temp = charList_dataCharNameItems[j];
        temp = temp.split("");
        temp[tempPos] = "&amp;";
        temp = temp.join("");

        temp2 = temp;
        temp2 = temp2.split("");
        temp2[tempPos2] = "&amp;";
        temp2 = temp2.join("");

        if (temp2 == selectedCharName) {
          char_container_id.appendChild(charListSaved[j]);
        }
      }
    }
  } else {
    for (let j = 0; j < charListSaved.length; j++) {
      char_container_id.appendChild(charListSaved[j]);
    }
  }

  const char = document.getElementsByClassName("char");
  let charList = [];
  for (let i = 0; i < char.length; i++) {
    charList[i] = char.item(i);
  }

  if (applyfiltersRunCheck == 2) {
    applyFilters();
  }
}

function selectedCharNameSearch() {
  const input = document.getElementById("search-one-char-menu-id");
  const filter = input.value.toLowerCase();
  const ui = document.getElementsByClassName(
    "search-one-char-dropdown-options-value"
  );
  let uiArray = Array.from(ui);

  uiArray = uiArray.filter(
    (el) => el.textContent.toLowerCase().indexOf(filter) >= 0
  );
  uiArray.forEach((el) => (el.style.display = "block"));
  uiArray = uiArray.map((el) => el.textContent);

  const restOfUiArray = Array.from(ui).filter(
    (el) => uiArray.indexOf(el.textContent) < 0
  );
  restOfUiArray.forEach((el) => (el.style.display = "none"));
}
