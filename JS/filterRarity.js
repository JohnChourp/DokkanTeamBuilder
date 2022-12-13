function addRarityFilter(rarityFilter) {
    if (document.getElementById(rarityFilter).classList.contains("checkedRarityBtn")) {
        document.getElementById(rarityFilter).classList.remove("checkedRarityBtn");
    } else {
        document.getElementById(rarityFilter).classList.add("checkedRarityBtn");
    }
}
function showCharRarity(char, dataCharRarityItems, dataCharRarity, rarityFilter) {
    for (let i = 0; i < char.length; i++) {
        if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == rarityFilter) {
            char.item(i).style.display = "inline-block";
        }
    }
}

function rarityNFilter() {
   addClassFilter("n");
}

function rarityRFilter() { 
    addClassFilter("r");
}

function raritySRFilter() { 
    addClassFilter("sr");
}

function raritySSRFilter() { 
    addClassFilter("ssr");
}

function rarityURFilter() { 
    addClassFilter("ur");
}

function rarityLRFilter() { 
    addClassFilter("lr");
}