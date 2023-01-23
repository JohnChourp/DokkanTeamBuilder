function addRarityAndEzaDependable(rarityFilter) {
    if (document.getElementById(rarityFilter).classList.contains("checkedRarityBtn")) {
        if (!document.getElementById("eza").classList.contains("checkedEzaBtn")) {
            document.getElementById(rarityFilter).classList.remove("checkedRarityBtn");
            document.getElementById(rarityFilter).children.item(0).style.backgroundColor = "#6B6B67";
            document.getElementById(rarityFilter).children.item(1).style.backgroundColor = "#555555";
            document.getElementById(rarityFilter).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
        }
    } else {
        if (!document.getElementById("eza").classList.contains("checkedEzaBtn")) {
            document.getElementById(rarityFilter).classList.add("checkedRarityBtn");
            document.getElementById(rarityFilter).children.item(0).style.backgroundColor = "#2DA9DD";
            document.getElementById(rarityFilter).children.item(1).style.backgroundColor = "#1B79C3";
            document.getElementById(rarityFilter).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF,#DBCEBD)';
        }
    }
}
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
    addRarityAndEzaDependable("n");
}

function rarityRFilter() {
    addRarityAndEzaDependable("r");
}

function raritySRFilter() {
    addRarityAndEzaDependable("sr");
}

function raritySSRFilter() {
    addRarityAndEzaDependable("ssr");
}

function rarityURFilter() {
    addRarity("ur");
}

function rarityLRFilter() {
    addRarity("lr");
}

function removeAllRarity() {
    let filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
    for (let i = 0; i < filterRarity.length; i++) {
        document.getElementById(filterRarity[i]).classList.remove("checkedRarityBtn");
        document.getElementById(filterRarity[i]).children.item(0).style.backgroundColor = "#6B6B67";
        document.getElementById(filterRarity[i]).children.item(1).style.backgroundColor = "#555555";
        document.getElementById(filterRarity[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
    }
}