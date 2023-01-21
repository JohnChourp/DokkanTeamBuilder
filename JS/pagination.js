Array.prototype.clean = function (deleteValue) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == deleteValue) {
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};

function setAttributes(elem) {
	for (var i = 1; i < arguments.length; i += 2) {
		elem.setAttribute(arguments[i], arguments[i + 1]);
	}
}

function createFilterPagination(charList, charsPerPageNum) {
	let char_container_id = document.getElementById("char-container-id");
	char_container_id.innerHTML = "";
	for (let j = 0; j < charList.length; j++) {
		char_container_id.appendChild(charList[j]);
	}

	let paginationDiv = document.getElementById("pagination-id");
	paginationDiv.innerHTML = "";
	let char = document.getElementsByClassName("char");
	let pageSum = Math.ceil(char.length / charsPerPageNum);

	let pagePrevious = document.createElement("a");
	pagePrevious.onclick = function () { paginationPrevious(pageSum, charsPerPageNum); }
	pagePrevious.href = "#";
	pagePrevious.setAttribute("draggable", "false");
	pagePrevious.innerHTML = "&laquo;";
	paginationDiv.appendChild(pagePrevious);

	for (let i = 1; i <= pageSum; i++) {
		if (i == 1) {
			let page = document.createElement("a");
			page.onclick = function () { pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, 1, charsPerPageNum); };
			page.href = "#";
			page.setAttribute("draggable", "false");
			page.innerHTML = i;
			page.classList.add("checkedPagiantionBtn");
			paginationDiv.appendChild(page);
		} else {
			let page = document.createElement("a");
			page.onclick = function () { pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charsPerPageNum); };
			page.href = "#";
			page.setAttribute("draggable", "false");
			page.innerHTML = i;
			paginationDiv.appendChild(page);
		}
	}

	let pageNext = document.createElement("a");
	pageNext.onclick = function () { paginationFilterNext(pageSum, charsPerPageNum); }
	pageNext.href = "#";
	pageNext.setAttribute("draggable", "false");
	pageNext.innerHTML = "&raquo;";
	paginationDiv.appendChild(pageNext);

	let pageResults = document.createElement("a");
	pageResults.href = "#";
	pageResults.style.cursor = "text";
	pageResults.style.backgroundColor = "transparent";
	pageResults.setAttribute("draggable", "false");
	pageResults.setAttribute('id', 'charResults');

	if (char.length < charsPerPageNum) {
		pageResults.innerHTML = "Showing 1 to " + char.length + " of " + char.length + " Characters";
		paginationDiv.appendChild(pageResults);
		pagination_page(0, char.length, pageSum, 1, charsPerPageNum);
	} else {
		pageResults.innerHTML = "Showing 1 to " + charsPerPageNum + " of " + char.length + " Characters";
		paginationDiv.appendChild(pageResults);
		pagination_page(0, charsPerPageNum, pageSum, 1, charsPerPageNum);
	}
}

