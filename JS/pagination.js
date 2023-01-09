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

function createPagination() {
	let paginationDiv = document.getElementById("pagination");
	paginationDiv.innerHTML = "";
	let char = document.getElementsByClassName("char");
	let pageSum = Math.ceil(char.length / 32);

	let pagePrevious = document.createElement("a");
	pagePrevious.onclick = function () { paginationFilterPrevious(pageSum); }
	pagePrevious.href = "#";
	pagePrevious.setAttribute("draggable", "false");
	pagePrevious.innerHTML = "&laquo;";
	paginationDiv.appendChild(pagePrevious);

	for (let i = 1; i <= pageSum; i++) {
		if (i == 1) {
			let page = document.createElement("a");
			page.onclick = function () { pagination_filter_page((i - 1) * 32, i * 32, pageSum, i); };
			page.href = "#";
			page.setAttribute("draggable", "false");
			page.innerHTML = i;
			page.classList.add("checkedPagiantionBtn");
			paginationDiv.appendChild(page);
		} else {
			let page = document.createElement("a");
			page.onclick = function () { pagination_filter_page((i - 1) * 32, i * 32, pageSum, i); };
			page.href = "#";
			page.setAttribute("draggable", "false");
			page.innerHTML = i;
			paginationDiv.appendChild(page);
		}
	}

	let pageNext = document.createElement("a");
	pageNext.onclick = function () { paginationFilterNext(pageSum); }
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

	pageResults.innerHTML = "Showing 1 to 32 of " + char.length + " Characters";
	paginationDiv.appendChild(pageResults);
	pagination_filter_page(0, 32, pageSum, 1);
}

function createFilterPagination(charList) {
	let char_container = document.getElementById("char_container");
	char_container.innerHTML = "";
	for (let j = 0; j < charList.length; j++) {
		char_container.appendChild(charList[j]);
	}

	let paginationDiv = document.getElementById("pagination");
	paginationDiv.innerHTML = "";
	let char = document.getElementsByClassName("char");
	let pageSum = Math.ceil(char.length / 32);

	let pagePrevious = document.createElement("a");
	pagePrevious.onclick = function () { paginationFilterPrevious(pageSum); }
	pagePrevious.href = "#";
	pagePrevious.setAttribute("draggable", "false");
	pagePrevious.innerHTML = "&laquo;";
	paginationDiv.appendChild(pagePrevious);

	for (let i = 1; i <= pageSum; i++) {
		if (i == 1) {
			let page = document.createElement("a");
			page.onclick = function () { pagination_filter_page((i - 1) * 32, i * 32, pageSum, 1); };
			page.href = "#";
			page.setAttribute("draggable", "false");
			page.innerHTML = i;
			page.classList.add("checkedPagiantionBtn");
			paginationDiv.appendChild(page);
		} else {
			let page = document.createElement("a");
			page.onclick = function () { pagination_filter_page((i - 1) * 32, i * 32, pageSum, i); };
			page.href = "#";
			page.setAttribute("draggable", "false");
			page.innerHTML = i;
			paginationDiv.appendChild(page);
		}
	}

	let pageNext = document.createElement("a");
	pageNext.onclick = function () { paginationFilterNext(pageSum); }
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

	if (char.length < 32) {
		pageResults.innerHTML = "Showing 1 to " + char.length + " of " + char.length + " Characters";
		paginationDiv.appendChild(pageResults);
		pagination_filter_page(0, char.length, pageSum, 1);
	} else {
		pageResults.innerHTML = "Showing 1 to 32 of " + char.length + " Characters";
		paginationDiv.appendChild(pageResults);
		pagination_filter_page(0, 32, pageSum, 1);
	}
}
function pagination_filter_page(start, end, pageSum, pageNum) {
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

	let pagination_id = document.getElementById("pagination");
	if (char.length < 32) {
		pagination_id.children.item(pageSum + 2).innerHTML = "Showing 1 to " + char.length + " of " + char.length + " Characters";
	} else if (pageSum == pageNum) {
		pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + char.length + " of " + char.length + " Characters";
	} else {
		pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + (pageNum * 32) + " of " + char.length + " Characters";
	}
	addFilterPaginationClass(pageNum, pageSum);
}
function paginationFilterPrevious(pageSum) {
	let pagination_id = document.getElementById("pagination");
	for (i = 1; i <= pageSum; i++) {
		if (pagination_id.children.item(i + 1).classList.contains("checkedPagiantionBtn")) {
			pagination_id.children.item(i).classList.add("checkedPagiantionBtn");
			pagination_id.children.item(i).style.border = "1px solid #4CAF50";
			pagination_id.children.item(i + 1).classList.remove("checkedPagiantionBtn");
			pagination_id.children.item(i + 1).style.border = "1px solid #ddd";
			pagination_filter_page((i - 1) * 32, i * 32, pageSum, i);
		}
	}
}
function paginationFilterNext(pageSum) {
	let char = document.getElementsByClassName("char");
	let pagination_id = document.getElementById("pagination");
	for (i = pageSum; i > 0; i--) {
		if (pagination_id.children.item(i - 1).classList.contains("checkedPagiantionBtn")) {
			pagination_id.children.item(i).classList.add("checkedPagiantionBtn");
			pagination_id.children.item(i).style.border = "1px solid #4CAF50";
			pagination_id.children.item(i - 1).classList.remove("checkedPagiantionBtn");
			pagination_id.children.item(i - 1).style.border = "1px solid #ddd";
			if (i == 1) {
				pagination_filter_page((i - 1) * 32, char.length, pageSum, i);
			} else {
				pagination_filter_page((i - 1) * 32, i * 32, pageSum, i);
			}
		}
	}
}
function addFilterPaginationClass(pageNum, pageSum) {
	let pagination_id = document.getElementById("pagination");
	if (!pagination_id.children.item(pageNum).classList.contains("checkedPagiantionBtn")) {
		for (i = 1; i <= pageSum; i++) {
			pagination_id.children.item(i).classList.remove("checkedPagiantionBtn");
			pagination_id.children.item(i).style.border = "1px solid #ddd";
		}
		pagination_id.children.item(pageNum).classList.add("checkedPagiantionBtn");
		pagination_id.children.item(pageNum).style.border = "1px solid #4CAF50";
	}
}