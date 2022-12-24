function addClass(classFilter) {
    if (document.getElementById(classFilter).classList.contains("checkedClassBtn")) {
        document.getElementById(classFilter).classList.remove("checkedClassBtn");
    } else {
        document.getElementById(classFilter).classList.add("checkedClassBtn");
    }
}

function superFilter() {
    addClass("super");
}

function extremeFilter() {
    addClass("extreme");
}