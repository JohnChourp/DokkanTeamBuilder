function searchTitlesYes() {
	let buttonYes = document.getElementsByClassName("searchTitles").item(0);
	let buttonNo = document.getElementsByClassName("searchTitles").item(1);
	buttonYes.classList.add("checkedTitlesnBtn");
	buttonYes.style.backgroundColor = "#33ccff";
	buttonNo.style.backgroundColor = "white";
	searchCharNameOrTitle(2);
	searchCharName(2);
}
function searchTitlesNo() {
	let buttonYes = document.getElementsByClassName("searchTitles").item(0);
	let buttonNo = document.getElementsByClassName("searchTitles").item(1);
	buttonYes.classList.remove("checkedTitlesnBtn");
	buttonYes.style.backgroundColor = "white";
	buttonNo.style.backgroundColor = "#33ccff";
	searchCharNameOrTitle(1);
	searchCharName(1);
}