function filterNotDokkanAwakened() {
    let notDokkanAwakenedBtn = document.getElementById("not-dokkan-awakened");
    if (notDokkanAwakenedBtn.classList.contains("checkedAwakenBtn")) {
        notDokkanAwakenedBtn.classList.remove("checkedAwakenBtn");
        notDokkanAwakenedBtn.style.backgroundColor = "#ddd";
    } else {
        notDokkanAwakenedBtn.classList.add("checkedAwakenBtn");
        notDokkanAwakenedBtn.style.backgroundColor = "#33ccff";
    }
}

function filterPreDokkanAwakened() {
    let preDokkanAwakenedBtn = document.getElementById("pre-dokkan-awakened");
    if (preDokkanAwakenedBtn.classList.contains("checkedAwakenBtn")) {
        preDokkanAwakenedBtn.classList.remove("checkedAwakenBtn");
        preDokkanAwakenedBtn.style.backgroundColor = "#ddd";
    } else {
        preDokkanAwakenedBtn.classList.add("checkedAwakenBtn");
        preDokkanAwakenedBtn.style.backgroundColor = "#33ccff";
    }
}

function filterDokkanAwakened() {
    let dokkanAwakenedBtn = document.getElementById("dokkan-awakened");
    if (dokkanAwakenedBtn.classList.contains("checkedAwakenBtn")) {
        dokkanAwakenedBtn.classList.remove("checkedAwakenBtn");
        dokkanAwakenedBtn.style.backgroundColor = "#ddd";
    } else {
        dokkanAwakenedBtn.classList.add("checkedAwakenBtn");
        dokkanAwakenedBtn.style.backgroundColor = "#33ccff";
    }
}

function removeAllDokkanAwaken() {
    let filterAwakenId = ["not-dokkan-awakened", "pre-dokkan-awakened", "dokkan-awakened"];
    for (let i = 0; i < filterAwakenId.length; i++) {
        document.getElementById(filterAwakenId[i]).classList.remove("checkedAwakenBtn");
        document.getElementById(filterAwakenId[i]).style.backgroundColor = "#ddd";
        document.getElementById(filterAwakenId[i]).style.cursor = "pointer";
        document.getElementById(filterAwakenId[i]).style.color = "black";
        document.getElementById(filterAwakenId[i]).removeAttribute("disabled");
    }
}