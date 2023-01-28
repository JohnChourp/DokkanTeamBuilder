function cookiesBoxPromptAccept() {
    localStorage.setItem("cookiesPromptAcceptOrReject", "accept");
    window.location.reload();
}

function cookiesBoxPromptReject() {
    localStorage.setItem("cookiesPromptAcceptOrReject", "reject");
    document.getElementById("cookies-prompt").style.display = "none";
}

function cookiesBoxPrompt() {
    let cookiesPrompt = document.getElementById("cookies-prompt");
    let cookiesPromptAcceptOrReject = localStorage.getItem("cookiesPromptAcceptOrReject");
    if (cookiesPromptAcceptOrReject == "accept") {
        cookiesPrompt.style.display = "none";
        googleAnalytics();
    } else {
        cookiesPrompt.style.display = "block";
    }
}