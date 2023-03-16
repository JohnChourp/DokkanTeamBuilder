const anniversaryButtons = document.querySelectorAll(".anniversary-class");

function filterAnniversary(year) {
    const btn = document.querySelector(`#year-${year}`);
    const anniversaryChecked = btn.classList.contains("checkedAnniversaryBtn");
    if (!anniversaryChecked) {
        btn.classList.add("checkedAnniversaryBtn");
        btn.style.backgroundColor = "#33ccff";
    } else {
        btn.classList.remove("checkedAnniversaryBtn");
        btn.style.backgroundColor = "#ddd";
    }
    checkFilterAnniversaryUsed();
}

function removeAllAnniversary() {
    for (const btn of anniversaryButtons) {
        btn.classList.remove("checkedAnniversaryBtn");
        btn.style.backgroundColor = "#ddd";
        btn.style.cursor = "pointer";
        btn.style.color = "black";
        btn.removeAttribute("disabled");
    }
}
