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

function charsPerPageTextBox() {
	let charsPerPageIdTypeBox = document.getElementById("chars-per-page-id");
	charsPerPageIdTypeBox.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			let charsPerPageNum = charsPerPageIdTypeBox.value;
			localStorage.setItem("charsPerPageNumItem", charsPerPageNum);
			let charsPerPage_class = document.getElementsByClassName("charsPerPage");
			for (let i = 0; i < charsPerPage_class.length; i++) {
				charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
			}
			applyFilters();
		}
	});
}