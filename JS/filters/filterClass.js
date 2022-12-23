function addClass(classFilter) {
    if (document.getElementById(classFilter).classList.contains("checkedClassBtn")) {
        document.getElementById(classFilter).classList.remove("checkedClassBtn");
    } else {
        document.getElementById(classFilter).classList.add("checkedClassBtn");
    }
}
function showClass(char, dataCharClassItems, dataCharClass) {
    if (document.getElementById("super").classList.contains("checkedClassBtn")) {
        for (let i = 0; i < char.length; i++) {
            if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "super") {
                char.item(i).style.display = "inline-block";
            }
        }
    }
    if (document.getElementById("extreme").classList.contains("checkedClassBtn")) {
        for (let i = 0; i < char.length; i++) {
            if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "extreme") {
                char.item(i).style.display = "inline-block";
            }
        }
    }
}

function superFilter() {
    addClass("super");
}

function extremeFilter() {
    addClass("extreme");
}