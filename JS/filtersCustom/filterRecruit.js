const summonableBtn = document.getElementById("summonable");
const freeToPlayBtn = document.getElementById("free-to-play");

function filterRecruit(id) {
    const btn = document.getElementById(id);
    if (btn.classList.contains("checkedRecruitBtn")) {
        btn.classList.remove("checkedRecruitBtn");
        btn.style.backgroundColor = "#ddd";
    } else {
        btn.classList.add("checkedRecruitBtn");
        btn.style.backgroundColor = "#33ccff";
    }
}

function filterRecruitSummonable() {
    filterRecruit("summonable");
    checkFilterRecruitUsed();
}

function filterRecruitFreeToPlay() {
    filterRecruit("free-to-play");
    checkFilterRecruitUsed();
}

function removeAllRecruit() {
    summonableBtn.classList.remove("checkedRecruitBtn");
    summonableBtn.style.backgroundColor = "#ddd";
    summonableBtn.style.cursor = "pointer";
    summonableBtn.style.color = "black";
    summonableBtn.removeAttribute("disabled");

    freeToPlayBtn.classList.remove("checkedRecruitBtn");
    freeToPlayBtn.style.backgroundColor = "#ddd";
    freeToPlayBtn.style.cursor = "pointer";
    freeToPlayBtn.style.color = "black";
    freeToPlayBtn.removeAttribute("disabled");
}