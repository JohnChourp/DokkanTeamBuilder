function filterRarity(rarity) {
  switch (rarity) {
    case "n":
      filterRarityEzaDependable("n");
      break;
    case "r":
      filterRarityEzaDependable("r");
      break;
    case "sr":
      filterRarityEzaDependable("sr");
      break;
    case "ssr":
      filterRarityEzaDependable("ssr");
      break;
    case "ur":
      filterRarityEzaDependable("ur");
      break;
    case "lr":
      filterRarityEzaDependable("lr");
      break;
  }
}

function filterRarityEzaDependable(rarity) {
  const rarityId = document.getElementById(rarity);
  const ezaChecked = document.getElementById("eza").classList.contains("checkedEzaBtn");
  const rarityChecked = rarityId.classList.contains("checkedRarityBtn");
  if (!ezaChecked && !rarityChecked) {
    updateRarity(rarity, false);
  } else if (!ezaChecked && rarityChecked) {
    updateRarity(rarity, true);
  } else if (ezaChecked && !rarityChecked) {
    updateRarity(rarity, false);
  } else if (ezaChecked && rarityChecked) {
    updateRarity(rarity, true);
  }
}

function updateRarity(rarity, rarityChecked) {
  const element = document.getElementById(rarity);
  if (!rarityChecked) {
    element.classList.add("checkedRarityBtn");
    element.children.item(0).classList.add("checkedRarityBtnInside");
  } else {
    element.classList.remove("checkedRarityBtn");
    element.children.item(0).classList.remove("checkedRarityBtnInside");
  }
}

function removeAllRarity() {
  const filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
  for (let i = 0; i < filterRarity.length; i++) {
    document
      .getElementById(filterRarity[i])
      .classList.remove("checkedRarityBtn");
    document
      .getElementById(filterRarity[i])
      .children.item(0)
      .classList.remove("checkedRarityBtnInside");
  }
}
