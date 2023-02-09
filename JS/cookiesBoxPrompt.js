function acceptCookies() {
    localStorage.setItem("cookiesPromptAcceptOrReject", "accept");
    location.reload();
}

function acceptCookies() {
    localStorage.setItem("cookiesPromptAcceptOrReject", "reject");
    document.getElementById("cookies-prompt").style.display = "none";
}

function cookiesBoxPrompt() {
    let cookiesPrompt = document.getElementById("cookies-prompt");
    let cookiesPromptAcceptOrReject = localStorage.getItem("cookiesPromptAcceptOrReject");

    if (cookiesPromptAcceptOrReject == "accept") {
        cookiesPrompt.style.display = "none";
        loadAnalytics();
    } else {
        cookiesPrompt.style.display = "block";
    }
}