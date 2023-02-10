function ezaFilter() {
    addEza("eza");
}

function addEza(ezaFilter) {
    let filterRarityId = ["n", "r", "sr", "ssr"];
    let filterAwakenId = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"];
    let isEza = document.getElementById(ezaFilter).classList.contains("checkedEzaBtn");

    for (let id of filterAwakenId) {
        let awaken = document.getElementById(id);
        awaken.style.backgroundColor = isEza ? "#ddd" : "#343A40";
        awaken.style.cursor = isEza ? "pointer" : "not-allowed";
        awaken.style.color = isEza ? "black" : "#6C757D";
        awaken.disabled = !isEza;
        awaken.classList.toggle("checkedAwakenBtn", isEza);
    }

    for (let id of filterRarityId) {
        let rarity = document.getElementById(id);
        rarity.style.cursor = isEza ? "pointer" : "not-allowed";
        rarity.disabled = !isEza;
        rarity.classList.toggle("checkedRarityBtn", isEza);

        let children = rarity.children;
        children.item(0).style.backgroundColor = isEza ? "#6B6B67" : "#343A40";
        children.item(1).style.backgroundColor = isEza ? "#555555" : "#343A40";
        children.item(8).style.backgroundImage = isEza ? 'linear-gradient(180deg, #B6B6B6, #948D87)' : 'linear-gradient(180deg, #FFFFFF,#DBCEBD)';
    }

    document.getElementById(ezaFilter).classList.toggle("checkedEzaBtn", !isEza);
}

function ezaNoFilter() {
    addNoEza("noeza");
}

function addNoEza(ezaNoFilter) {
    let ezaNo = document.getElementById(ezaNoFilter);
    ezaNo.classList.toggle("checkedEzaBtn");
}

function removeAllEza() {
    let filterEza = ["eza", "noeza"];
    filterEza.forEach(element => {
        document.getElementById(element).classList.remove("checkedEzaBtn");
    });
}