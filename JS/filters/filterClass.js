function addClass(classFilter) {
    const filter = document.getElementById(classFilter);
    const [bg0, bg1, bg8] = [filter.children.item(0), filter.children.item(1), filter.children.item(8)];
    if (filter.classList.contains("checkedClassBtn")) {
        filter.classList.remove("checkedClassBtn");
        bg0.style.backgroundColor = "#6B6B67";
        bg1.style.backgroundColor = "#555555";
        bg8.style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
    } else {
        filter.classList.add("checkedClassBtn");
        bg0.style.backgroundColor = "#2DA9DD";
        bg1.style.backgroundColor = "#1B79C3";
        bg8.style.backgroundImage = 'linear-gradient(180deg, #FFFFFF,#DBCEBD)';
    }
}

function removeAllClass() {
    const filterClass = ["super", "extreme"];
    const classButtons = document.querySelectorAll(filterClass.map(id => `#${id}`).join(", "));
    for (let button of classButtons) {
        button.classList.remove("checkedClassBtn");
        let children = button.children;
        children.item(0).style.backgroundColor = "#6B6B67";
        children.item(1).style.backgroundColor = "#555555";
        children.item(8).style.backgroundImage = 'linear-gradient(180deg, #B6B6B6, #948D87)';
    }
}