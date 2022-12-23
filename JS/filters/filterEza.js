function addEzaFilter(ezaFilter) {
    if (document.getElementById(ezaFilter).classList.contains("checkedEzaBtn")) {
        document.getElementById(ezaFilter).classList.remove("checkedEzaBtn");
    } else {
        document.getElementById(ezaFilter).classList.add("checkedEzaBtn");
    }
}
function showCharEza(dataCharEzaItems, dataCharEza) {
    if (document.getElementById("eza").classList.contains("checkedEzaBtn")) {
        for (let i = 0; i < dataCharEzaItems.length; i++) {
            if (dataCharEzaItems[i].getAttribute(dataCharEza).toLowerCase() == "eza") {
                dataCharEzaItems.item(i).style.display = "inline-block";
            }
        }
    }
}

function ezaFilter() {
    addEzaFilter("eza");
}