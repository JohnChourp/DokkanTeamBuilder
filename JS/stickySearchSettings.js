function stickySearchSettingsYes() {
	let buttonYes = document.getElementById("sticky-search-settings-yes-id");
	let buttonNo = document.getElementById("sticky-search-settings-no-id");

	buttonYes.classList.add("checkedstickySearchSettingsBtn");
	buttonNo.classList.remove("checkedstickySearchSettingsBtn");
	let searchSettingsId = document.getElementById("search-bar-and-settings-id");
	let sitemapBtnId = document.getElementById("sitemap-btn-id");
	searchSettingsId.style.position = "fixed";
	searchSettingsId.style.zIndex = "1";
	searchSettingsId.style.marginTop = "-400px";
	searchSettingsId.style.width = "99%";

	sitemapBtnId.style.marginBottom = "400px";

}

function stickySearchSettingsNo() {
	let buttonYes = document.getElementById("sticky-search-settings-yes-id");
	let buttonNo = document.getElementById("sticky-search-settings-no-id");

	buttonYes.classList.remove("checkedstickySearchSettingsBtn");
	buttonNo.classList.add("checkedstickySearchSettingsBtn");
	let searchSettingsId = document.getElementById("search-bar-and-settings-id");
	let sitemapBtnId = document.getElementById("sitemap-btn-id");
	searchSettingsId.style.position = "relative";
	searchSettingsId.style.zIndex = "0";
	searchSettingsId.style.marginTop = "0px";
	searchSettingsId.style.width = "auto";

	sitemapBtnId.style.marginBottom = "0px";
}