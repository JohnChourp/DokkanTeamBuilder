function ezaFilter() {
    addEza("eza");
}

function addEza(ezaFilter) {
    if (document.getElementById(ezaFilter).classList.contains("checkedEzaBtn")) {
        document.getElementById(ezaFilter).classList.remove("checkedEzaBtn");

        document.getElementById("notDokkanAwakened").style.backgroundColor = "#ddd";
        document.getElementById("preDokkanAwakened").style.backgroundColor = "#ddd";
        document.getElementById("dokkanAwakened").style.backgroundColor = "#ddd";

        document.getElementById("notDokkanAwakened").style.cursor = "pointer";
        document.getElementById("preDokkanAwakened").style.cursor = "pointer";
        document.getElementById("dokkanAwakened").style.cursor = "pointer";

        document.getElementById("notDokkanAwakened").style.color = "black";
        document.getElementById("preDokkanAwakened").style.color = "black";
        document.getElementById("dokkanAwakened").style.color = "black";

        document.getElementById("notDokkanAwakened").removeAttribute("disabled");
        document.getElementById("preDokkanAwakened").removeAttribute("disabled");
        document.getElementById("dokkanAwakened").removeAttribute("disabled");
    } else {
        document.getElementById(ezaFilter).classList.add("checkedEzaBtn");
        document.getElementById("notDokkanAwakened").style.backgroundColor = "#343A40";
        document.getElementById("preDokkanAwakened").style.backgroundColor = "#343A40";
        document.getElementById("dokkanAwakened").style.backgroundColor = "#343A40";

        document.getElementById("notDokkanAwakened").style.cursor = "not-allowed";
        document.getElementById("preDokkanAwakened").style.cursor = "not-allowed";
        document.getElementById("dokkanAwakened").style.cursor = "not-allowed";

        document.getElementById("notDokkanAwakened").style.color = "#6C757D";
        document.getElementById("preDokkanAwakened").style.color = "#6C757D";
        document.getElementById("dokkanAwakened").style.color = "#6C757D";

        document.getElementById("notDokkanAwakened").setAttribute("disabled", "enabled");
        document.getElementById("preDokkanAwakened").setAttribute("disabled", "enabled");
        document.getElementById("dokkanAwakened").setAttribute("disabled", "enabled");

        document.getElementById("notDokkanAwakened").classList.remove("checkedAwakenBtn");
        document.getElementById("preDokkanAwakened").classList.remove("checkedAwakenBtn");
        document.getElementById("dokkanAwakened").classList.remove("checkedAwakenBtn");
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