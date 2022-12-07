function charDisappear(char) {
    for (let i = 0; i < char.length; i++) {
        char.item(i).style.display = "none";
    }
}

function superFilter() {
    let dataCharType = 'data-char-type';
	let dataCharClass = 'data-char-class';
    let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
    let char = document.getElementsByClassName("char");

    if (document.getElementById("super").classList.contains("checkedClassBtn")) {
        document.getElementById("super").classList.remove("checkedClassBtn");
    } else {
        document.getElementById("super").classList.add("checkedClassBtn");
    }

    charDisappear(char);

    //use filterClass
    if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0)) {
        if (document.getElementById("super").classList.contains("checkedClassBtn")) {
            for (let i = 0; i < char.length; i++) {
                if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "super") {
                    char.item(i).style.display = "inline-block";
                }
            }
        }
    }

    //use filterClass and filterType
    if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0)) {
        if ((document.getElementById("super").classList.contains("checkedClassBtn")) && (document.getElementById("agl").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "super") && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "agl")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById("super").classList.contains("checkedClassBtn")) && (document.getElementById("int").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "super") && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "int")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById("super").classList.contains("checkedClassBtn")) && (document.getElementById("phy").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "super") && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "phy")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById("super").classList.contains("checkedClassBtn")) && (document.getElementById("str").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "super") && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "str")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById("super").classList.contains("checkedClassBtn")) && (document.getElementById("teq").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "super") && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "teq")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }
    }

    //no use filterClass and filterType
    if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0)) {
        for (let i = 0; i < char.length; i++) {
            char.item(i).style.display = "inline-block";
        }
    }
}

function extremeFilter() {
    let dataCharType = 'data-char-type';
	let dataCharClass = 'data-char-class';
    let dataCharTypeItems = document.querySelectorAll('[' + dataCharType + ']');
	let dataCharClassItems = document.querySelectorAll('[' + dataCharClass + ']');
    let char = document.getElementsByClassName("char");

    if (document.getElementById("extreme").classList.contains("checkedClassBtn")) {
        document.getElementById("extreme").classList.remove("checkedClassBtn");
    } else {
        document.getElementById("extreme").classList.add("checkedClassBtn");
    }

    typeDisappearFilter(char);

    //use filterClass
    if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length > 0)) {
        if (document.getElementById("extreme").classList.contains("checkedClassBtn")) {
            for (let i = 0; i < char.length; i++) {
                if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "extreme") {
                    char.item(i).style.display = "inline-block";
                }
            }
        }
    }

    //use filterClass and filterType (not working)
    if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0)) {
        if ((document.getElementById("extreme").classList.contains("checkedClassBtn")) && (document.getElementById("agl").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "extreme") && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "agl")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById("extreme").classList.contains("checkedClassBtn")) && (document.getElementById("int").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "extreme") && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "int")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById("extreme").classList.contains("checkedClassBtn")) && (document.getElementById("phy").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "extreme") && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "phy")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById("extreme").classList.contains("checkedClassBtn")) && (document.getElementById("str").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "extreme") && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "str")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }

        if ((document.getElementById("extreme").classList.contains("checkedClassBtn")) && (document.getElementById("teq").classList.contains("checkedTypeBtn"))) {
            for (let i = 0; i < char.length; i++) {
                if ((dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "extreme") && (dataCharTypeItems[i].getAttribute(dataCharType).toLowerCase() == "teq")) {
                    char.item(i).style.display = "inline-block";
                }
            }
        }
    }

    //no use filterClass and filterType
    if ((document.getElementsByClassName("checkedTypeBtn").length == 0) && (document.getElementsByClassName("checkedClassBtn").length == 0)) {
        for (let i = 0; i < char.length; i++) {
            char.item(i).style.display = "inline-block";
        }
    }
}