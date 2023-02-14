function updateRarity(rarityFilter, checked) {
    const element = document.getElementById(rarityFilter);
    if (checked) {
        element.classList.add("checkedRarityBtn");
        element.children.item(0).style.backgroundColor = "#2DA9DD";
        element.children.item(1).style.backgroundColor = "#1B79C3";
        element.children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF,#DBCEBD)';
    } else {
        element.classList.remove("checkedRarityBtn");
        element.children.item(0).style.backgroundColor = "#6B6B67";
        element.children.item(1).style.backgroundColor = "#555555";
        element.children.item(8).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
    }
}

function addRarityAndEzaDependable(rarityFilter) {
    const ezaChecked = document.getElementById("eza").classList.contains("checkedEzaBtn");
    const rarityChecked = document.getElementById(rarityFilter).classList.contains("checkedRarityBtn");
    if (!ezaChecked && !rarityChecked) {
        updateRarity(rarityFilter, true);
    } else if (!ezaChecked && rarityChecked) {
        updateRarity(rarityFilter, false);
    }
}

function addRarity(rarityFilter) {
    const rarityChecked = document.getElementById(rarityFilter).classList.contains("checkedRarityBtn");
    updateRarity(rarityFilter, !rarityChecked);
}

function rarityFilter(rarity) {
    addRarityAndEzaDependable(rarity);
}

function removeAllRarity() {
    const filterRarity = ["n", "r", "sr", "ssr", "ur", "lr"];
    const elements = filterRarity.map(rarity => document.getElementById(rarity));
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.classList.remove("checkedRarityBtn");
        element.children[0].style.backgroundColor = "#6B6B67";
        element.children[1].style.backgroundColor = "#555555";
        element.children[8].style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
    }
}