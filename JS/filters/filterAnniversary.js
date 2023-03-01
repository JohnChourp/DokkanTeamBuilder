function filterAnniversary(id) {
    removeAllAnniversary();
    const btn = document.getElementById(id);
    if (btn.classList.contains("checkedAnniversaryBtn")) {
        btn.classList.remove("checkedAnniversaryBtn");
        btn.style.backgroundColor = "#ddd";
    } else {
        btn.classList.add("checkedAnniversaryBtn");
        btn.style.backgroundColor = "#33ccff";
    }
}

function filterAnniversaryYear1() {
    filterAnniversary("year-1");
}
function filterAnniversaryYear2() {
    filterAnniversary("year-2");
}
function filterAnniversaryYear3() {
    filterAnniversary("year-3");
}
function filterAnniversaryYear4() {
    filterAnniversary("year-4");
}
function filterAnniversaryYear5() {
    filterAnniversary("year-5");
}
function filterAnniversaryYear6() {
    filterAnniversary("year-6");
}
function filterAnniversaryYear7() {
    filterAnniversary("year-7");
}
function filterAnniversaryYear8() {
    filterAnniversary("year-8");
}

function removeAllAnniversary() {
    const anniversaryButtons = document.querySelectorAll(".anniversary-class");
    anniversaryButtons.forEach(btn => {
        btn.classList.remove("checkedAnniversaryBtn");
        btn.style.backgroundColor = "#ddd";
        btn.style.cursor = "pointer";
        btn.style.color = "black";
        btn.removeAttribute("disabled");
    });
}
