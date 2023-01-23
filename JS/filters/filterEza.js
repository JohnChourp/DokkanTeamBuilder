function ezaFilter() {
    addEza("eza");
}

function addEza(ezaFilter) {
    let filterAwakenId = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"];
    if (document.getElementById(ezaFilter).classList.contains("checkedEzaBtn")) {
        document.getElementById(ezaFilter).classList.remove("checkedEzaBtn");

        for (let i = 0; i < filterAwakenId.length; i++) {
            document.getElementById(filterAwakenId[i]).style.backgroundColor = "#ddd";
            document.getElementById(filterAwakenId[i]).style.cursor = "pointer";
            document.getElementById(filterAwakenId[i]).style.color = "black";
            document.getElementById(filterAwakenId[i]).removeAttribute("disabled");
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
    let filterEza = ["eza", "noeza"];
    for (let i = 0; i < filterEza.length; i++) {
        document.getElementById(filterEza[i]).classList.remove("checkedEzaBtn");
    }
}