function searchSettings() {
  const searchSettingsId = document.getElementById("search-settings-id");
  const searchSettingsImageId = document.getElementById("search-settings-image-id");
  const hasCheckedSettingsBtn =searchSettingsImageId.classList.contains("checkedSettingsBtn");

  searchSettingsImageId.classList.toggle("checkedSettingsBtn",!hasCheckedSettingsBtn);
  searchSettingsId.style.display = hasCheckedSettingsBtn ? "none" : "flex";
}
