function filterRecruit(id) {
    let btn = document.getElementById(id);
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
}

function filterRecruitFreeToPlay() {
    filterRecruit("free-to-play");
}

function removeAllRecruit() {
    let summonableBtn = document.getElementById("summonable");
    let freeToPlayBtn = document.getElementById("free-to-play");

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