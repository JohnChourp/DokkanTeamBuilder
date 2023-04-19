function filterAwakened(id) {
    const awakenedBtn = document.getElementById(id);
    if (awakenedBtn.classList.contains("checkedAwakenBtn")) {
        awakenedBtn.classList.remove("checkedAwakenBtn");
        awakenedBtn.style.backgroundColor = "#ddd";
    } else {
        awakenedBtn.classList.add("checkedAwakenBtn");
        awakenedBtn.style.backgroundColor = "#33ccff";
    }
}

function filterNotDokkanAwakened() {
    filterAwakened("not-dokkan-awakened");
    checkFilterAwakenUsed();
}

function filterPreDokkanAwakened() {
    filterAwakened("pre-dokkan-awakened");
    checkFilterAwakenUsed();
}

function filterDokkanAwakened() {
    filterAwakened("dokkan-awakened");
    checkFilterAwakenUsed();
}

function removeAllDokkanAwaken() {
    const filterAwakenId = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened",];
    let elements = [];
    for (let i = 0; i < filterAwakenId.length; i++) {
        elements.push(document.getElementById(filterAwakenId[i]));
    }
    for (let element of elements) {
        element.classList.remove("checkedAwakenBtn");
        element.style.backgroundColor = "#ddd";
        element.style.cursor = "pointer";
        element.style.color = "black";
        element.removeAttribute("disabled");
    }
}