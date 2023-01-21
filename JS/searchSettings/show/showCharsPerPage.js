function charsPerPageStart() {
	let charsPerPage_class = document.getElementsByClassName("charsPerPage");
	charsPerPage_class.item(1).classList.add("checkedCharsPerPageBtn");
	let charsPerPageNum = Math.pow(2, 1) * 16;
	localStorage.setItem("charsPerPageNumItem", charsPerPageNum);
	for (let i = 0; i < charsPerPage_class.length; i++) {
		if (i != 1) {
			charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
		}
	}

	let charsPerPageIdTypeBox = document.getElementById("characters-per-input-page-id");
	charsPerPageIdTypeBox.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			if (charsPerPageIdTypeBox.value.length > 0) {
				localStorage.setItem("charsPerPageNumItem", charsPerPageIdTypeBox.value);
				let charsPerPage_class = document.getElementsByClassName("charsPerPage");
				for (let i = 0; i < charsPerPage_class.length; i++) {
					charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
				}
				applyFilters();
			}
		}
	});
	searchChar();
	applyFilters();
}

function charsPerPage(charsPerPageBtn) {
	let charsPerPage_class = document.getElementsByClassName("charsPerPage");
	charsPerPage_class.item(charsPerPageBtn).classList.add("checkedCharsPerPageBtn");
	let charsPerPageNum = Math.pow(2, charsPerPageBtn) * 16;
	localStorage.setItem("charsPerPageNumItem", charsPerPageNum);
	for (let i = 0; i < charsPerPage_class.length; i++) {
		if (i != charsPerPageBtn) {
			charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
		}
	}
	applyFilters();
}