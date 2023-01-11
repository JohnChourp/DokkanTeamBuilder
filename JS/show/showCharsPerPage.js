function charsPerPage(charsPerPageBtn) {
	let charsPerPage_class = document.getElementsByClassName("charsPerPage");
	charsPerPage_class.item(charsPerPageBtn).classList.add("checkedCharsPerPageBtn");
	let charsPerPageNum = Math.pow(2, charsPerPageBtn) * 16;
	localStorage.setItem("charsPerPageNumItem",charsPerPageNum);
	for (let i = 0; i < charsPerPage_class.length; i++) {
		if (i != charsPerPageBtn) {
			charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
		}
	}
	applyFilters();
}