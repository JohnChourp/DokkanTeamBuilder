function filterClass(classFilter) {
    switch (classFilter) {
        case "super":
            addClass("super");
            break;
        case "extreme":
            addClass("extreme");
            break;
    }
    checkFilterClassUsed();
}

function addClass(classFilter) {
    const classId = document.getElementById(classFilter);
    const classChecked = classId.classList.contains("checkedClassBtn");
    if (!classChecked) {
        classId.classList.add("checkedClassBtn");
        classId.children.item(0).classList.add("checkedClassBtnInside");
    } else {
        classId.classList.remove("checkedClassBtn");
        classId.children.item(0).classList.remove("checkedClassBtnInside");
    }
}

function removeAllClass() {
    const filterClass = ["super", "extreme"];
    for (let i = 0; i < filterClass.length; i++) {
        document.getElementById(filterClass[i]).classList.remove("checkedClassBtn");
        document.getElementById(filterClass[i]).children.item(0).classList.remove("checkedClassBtnInside");
    }
}
