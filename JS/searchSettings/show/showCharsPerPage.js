function charsPerPageInput() {
	const charsPerPageIdTypeBox = document.getElementById("characters-per-input-page-id");
	const charsPerPage_class = document.getElementsByClassName("charsPerPage");

	charsPerPageIdTypeBox.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			if (charsPerPageIdTypeBox.value.length > 0) {
				const inputValue = parseInt(charsPerPageIdTypeBox.value);
				localStorage.setItem("charsPerPageNumItem", inputValue);
				for (let i = 0; i < charsPerPage_class.length; i++) {
					charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
				}
				applyFilters(2);
			}
		}
	});
}

function charsPerPage(charsPerPageBtn) {
	const charsPerPage_class = document.getElementsByClassName("charsPerPage");
	const charsPerPageNum = Math.pow(2, charsPerPageBtn) * 16;

	charsPerPage_class.item(charsPerPageBtn).classList.add("checkedCharsPerPageBtn");
	localStorage.setItem("charsPerPageNumItem", charsPerPageNum);
	for (let i = 0; i < charsPerPage_class.length; i++) {
		if (i != charsPerPageBtn) {
			charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
		}
	}
	applyFilters(2);
}