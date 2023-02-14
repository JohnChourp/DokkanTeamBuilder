function stickySearchSettingsYes() {
	const searchSettingsId = document.getElementById("search-bar-and-settings-id");
	const sitemapBtnId = document.getElementById("sitemap-btn-id");
	const buttonYes = document.getElementById("sticky-search-settings-yes-id");
	const buttonNo = document.getElementById("sticky-search-settings-no-id");

	buttonYes.classList.add("checkedstickySearchSettingsBtn");
	buttonNo.classList.remove("checkedstickySearchSettingsBtn");

	searchSettingsId.style.position = "fixed";
	searchSettingsId.style.zIndex = "1";
	searchSettingsId.style.marginTop = "-400px";
	searchSettingsId.style.width = "99%";

	sitemapBtnId.style.marginBottom = "400px";

}

function stickySearchSettingsNo() {
	const searchSettingsId = document.getElementById("search-bar-and-settings-id");
	const sitemapBtnId = document.getElementById("sitemap-btn-id");
	const buttonYes = document.getElementById("sticky-search-settings-yes-id");
	const buttonNo = document.getElementById("sticky-search-settings-no-id");

	buttonYes.classList.remove("checkedstickySearchSettingsBtn");
	buttonNo.classList.add("checkedstickySearchSettingsBtn");
	
	searchSettingsId.style.position = "relative";
	searchSettingsId.style.zIndex = "0";
	searchSettingsId.style.marginTop = "0px";
	searchSettingsId.style.width = "auto";

	sitemapBtnId.style.marginBottom = "0px";
}