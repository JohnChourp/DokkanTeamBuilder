const searchAfterDropdown_btn = document.getElementById("search-after-eza-id");
const searchAfterDropdownValue = document.getElementsByClassName(
  "search-after-eza-dropdown-options-value"
);
const searchBeforeDropdown_btn = document.getElementById(
  "search-before-eza-id"
);
const searchBeforeDropdownValue = document.getElementsByClassName(
  "search-before-eza-dropdown-options-value"
);

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
  releaseDateNotEzaList = removeDuplicates(releaseDateNotEzaList);
  releaseDateEzaList = removeDuplicates(releaseDateEzaList);
  let releaseDateNotEzaListFinal = [];
  for (let i = 1; i < releaseDateEzaList.length; i++) {
    let beforeEza = releaseDateEzaList[i][0];
    releaseDateNotEzaListFinal[releaseDateNotEzaList.length + i * 2] =
      beforeEza;
  }
  releaseDateNotEzaListFinal = removeDuplicates(releaseDateNotEzaListFinal);
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
  const searchBeforeDropdownLength = searchBeforeDropdownValue.length;

  if (charReleasePos === 0) {
    searchBeforeDropdown_btn.placeholder = "Before EZA..";
  } else {
    searchBeforeDropdown_btn.placeholder =
      searchBeforeDropdownValue.item(charReleasePos).innerHTML;
  }

  searchBeforeDropdownValue
    .item(charReleasePos)
    .classList.add("checkedSearchBeforeEzaBtn");

  for (let i = 0; i < searchBeforeDropdownLength; i++) {
    if (i !== charReleasePos) {
      searchBeforeDropdownValue
        .item(i)
        .classList.remove("checkedSearchBeforeEzaBtn");
    }
  }
}

function addAllReleaseDatesAfter() {
  const dropdownsAfter = document.getElementsByClassName(
    "search-after-eza-dropdown-options"
  );
  dropdownsAfter[0].innerHTML = "";

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
  releaseDateNotEzaList = removeDuplicates(releaseDateNotEzaList);
  releaseDateEzaList = removeDuplicates(releaseDateEzaList);
  let releaseDateNotEzaListFinal = [];
  for (let i = 1; i < releaseDateEzaList.length; i++) {
    let afterEza = releaseDateEzaList[i][1];
    releaseDateNotEzaListFinal[releaseDateNotEzaList.length + i * 2] = afterEza;
  }
  releaseDateNotEzaListFinal = removeDuplicates(releaseDateNotEzaListFinal);
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
    const charListDiv = dropdownsAfter[0];
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
  const searchAfterDropdownLength = searchAfterDropdownValue.length;

  if (charReleasePos === 0) {
    searchAfterDropdown_btn.placeholder = "After EZA..";
  } else {
    searchAfterDropdown_btn.placeholder =
      searchAfterDropdownValue.item(charReleasePos).innerHTML;
  }

  searchAfterDropdownValue
    .item(charReleasePos)
    .classList.add("checkedSearchAfterEzaBtn");

  for (let i = 0; i < searchAfterDropdownLength; i++) {
    if (i !== charReleasePos) {
      searchAfterDropdownValue
        .item(i)
        .classList.remove("checkedSearchAfterEzaBtn");
    }
  }
}

function searchDropdownBeforeAfterEza(searchType) {
  const filterInput = document.getElementById(`search-${searchType}-eza-id`);
  const dropdownValue = document.querySelectorAll(
    `.search-${searchType}-eza-dropdown-options-value`
  );

  if (filterInput.value.length === 0) {
    filterInput.placeholder = `${searchType.charAt(0).toUpperCase() + searchType.slice(1)
      } EZA..`;
  }

  const filter = filterInput.value.toLowerCase();
  const matchingUiElements = [];

  for (const el of dropdownValue) {
    const text = el.textContent.toLowerCase();
    const matchesFilter = text.includes(filter);
    if (matchesFilter) {
      el.classList.add("visible");
      matchingUiElements.push(text);
    } else {
      el.classList.remove("visible");
    }
  }

  for (const el of dropdownValue) {
    if (!el.classList.contains("visible")) {
      el.style.display = "none";
    } else {
      el.style.display = "";
    }
  }

  return matchingUiElements;
}
