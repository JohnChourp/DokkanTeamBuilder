function charAllDisappear(char) {
    for (let i = 0; i < char.length; i++) {
        char.item(i).style.display = "none";
    }
}
function charAllAppear(char) {
    if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0)) {
        for (let i = 0; i < char.length; i++) {
            char.item(i).style.display = "inline-block";
        }
    }
}
function addClassFilter(classFilter) {
    if (document.getElementById(classFilter).classList.contains("checkedClassBtn")) {
        document.getElementById(classFilter).classList.remove("checkedClassBtn");
    } else {
        document.getElementById(classFilter).classList.add("checkedClassBtn");
    }
}
function showCharClass(char, dataCharClassItems, dataCharClass, classFilter) {
    if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0)) {
        if (document.getElementById(classFilter).classList.contains("checkedClassBtn")) {
            for (let i = 0; i < char.length; i++) {
                if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == classFilter) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }
    }
}
function showCharClassAndTypeFilter(char, dataCharClassItems, dataCharClass, dataCharTypeItems, dataCharType, classFilter) {
    if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0)) {
        if ((document.getElementById(classFilter).classList.contains("checkedClassBtn")) && (document.getElementById("agl").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == classFilter) && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "agl")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById(classFilter).classList.contains("checkedClassBtn")) && (document.getElementById("int").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == classFilter) && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "int")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById(classFilter).classList.contains("checkedClassBtn")) && (document.getElementById("phy").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == classFilter) && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "phy")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById(classFilter).classList.contains("checkedClassBtn")) && (document.getElementById("str").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == classFilter) && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "str")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById(classFilter).classList.contains("checkedClassBtn")) && (document.getElementById("teq").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == classFilter) && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "teq")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }
    }
}
function showCharClassFilter(char, dataCharClassItems, dataCharClass, classFilter) {
    if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0)) {
        for (let i = 0; i < char.length; i++) {
            if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == classFilter) {
                char.item(i).style.display = "inline-block";
            }
        }
    }
}
function showCharTypeFilter(char, dataCharTypeItems, dataCharType) {
    if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length == 0)) {

        if (document.getElementById("agl").classList.contains("checkedTypeBtn")) {
            for (let i = 0; i < char.length; i++) {
                if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "agl") {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if (document.getElementById("int").classList.contains("checkedTypeBtn")) {
            for (let i = 0; i < char.length; i++) {
                if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "int") {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if (document.getElementById("phy").classList.contains("checkedTypeBtn")) {
            for (let i = 0; i < char.length; i++) {
                if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "phy") {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if (document.getElementById("str").classList.contains("checkedTypeBtn")) {
            for (let i = 0; i < char.length; i++) {
                if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "str") {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if (document.getElementById("teq").classList.contains("checkedTypeBtn")) {
            for (let i = 0; i < char.length; i++) {
                if (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "teq") {
                    char.item(i).style.display = "inline-block";
                }
            }
        }
    }
}

function superFilter() {
    let dataCharType = 'data-char-type';
    let dataCharClass = 'data-char-class';
    let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
    let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
    let char = document.getElementsByClassName("char");

    //add class checkedClassBtn to buttons if necessary
    addClassFilter("super");
    //disappear all characters
    charAllDisappear(char);
    //check filterClass if no filterType is checked
    showCharClass(char, dataCharClassItems, dataCharClass, "super");
    //use both filterClass and filterType
    showCharClassAndTypeFilter(char, dataCharClassItems, dataCharClass, dataCharTypeItems, dataCharType, "super");
    //appear all characters if no filters are checked
    charAllAppear(char);
    //while checked filterClass i uncheck all filterType
    showCharClassFilter(char, dataCharClassItems, dataCharClass, "super");
    //while checked filterType i uncheck all filterClass
    showCharTypeFilter(char, dataCharTypeItems, dataCharType);
}

function extremeFilter() {
    let dataCharType = 'data-char-type';
    let dataCharClass = 'data-char-class';
    let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
    let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
    let char = document.getElementsByClassName("char");

    //add class checkedClassBtn to buttons if necessary
    addClassFilter("extreme");
    //disappear all characters
    charAllDisappear(char);
    //check filterClass if no filterType is checked
    showCharClass(char, dataCharClassItems, dataCharClass, "extreme");
    //use both filterClass and filterType
    showCharClassAndTypeFilter(char, dataCharClassItems, dataCharClass, dataCharTypeItems, dataCharType, "extreme");
    //appear all characters if no filters are checked
    charAllAppear(char);
    //while checked filterClass i uncheck all filterType
    showCharClassFilter(char, dataCharClassItems, dataCharClass, "extreme");
    //while checked filterType i uncheck all filterClass
    showCharTypeFilter(char, dataCharTypeItems, dataCharType);
}