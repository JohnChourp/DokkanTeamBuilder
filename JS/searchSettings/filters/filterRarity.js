function addRarity(rarityFilter) {
    if (document.getElementById(rarityFilter).classList.contains("checkedRarityBtn")) {
        document.getElementById(rarityFilter).classList.remove("checkedRarityBtn");
        document.getElementById(rarityFilter).children.item(0).style.backgroundColor = "#6B6B67";
        document.getElementById(rarityFilter).children.item(1).style.backgroundColor = "#555555";
        document.getElementById(rarityFilter).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
    } else {
        document.getElementById(rarityFilter).classList.add("checkedRarityBtn");
        document.getElementById(rarityFilter).children.item(0).style.backgroundColor = "#2DA9DD";
        document.getElementById(rarityFilter).children.item(1).style.backgroundColor = "#1B79C3";
        document.getElementById(rarityFilter).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF,#DBCEBD)';
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