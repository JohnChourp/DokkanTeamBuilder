function searchSettings() {
	let searchSettingsId = document.getElementById("search-settings-id");
	let searchSettingsImageId = document.getElementById("search-settings-image-id");
	if (searchSettingsImageId.classList.contains("checkedSettingsBtn")) {
		searchSettingsImageId.classList.remove("checkedSettingsBtn");
		searchSettingsId.setAttribute("style", "display:none;");
	} else {
		searchSettingsImageId.classList.add("checkedSettingsBtn");
		searchSettingsId.setAttribute("style", "display:flex;");
	}
}