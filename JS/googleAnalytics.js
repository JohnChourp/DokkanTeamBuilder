function loadAnalytics() {
    const importScript = document.createElement("script");
    importScript.src = "https://www.googletagmanager.com/gtag/js?id=G-CS0302XFKQ";
    importScript.async = true;
    document.head.appendChild(importScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-CS0302XFKQ');
}