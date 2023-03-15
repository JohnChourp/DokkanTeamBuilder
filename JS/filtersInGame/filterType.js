function filterType(type) {
    switch (type) {
        case "agl":
            addType("agl");
            break;
        case "teq":
            addType("teq");
            break;
        case "int":
            addType("int");
            break;
        case "str":
            addType("str");
            break;
        case "phy":
            addType("phy");
            break;
    }
    checkFilterTypeUsed();
}

function addType(type) {
    const typeId = document.getElementById(type);
    const typeChecked = typeId.classList.contains("checkedTypeBtn");
    if (!typeChecked) {
        typeId.classList.add("checkedTypeBtn");
        typeId.children.item(0).classList.add("checkedTypeBtnInside");
    } else {
        typeId.classList.remove("checkedTypeBtn");
        typeId.children.item(0).classList.remove("checkedTypeBtnInside");
    }
}

function removeAllType() {
    const filterType = ["agl", "teq", "int", "str", "phy"];
    for (let i = 0; i < filterType.length; i++) {
        document.getElementById(filterType[i]).classList.remove("checkedTypeBtn");
        document.getElementById(filterType[i]).children.item(0).classList.remove("checkedTypeBtnInside");
    }
}
