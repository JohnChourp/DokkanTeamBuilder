function loadAnalytics() {
    var importScript = document.createElement('script');
    importScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-CS0302XFKQ';
    document.head.appendChild(importScript);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-S015YVBQ1D');
}