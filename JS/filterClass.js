function charDisappear(char) {
    for (let i = 0; i < char.length; i++) {
        char.item(i).style.display = "none";
    }
}

function superFilter() {
    let dataCharClass = 'data-char-class';
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

    //use filterClass and filterType (not working)
    if ((document.getElementsByClassName("checkedTypeBtn").length > 0) && (document.getElementsByClassName("checkedClassBtn").length > 0)) {
        if (document.getElementById("super").classList.contains("checkedClassBtn")) {
            for (let i = 0; i < char.length; i++) {
                if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "super") {
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
    let dataCharClass = 'data-char-class';
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
        if (document.getElementById("extreme").classList.contains("checkedClassBtn")) {
            for (let i = 0; i < char.length; i++) {
                if (dataCharClassItems[i].getAttribute(dataCharClass).toLowerCase() == "extreme") {
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