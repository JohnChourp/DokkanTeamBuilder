function searchTitlesYes() {
	let buttonYes = document.getElementById("search-titles-yes-id");
	let buttonNo = document.getElementById("search-titles-no-id");

	buttonYes.classList.add("checkedTitlesnBtn");
	buttonNo.classList.remove("checkedTitlesnBtn");

	localStorage.setItem("nameOrTitle", 2);
}

function searchTitlesNo() {
	let buttonYes = document.getElementById("search-titles-yes-id");
	let buttonNo = document.getElementById("search-titles-no-id");

	buttonYes.classList.remove("checkedTitlesnBtn");
	buttonNo.classList.add("checkedTitlesnBtn");

	localStorage.setItem("nameOrTitle", 1);
}