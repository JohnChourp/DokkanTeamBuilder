function addRarity(rarityFilter) {
    if (document.getElementById(rarityFilter).classList.contains("checkedRarityBtn")) {
        document.getElementById(rarityFilter).classList.remove("checkedRarityBtn");
    } else {
        document.getElementById(rarityFilter).classList.add("checkedRarityBtn");
    }
}
function showRarity(char, dataCharRarityItems, dataCharRarity) {
    if (document.getElementById("n").classList.contains("checkedRarityBtn")) {
        for (let i = 0; i < char.length; i++) {
            if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "n") {
                char.item(i).style.display = "inline-block";
            }
        }
    }
    if (document.getElementById("r").classList.contains("checkedRarityBtn")) {
        for (let i = 0; i < char.length; i++) {
            if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "r") {
                char.item(i).style.display = "inline-block";
            }
        }
    }
    if (document.getElementById("sr").classList.contains("checkedRarityBtn")) {
        for (let i = 0; i < char.length; i++) {
            if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "sr") {
                char.item(i).style.display = "inline-block";
            }
        }
    }
    if (document.getElementById("ssr").classList.contains("checkedRarityBtn")) {
        for (let i = 0; i < char.length; i++) {
            if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "ssr") {
                char.item(i).style.display = "inline-block";
            }
        }
    }
    if (document.getElementById("ur").classList.contains("checkedRarityBtn")) {
        for (let i = 0; i < char.length; i++) {
            if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "ur") {
                char.item(i).style.display = "inline-block";
            }
        }
    }
    if (document.getElementById("lr").classList.contains("checkedRarityBtn")) {
        for (let i = 0; i < char.length; i++) {
            if (dataCharRarityItems[i].getAttribute(dataCharRarity).toLowerCase() == "lr") {
                char.item(i).style.display = "inline-block";
            }
        }
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