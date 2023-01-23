function filterRecruitSummonable() {
    let summonableBtn = document.getElementById("summonable");
    if (summonableBtn.classList.contains("checkedRecruitBtn")) {
        summonableBtn.classList.remove("checkedRecruitBtn");
        summonableBtn.style.backgroundColor = "#ddd";
    } else {
        summonableBtn.classList.add("checkedRecruitBtn");
        summonableBtn.style.backgroundColor = "#33ccff";
    }
}

function filterRecruitFreeToPlay() {
    let freeToPlayBtn = document.getElementById("free-to-play");
    if (freeToPlayBtn.classList.contains("checkedRecruitBtn")) {
        freeToPlayBtn.classList.remove("checkedRecruitBtn");
        freeToPlayBtn.style.backgroundColor = "#ddd";
    } else {
        freeToPlayBtn.classList.add("checkedRecruitBtn");
        freeToPlayBtn.style.backgroundColor = "#33ccff";
    }
}

function removeAllRecruit() {
    let filterRecruitId = ["summonable", "free-to-play"];
    for (let i = 0; i < filterRecruitId.length; i++) {
        document.getElementById(filterRecruitId[i]).classList.remove("checkedRecruitBtn");
        document.getElementById(filterRecruitId[i]).style.backgroundColor = "#ddd";
        document.getElementById(filterRecruitId[i]).style.cursor = "pointer";
        document.getElementById(filterRecruitId[i]).style.color = "black";
        document.getElementById(filterRecruitId[i]).removeAttribute("disabled");
    }
}