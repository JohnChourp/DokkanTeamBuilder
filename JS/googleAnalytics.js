// window.dataLayer = window.dataLayer || [];

// function gtag() { 
// 	dataLayer.push(arguments); 
// }

// function googleAnalytics(){
// 	gtag('js', new Date());
// 	gtag('config', 'G-S015YVBQ1D');
// }

var imported = document.createElement('script');
imported.src = 'https://www.googletagmanager.com/gtag/js?id=G-S015YVBQ1D';
document.head.appendChild(imported);


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-S015YVBQ1D');