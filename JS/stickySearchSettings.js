function stickySearchSettingsYes() {
	const searchSettingsId = document.getElementById("search-bar-and-settings-id");
	const sitemapBtnId = document.getElementById("sitemap-btn-id");
	const buttonYes = document.getElementById("sticky-search-settings-yes-id");
	const buttonNo = document.getElementById("sticky-search-settings-no-id");

	buttonYes.classList.add("checkedstickySearchSettingsBtn");
	buttonNo.classList.remove("checkedstickySearchSettingsBtn");

	let width = '99%';
	for (let i = 50; i < 10000; i++) {
		if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
		  width = (i - 16) + "px";
		  break;
		}
	}

	searchSettingsId.style.position = "fixed";
	searchSettingsId.style.zIndex = "1";
	searchSettingsId.style.marginTop = "-400px";
	searchSettingsId.style.width = width;

	sitemapBtnId.style.marginBottom = "400px";

}

function stickySearchSettingsNo() {
	const searchSettingsId = document.getElementById("search-bar-and-settings-id");
	const sitemapBtnId = document.getElementById("sitemap-btn-id");
	const buttonYes = document.getElementById("sticky-search-settings-yes-id");
	const buttonNo = document.getElementById("sticky-search-settings-no-id");

	buttonYes.classList.remove("checkedstickySearchSettingsBtn");
	buttonNo.classList.add("checkedstickySearchSettingsBtn");
	
	let width = '99%';
	for (let i = 50; i < 10000; i++) {
		if (window.matchMedia(`(max-device-width: ${i}px)`).matches) {
		  width = (i - 16) + "px";
		  break;
		}
	}

	searchSettingsId.style.position = "relative";
	searchSettingsId.style.zIndex = "0";
	searchSettingsId.style.marginTop = "0px";
	searchSettingsId.style.width = width;

	sitemapBtnId.style.marginBottom = "0px";
}