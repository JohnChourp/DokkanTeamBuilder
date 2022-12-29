function pagination_page(start, end) {
	let char = document.getElementsByClassName("char");
	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "none";
	}
	for (let i = start; i < end; i++) {
		char.item(i).style.display = "inline";
	}
	let pageNum = end / 32;
	addPaginationClass(pageNum);
}

function addPaginationClass(pageNum) {
	let pagination_class = document.getElementsByClassName("pagination").item(0);

	if (!pagination_class.children.item(pageNum).classList.contains("checkedPagiantionBtn")) {
		pagination_class.children.item(pageNum).classList.add("checkedPagiantionBtn");
		pagination_class.children.item(pageNum).style.backgroundColor = "#4CAF50";
		pagination_class.children.item(pageNum).style.border = "1px solid #4CAF50";
		for (i = 1; i < pagination_class.children.length - 1; i++) {
			if (i != pageNum) {
				pagination_class.children.item(i).classList.remove("checkedPagiantionBtn");
				pagination_class.children.item(i).style.backgroundColor = "transparent";
				pagination_class.children.item(i).style.border = "1px solid #ddd";
			}
		}
	}
}

function paginationPrevious() {
	let pagination_class = document.getElementsByClassName("pagination").item(0);

	for (i = 0; i < 9; i++) {
		if (pagination_class.children.item(i + 2).classList.contains("checkedPagiantionBtn")) {
			pagination_class.children.item(i + 1).classList.add("checkedPagiantionBtn");
			pagination_class.children.item(i + 1).style.backgroundColor = "#4CAF50";
			pagination_class.children.item(i + 1).style.border = "1px solid #4CAF50";
			pagination_class.children.item(i + 2).classList.remove("checkedPagiantionBtn");
			pagination_class.children.item(i + 2).style.backgroundColor = "transparent";
			pagination_class.children.item(i + 2).style.border = "1px solid #ddd";
			pagination_page(i * 32, (i + 1) * 32);
		}
	}
}
function paginationNext() {
	let pagination_class = document.getElementsByClassName("pagination").item(0);
	for (i = 10; i > 0; i--) {
		if (pagination_class.children.item(i - 1).classList.contains("checkedPagiantionBtn")) {
			pagination_class.children.item(i).classList.add("checkedPagiantionBtn");
			pagination_class.children.item(i).style.backgroundColor = "#4CAF50";
			pagination_class.children.item(i).style.border = "1px solid #4CAF50";
			pagination_class.children.item(i - 1).classList.remove("checkedPagiantionBtn");
			pagination_class.children.item(i - 1).style.backgroundColor = "transparent";
			pagination_class.children.item(i - 1).style.border = "1px solid #ddd";
			pagination_page((i - 1) * 32, i * 32);
		}
	}
}