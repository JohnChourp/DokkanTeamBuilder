function addSort(sortFilter) {
  removeAllSort();
  const element = document.getElementById(sortFilter);
  element.classList.add("checkedSortBtn");
  element.children.item(0).classList.add("checkedSortBtnInside");
}

function filterSort(sort) {
  switch (sort) {
    case "sort-updated":
      addSort("sort-updated");
      break;
    case "sort-released":
      addSort("sort-released");
      break;
    case "sort-type":
      addSort("sort-type");
      break;

    case "sort-rarity":
      addSort("sort-rarity");
      break;
    case "sort-cost":
      addSort("sort-cost");
      break;
    case "sort-hp":
      addSort("sort-hp");
      break;

    case "sort-attack":
      addSort("sort-attack");
      break;
    case "sort-defense":
      addSort("sort-defense");
      break;
    case "sort-alphabetical":
      addSort("sort-alphabetical");
      break;

    case "sort-sp-atk-lv":
      addSort("sort-sp-atk-lv");
      break;
    case "sort-max-level":
      addSort("sort-max-level");
      break;
      case "sort-char-id":
      addSort("sort-char-id");
      break;
  }
}

function removeAllSort() {
  const filterType = [
    "sort-updated",
    "sort-released",
    "sort-type",
    "sort-rarity",
    "sort-cost",
    "sort-hp",
    "sort-attack",
    "sort-defense",
    "sort-alphabetical",
    "sort-sp-atk-lv",
    "sort-max-level",
    "sort-char-id"
  ];
  for (let i = 0; i < filterType.length; i++) {
    document.getElementById(filterType[i]).classList.remove("checkedSortBtn");
    document
      .getElementById(filterType[i])
      .children.item(0)
      .classList.remove("checkedSortBtnInside");
  }
}

function removeAllSortAndAddUpdated() {
  const filterType = [
    "sort-released",
    "sort-type",
    "sort-rarity",
    "sort-cost",
    "sort-hp",
    "sort-attack",
    "sort-defense",
    "sort-alphabetical",
    "sort-sp-atk-lv",
    "sort-max-level",
    "sort-char-id"
  ];
  for (let i = 0; i < filterType.length; i++) {
    document.getElementById(filterType[i]).classList.remove("checkedSortBtn");
    document
      .getElementById(filterType[i])
      .children.item(0)
      .classList.remove("checkedSortBtnInside");
  }
  document.getElementById("sort-updated").classList.add("checkedSortBtn");
  document.getElementById("sort-updated").children.item(0).classList.add("checkedSortBtnInside");
}
