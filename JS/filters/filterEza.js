function addEza(ezaFilter) {
    if (document.getElementById(ezaFilter).classList.contains("checkedEzaBtn")) {
        document.getElementById(ezaFilter).classList.remove("checkedEzaBtn");
    } else {
        document.getElementById(ezaFilter).classList.add("checkedEzaBtn");
    }
}

function ezaFilter() {
    addEza("eza");
}