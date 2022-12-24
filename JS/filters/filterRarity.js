function addRarity(rarityFilter) {
    if (document.getElementById(rarityFilter).classList.contains("checkedRarityBtn")) {
        document.getElementById(rarityFilter).classList.remove("checkedRarityBtn");
    } else {
        document.getElementById(rarityFilter).classList.add("checkedRarityBtn");
    }
}

function rarityNFilter() {
    addRarity("n");
}

function rarityRFilter() {
    addRarity("r");
}

function raritySRFilter() {
    addRarity("sr");
}

function raritySSRFilter() {
    addRarity("ssr");
}

function rarityURFilter() {
    addRarity("ur");
}

function rarityLRFilter() {
    addRarity("lr");
}