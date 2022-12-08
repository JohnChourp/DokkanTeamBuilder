function addClassFilter(classFilter) {
    if (document.getElementById(classFilter).classList.contains("checkedClassBtn")) {
        document.getElementById(classFilter).classList.remove("checkedClassBtn");
    } else {
        document.getElementById(classFilter).classList.add("checkedClassBtn");
    }
}
function showCharClass(char, dataCharClassItems, dataCharClass, classFilter) {
    for (let i = 0; i < char.length; i++) {
        if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == classFilter) {
            char.item(i).style.display = "inline-block";
        }
    }
}

function superFilter() {
   addClassFilter("super");
}

function extremeFilter() { 
    addClassFilter("extreme");
}