function createSearchOneCharPagination(charsPerPageNum) {

	let paginationDiv = document.getElementById("pagination-id");
	paginationDiv.innerHTML = "";
	let char = document.getElementsByClassName("char");
	let pageSum = Math.ceil(char.length / charsPerPageNum);

	let pagePrevious = document.createElement("a");
	pagePrevious.onclick = function () { paginationPrevious(pageSum, charsPerPageNum); }
	pagePrevious.href = "#";
	pagePrevious.setAttribute("draggable", "false");
	pagePrevious.innerHTML = "&laquo;";
	paginationDiv.appendChild(pagePrevious);

	for (let i = 1; i <= pageSum; i++) {
		if (i == 1) {
			let page = document.createElement("a");
			page.onclick = function () { pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, 1, charsPerPageNum); };
			page.href = "#";
			page.setAttribute("draggable", "false");
			page.innerHTML = i;
			page.classList.add("checkedPagiantionBtn");
			paginationDiv.appendChild(page);
		} else {
			let page = document.createElement("a");
			page.onclick = function () { pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charsPerPageNum); };
			page.href = "#";
			page.setAttribute("draggable", "false");
			page.innerHTML = i;
			paginationDiv.appendChild(page);
		}
	}

	let pageNext = document.createElement("a");
	pageNext.onclick = function () { paginationFilterNext(pageSum, charsPerPageNum); }
	pageNext.href = "#";
	pageNext.setAttribute("draggable", "false");
	pageNext.innerHTML = "&raquo;";
	paginationDiv.appendChild(pageNext);

	let pageResults = document.createElement("a");
	pageResults.href = "#";
	pageResults.style.cursor = "text";
	pageResults.style.backgroundColor = "transparent";
	pageResults.setAttribute("draggable", "false");
	pageResults.setAttribute('id', 'charResults');

	if (char.length < charsPerPageNum) {
		pageResults.innerHTML = "Showing 1 to " + char.length + " of " + char.length + " Characters";
		paginationDiv.appendChild(pageResults);
		pagination_page(0, char.length, pageSum, 1, charsPerPageNum);
	} else {
		pageResults.innerHTML = "Showing 1 to " + charsPerPageNum + " of " + char.length + " Characters";
		paginationDiv.appendChild(pageResults);
		pagination_page(0, charsPerPageNum, pageSum, 1, charsPerPageNum);
	}
}
function pagination_page(start, end, pageSum, pageNum, charsPerPageNum) {
	let char = document.getElementsByClassName("char");
	for (let i = 0; i < char.length; i++) {
		char.item(i).style.display = "none";
	}

	if (pageSum == 1) {
		for (let i = start; i < char.length; i++) {
			char.item(i).style.display = "inline";
		}
	} else if (pageSum == pageNum) {
		for (let i = start; i < char.length; i++) {
			char.item(i).style.display = "inline";
		}
	} else {
		for (let i = start; i < end; i++) {
			char.item(i).style.display = "inline";
		}
	}

	let pagination_id = document.getElementById("pagination-id");
	if (char.length < charsPerPageNum) {
		pagination_id.children.item(pageSum + 2).innerHTML = "Showing 1 to " + char.length + " of " + char.length + " Characters";
	} else if (pageSum == pageNum) {
		pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + char.length + " of " + char.length + " Characters";
	} else {
		pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + (pageNum * charsPerPageNum) + " of " + char.length + " Characters";
	}
	addFilterPaginationClass(pageNum, pageSum);
}

function paginationPrevious(pageSum, charsPerPageNum) {
	let pagination_id = document.getElementById("pagination-id");
	for (i = 1; i <= pageSum; i++) {
		if (pagination_id.children.item(i + 1).classList.contains("checkedPagiantionBtn")) {
			pagination_id.children.item(i).classList.add("checkedPagiantionBtn");
			pagination_id.children.item(i).style.border = "1px solid #4CAF50";
			pagination_id.children.item(i + 1).classList.remove("checkedPagiantionBtn");
			pagination_id.children.item(i + 1).style.border = "1px solid #ddd";
			pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charsPerPageNum);
		}
	}
}

function paginationFilterNext(pageSum, charsPerPageNum) {
	let char = document.getElementsByClassName("char");
	let pagination_id = document.getElementById("pagination-id");
	for (i = pageSum; i > 0; i--) {
		if (pagination_id.children.item(i - 1).classList.contains("checkedPagiantionBtn")) {
			pagination_id.children.item(i).classList.add("checkedPagiantionBtn");
			pagination_id.children.item(i).style.border = "1px solid #4CAF50";
			pagination_id.children.item(i - 1).classList.remove("checkedPagiantionBtn");
			pagination_id.children.item(i - 1).style.border = "1px solid #ddd";
			if (i == 1) {
				pagination_page((i - 1) * charsPerPageNum, char.length, pageSum, i, charsPerPageNum);
			} else {
				pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charsPerPageNum);
			}
		}
	}
}

function addFilterPaginationClass(pageNum, pageSum) {
	let pagination_id = document.getElementById("pagination-id");
	if (!pagination_id.children.item(pageNum).classList.contains("checkedPagiantionBtn")) {
		for (i = 1; i <= pageSum; i++) {
			pagination_id.children.item(i).classList.remove("checkedPagiantionBtn");
			pagination_id.children.item(i).style.border = "1px solid #ddd";
		}
		pagination_id.children.item(pageNum).classList.add("checkedPagiantionBtn");
		pagination_id.children.item(pageNum).style.border = "1px solid #4CAF50";
	}
}