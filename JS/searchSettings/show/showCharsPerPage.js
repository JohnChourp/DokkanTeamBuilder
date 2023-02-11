function charsPerPageInput() {
	let charsPerPageIdTypeBox = document.getElementById("characters-per-input-page-id");
	let charsPerPage_class = document.getElementsByClassName("charsPerPage");
	
	charsPerPageIdTypeBox.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			if (charsPerPageIdTypeBox.value.length > 0) {
				let inputValue = parseInt(charsPerPageIdTypeBox.value);
				localStorage.setItem("charsPerPageNumItem", inputValue);
				for (let i = 0; i < charsPerPage_class.length; i++) {
					charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
				}
				applyFilters();
			}
		}
	});
}

function charsPerPage(charsPerPageBtn) {
	let charsPerPage_class = document.getElementsByClassName("charsPerPage");
	let charsPerPageNum = Math.pow(2, charsPerPageBtn) * 16;

	charsPerPage_class.item(charsPerPageBtn).classList.add("checkedCharsPerPageBtn");
	localStorage.setItem("charsPerPageNumItem", charsPerPageNum);
	for (let i = 0; i < charsPerPage_class.length; i++) {
		if (i != charsPerPageBtn) {
			charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
		}
	}
	applyFilters();
}