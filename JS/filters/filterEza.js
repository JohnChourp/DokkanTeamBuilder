function ezaFilter() {
    addEza("eza");
}

function addEza(ezaFilter) {
    if (document.getElementById(ezaFilter).classList.contains("checkedEzaBtn")) {
        document.getElementById(ezaFilter).classList.remove("checkedEzaBtn");
        let notDokkanAwakened = document.getElementById("not-dokkan-awakened");
        let preDokkanAwakened = document.getElementById("pre-dokkan-awakened");
        let dokkanAwakened = document.getElementById("dokkan-awakened");
        
        notDokkanAwakened.style.backgroundColor = "#ddd";
        preDokkanAwakened.style.backgroundColor = "#ddd";
        dokkanAwakened.style.backgroundColor = "#ddd";

        notDokkanAwakened.style.cursor = "pointer";
        preDokkanAwakened.style.cursor = "pointer";
        dokkanAwakened.style.cursor = "pointer";

        notDokkanAwakened.style.color = "black";
        preDokkanAwakened.style.color = "black";
        dokkanAwakened.style.color = "black";

        notDokkanAwakened.removeAttribute("disabled");
        preDokkanAwakened.removeAttribute("disabled");
        dokkanAwakened.removeAttribute("disabled");
    } else {
        document.getElementById(ezaFilter).classList.add("checkedEzaBtn");
        notDokkanAwakened.style.backgroundColor = "#343A40";
        preDokkanAwakened.style.backgroundColor = "#343A40";
        dokkanAwakened.style.backgroundColor = "#343A40";

        notDokkanAwakened.style.cursor = "not-allowed";
        preDokkanAwakened.style.cursor = "not-allowed";
        dokkanAwakened.style.cursor = "not-allowed";

        notDokkanAwakened.style.color = "#6C757D";
        preDokkanAwakened.style.color = "#6C757D";
        dokkanAwakened.style.color = "#6C757D";

        notDokkanAwakened.setAttribute("disabled", "enabled");
        preDokkanAwakened.setAttribute("disabled", "enabled");
        dokkanAwakened.setAttribute("disabled", "enabled");

        notDokkanAwakened.classList.remove("checkedAwakenBtn");
        preDokkanAwakened.classList.remove("checkedAwakenBtn");
        dokkanAwakened.classList.remove("checkedAwakenBtn");
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