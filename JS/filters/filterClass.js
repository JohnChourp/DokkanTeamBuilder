function addClass(classFilter) {
    if (document.getElementById(classFilter).classList.contains("checkedClassBtn")) {
        document.getElementById(classFilter).classList.remove("checkedClassBtn");
        document.getElementById(classFilter).children.item(0).style.backgroundColor = "#6B6B67";
        document.getElementById(classFilter).children.item(1).style.backgroundColor = "#555555";
        document.getElementById(classFilter).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
    } else {
        document.getElementById(classFilter).classList.add("checkedClassBtn");
        document.getElementById(classFilter).children.item(0).style.backgroundColor = "#2DA9DD";
        document.getElementById(classFilter).children.item(1).style.backgroundColor = "#1B79C3";
        document.getElementById(classFilter).children.item(8).style.backgroundImage = 'linear-gradient(180deg, #FFFFFF,#DBCEBD)';
    }
}

function superFilter() {
    addClass("super");
}

function extremeFilter() {
    addClass("extreme");
}