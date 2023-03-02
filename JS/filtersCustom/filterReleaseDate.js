function addAllReleaseDatesBefore() {
  const dropdowns = document.getElementsByClassName(
    "search-before-eza-dropdown-options"
  );
  dropdowns[0].innerHTML = "";

  // Add "All" option to dropdown
  addAllDropdownOptionReleaseBefore(0, "All", addSearchBeforeEzaDropdownClass);

  // Add character names to dropdown
  const charList = JSON.parse(localStorage.getItem("charList"));
  const uniqueCharRelease = removeDuplicates(
    charList.map((char) => char.release)
  );
  let releaseDateNotEzaList = [],
    releaseDateEzaList = [];
  for (let i = 0; i < uniqueCharRelease.length; i++) {
    if (uniqueCharRelease[i].length == 25) {
      releaseDateEzaList[i] = uniqueCharRelease[i].split(".");
    } else {
      releaseDateNotEzaList[i] = uniqueCharRelease[i];
    }
  }

  for (let i = 0; i < uniqueCharRelease.length; i++) {
    if (uniqueCharRelease[i].length == 25) {
      releaseDateEzaList[i] = uniqueCharRelease[i].split(".");
    } else {
      releaseDateNotEzaList[i] = uniqueCharRelease[i];
    }
  }
  releaseDateNotEzaList = removeDuplicates(releaseDateNotEzaList, undefined);
  releaseDateEzaList = removeDuplicates(releaseDateEzaList, undefined);
  let releaseDateNotEzaListFinal = [];
  for (let i = 1; i < releaseDateEzaList.length; i++) {
    let beforeEza = releaseDateEzaList[i][0];
    releaseDateNotEzaListFinal[releaseDateNotEzaList.length + i * 2] =
      beforeEza;
  }
  releaseDateNotEzaListFinal = removeDuplicates(
    releaseDateNotEzaListFinal,
    undefined
  );
  releaseDateNotEzaListFinal
    .sort()
    .slice(0, -1)
    .forEach((charReleasePos, index) => {
      addAllDropdownOptionReleaseBefore(
        index + 1,
        charReleasePos,
        addSearchBeforeEzaDropdownClass
      );
    });

  function addAllDropdownOptionReleaseBefore(index, text, clickHandler) {
    const charListDiv = dropdowns[0];
    const option = document.createElement("a");
    option.classList.add("search-before-eza-dropdown-options-value");
    option.href = "#";
    option.innerHTML = text;
    option.onclick = function () {
      clickHandler(index, 2);
    };
    charListDiv.appendChild(option);
  }
}
function addSearchBeforeEzaDropdownClass(charReleasePos) {
  const searchOneCharDropdown_btn = document.getElementById(
    "search-before-eza-id"
  );
  const searchOneCharDropdownValue = document.getElementsByClassName(
    "search-before-eza-dropdown-options-value"
  );

  if (charReleasePos === 0) {
    searchOneCharDropdown_btn.placeholder = "Before EZA..";
  } else {
    searchOneCharDropdown_btn.placeholder =
      searchOneCharDropdownValue.item(charReleasePos).innerHTML;
  }
  searchOneCharDropdownValue
    .item(charReleasePos)
    .classList.add("checkedSearchBeforeEzaBtn");

  for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
    if (i != charReleasePos) {
      searchOneCharDropdownValue
        .item(i)
        .classList.remove("checkedSearchBeforeEzaBtn");
    }
  }
}
function selectedBeforeEzaSearch() {
  const input = document.getElementById("search-before-eza-id");
  if (input.value.length === 0) {
    input.placeholder = "Before EZA..";
  }
  const filter = input.value.toLowerCase();
  const ui = document.getElementsByClassName(
    "search-before-eza-dropdown-options-value"
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

function addAllReleaseDatesAfter() {
  const dropdowns = document.getElementsByClassName(
    "search-after-eza-dropdown-options"
  );
  dropdowns[0].innerHTML = "";

  // Add "All" option to dropdown
  addAllDropdownOptionReleaseAfter(0, "All", addSearchAfterEzaDropdownClass);

  // Add character names to dropdown
  const charList = JSON.parse(localStorage.getItem("charList"));
  const uniqueCharRelease = removeDuplicates(
    charList.map((char) => char.release)
  );
  let releaseDateNotEzaList = [],
    releaseDateEzaList = [];
  for (let i = 0; i < uniqueCharRelease.length; i++) {
    if (uniqueCharRelease[i].length == 25) {
      releaseDateEzaList[i] = uniqueCharRelease[i].split(".");
    } else {
      releaseDateNotEzaList[i] = uniqueCharRelease[i];
    }
  }

  for (let i = 0; i < uniqueCharRelease.length; i++) {
    if (uniqueCharRelease[i].length == 25) {
      releaseDateEzaList[i] = uniqueCharRelease[i].split(".");
    } else {
      releaseDateNotEzaList[i] = uniqueCharRelease[i];
    }
  }
  releaseDateNotEzaList = removeDuplicates(releaseDateNotEzaList, undefined);
  releaseDateEzaList = removeDuplicates(releaseDateEzaList, undefined);
  let releaseDateNotEzaListFinal = [];
  for (let i = 1; i < releaseDateEzaList.length; i++) {
    let afterEza = releaseDateEzaList[i][1];
    releaseDateNotEzaListFinal[releaseDateNotEzaList.length + i * 2] = afterEza;
  }
  releaseDateNotEzaListFinal = removeDuplicates(
    releaseDateNotEzaListFinal,
    undefined
  );
  releaseDateNotEzaListFinal
    .sort()
    .slice(0, -1)
    .forEach((charReleasePos, index) => {
      addAllDropdownOptionReleaseAfter(
        index + 1,
        charReleasePos,
        addSearchAfterEzaDropdownClass
      );
    });

  function addAllDropdownOptionReleaseAfter(index, text, clickHandler) {
    const charListDiv = dropdowns[0];
    const option = document.createElement("a");
    option.classList.add("search-after-eza-dropdown-options-value");
    option.href = "#";
    option.innerHTML = text;
    option.onclick = function () {
      clickHandler(index, 2);
    };
    charListDiv.appendChild(option);
  }
}
function addSearchAfterEzaDropdownClass(charReleasePos) {
  const searchOneCharDropdown_btn = document.getElementById(
    "search-after-eza-id"
  );
  const searchOneCharDropdownValue = document.getElementsByClassName(
    "search-after-eza-dropdown-options-value"
  );

  if (charReleasePos === 0) {
    searchOneCharDropdown_btn.placeholder = "After EZA..";
  } else {
    searchOneCharDropdown_btn.placeholder =
      searchOneCharDropdownValue.item(charReleasePos).innerHTML;
  }

  searchOneCharDropdownValue
    .item(charReleasePos)
    .classList.add("checkedSearchAfterEzaBtn");

  for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
    if (i != charReleasePos) {
      searchOneCharDropdownValue
        .item(i)
        .classList.remove("checkedSearchAfterEzaBtn");
    }
  }
}
function selectedAfterEzaSearch() {
  const input = document.getElementById("search-after-eza-id");
  if (input.value.length === 0) {
    input.placeholder = "After EZA..";
  }
  const filter = input.value.toLowerCase();
  const ui = document.getElementsByClassName(
    "search-after-eza-dropdown-options-value"
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
