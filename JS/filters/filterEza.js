function ezaFilter() {
    addEza("eza");
}

function addEza(ezaFilter) {
    const filterRarityId = ["n", "r", "sr", "ssr"]
    const filterAwakenId = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"];
    if (document.getElementById(ezaFilter).classList.contains("checkedEzaBtn")) {
        document.getElementById(ezaFilter).classList.remove("checkedEzaBtn");

        for (let i = 0; i < filterAwakenId.length; i++) {
            document.getElementById(filterAwakenId[i]).style.backgroundColor = "#ddd";
            document.getElementById(filterAwakenId[i]).style.cursor = "pointer";
            document.getElementById(filterAwakenId[i]).style.color = "black";
            document.getElementById(filterAwakenId[i]).removeAttribute("disabled");
        }
        for (let i = 0; i < filterRarityId.length; i++) {
            document.getElementById(filterRarityId[i]).style.cursor = "pointer";
            document.getElementById(filterRarityId[i]).removeAttribute("disabled");
            document.getElementById(filterRarityId[i]).children.item(0).style.backgroundColor = "#6B6B67";
            document.getElementById(filterRarityId[i]).children.item(1).style.backgroundColor = "#555555";
            document.getElementById(filterRarityId[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
        }
    } else {
        document.getElementById(ezaFilter).classList.add("checkedEzaBtn");
        for (let i = 0; i < filterAwakenId.length; i++) {
            document.getElementById(filterAwakenId[i]).style.backgroundColor = "#343A40";
            document.getElementById(filterAwakenId[i]).style.cursor = "not-allowed";
            document.getElementById(filterAwakenId[i]).style.color = "#6C757D";
            document.getElementById(filterAwakenId[i]).setAttribute("disabled", "enabled");
            document.getElementById(filterAwakenId[i]).classList.remove("checkedAwakenBtn");
        }
        for (let i = 0; i < filterRarityId.length; i++) {
            document.getElementById(filterRarityId[i]).style.cursor = "not-allowed";
            document.getElementById(filterRarityId[i]).setAttribute("disabled", "enabled");
            document.getElementById(filterRarityId[i]).classList.remove("checkedRarityBtn");
            document.getElementById(filterRarityId[i]).children.item(0).style.backgroundColor = "#343A40";
            document.getElementById(filterRarityId[i]).children.item(1).style.backgroundColor = "#343A40";
            document.getElementById(filterRarityId[i]).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF,#DBCEBD)';
        }
    }
}

function ezaNoFilter() {
    addNoEza("noeza");
}

function addNoEza(ezaNoFilter) {
    if (document.getElementById(ezaNoFilter).classList.contains("checkedEzaBtn")) {
        document.getElementById(ezaNoFilter).classList.remove("checkedEzaBtn");
    } else {
        document.getElementById(ezaNoFilter).classList.add("checkedEzaBtn");
    }
}

function removeAllEza() {
    const filterEza = ["eza", "noeza"];
    for (let i = 0; i < filterEza.length; i++) {
        document.getElementById(filterEza[i]).classList.remove("checkedEzaBtn");
    }
}