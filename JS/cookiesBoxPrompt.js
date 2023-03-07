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
    const tagManager = document.getElementById("tag-manager-id");
    tagManager.innerHTML ="<noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-TBW6L4T' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript>";
    loadAnalytics();
  } else {
    cookiesPrompt.style.display = "block";
  }
}
