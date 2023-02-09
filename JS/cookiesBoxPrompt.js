function cookiesBoxAccept() {
    localStorage.setItem("cookiesAcceptReject", "accept");
    location.reload();
}

function cookiesBoxReject() {
    localStorage.setItem("cookiesAcceptReject", "reject");
    document.querySelector("#cookies-prompt").style.display = "none";
}

function cookiesBox() {
    const cookiesPrompt = document.querySelector("#cookies-prompt");
    const cookiesAcceptReject = localStorage.getItem("cookiesAcceptReject");
    if (cookiesAcceptReject === "accept") {
        cookiesPrompt.style.display = "none";
        loadAnalytics();
    } else {
        cookiesPrompt.style.display = "block";
    }
}