function searchTitlesOptionYes() {
	let buttonYes = document.getElementById("searchTitlesOptionYes");
	let buttonNo = document.getElementById("searchTitlesOptionNo");
	buttonYes.classList.add("checkedTitlesnBtn");
	buttonYes.style.backgroundColor = "#33ccff";
	buttonNo.style.backgroundColor = "white";
}
function searchTitlesOptionNo() {
	let buttonYes = document.getElementById("searchTitlesOptionYes");
	let buttonNo = document.getElementById("searchTitlesOptionNo");
	buttonYes.classList.remove("checkedTitlesnBtn");
	buttonYes.style.backgroundColor = "white";
	buttonNo.style.backgroundColor = "#33ccff";
}