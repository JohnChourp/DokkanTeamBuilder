function createFilterPagination(charList, charsPerPageNum) {
	let char_container_id = document.getElementById("char-container-id");
	let paginationDiv = document.getElementById("pagination-id");
	let pagePrevious = document.createElement("a");
	let char = document.getElementsByClassName("char");
	let page, pageNext, pageResults, pageSum;

	pageSum = Math.ceil(charList.length / charsPerPageNum);
	char_container_id.innerHTML = "";

	for (let i = 0; i < charList.length; i++) {
		char_container_id.appendChild(charList[i]);
	}
	paginationDiv.innerHTML = "";

	pagePrevious.onclick = function () { paginationPrevious(pageSum, charsPerPageNum, charList); }
	pagePrevious.href = "#";
	pagePrevious.setAttribute("draggable", "false");
	pagePrevious.innerHTML = "&laquo;";
	paginationDiv.appendChild(pagePrevious);

	for (let i = 1; i <= pageSum; i++) {
		if (i == 1) {
			page = document.createElement("a");
			page.onclick = function () { pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, 1, charsPerPageNum, charList); };
			page.href = "#";
			page.setAttribute("draggable", "false");
			page.innerHTML = i;
			page.classList.add("checkedPagiantionBtn");
			paginationDiv.appendChild(page);
		} else {
			page = document.createElement("a");
			page.onclick = function () { pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charsPerPageNum, charList); };
			page.href = "#";
			page.setAttribute("draggable", "false");
			page.innerHTML = i;
			paginationDiv.appendChild(page);
		}
	}

	pageNext = document.createElement("a");
	pageNext.onclick = function () { paginationFilterNext(pageSum, charsPerPageNum, charList); }
	pageNext.href = "#";
	pageNext.setAttribute("draggable", "false");
	pageNext.innerHTML = "&raquo;";
	paginationDiv.appendChild(pageNext);

	pageResults = document.createElement("a");
	pageResults.href = "#";
	pageResults.style.cursor = "text";
	pageResults.style.backgroundColor = "transparent";
	pageResults.setAttribute("draggable", "false");
	pageResults.setAttribute('id', 'charResults');

	if (char.length < charsPerPageNum) {
		pageResults.innerHTML = "Showing 1 to " + char.length + " of " + char.length + " Characters";
		paginationDiv.appendChild(pageResults);
		pagination_page(0, char.length, pageSum, 1, charsPerPageNum, charList);
	} else {
		pageResults.innerHTML = "Showing 1 to " + charsPerPageNum + " of " + charList.length + " Characters";
		paginationDiv.appendChild(pageResults);
		pagination_page(0, charsPerPageNum, pageSum, 1, charsPerPageNum, charList);
	}
}

function pagination_page(start, end, pageSum, pageNum, charsPerPageNum, charList) {
	let char_container_id = document.getElementById("char-container-id");
	let char = document.getElementsByClassName("char");
	let pagination_id = document.getElementById("pagination-id");

	char_container_id.innerHTML = "";
	if (pageSum == pageNum) {
		for (let i = start; i < charList.length; i++) {
			char_container_id.appendChild(charList[i]);
		}
	} else {
		for (let i = start; i < end; i++) {
			char_container_id.appendChild(charList[i]);
		}
	}
	if ((char.length < charsPerPageNum) && (pageNum == pageSum)) {
		pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + charList.length + " of " + charList.length + " Characters";
	} else {
		pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + (pageNum * charsPerPageNum) + " of " + charList.length + " Characters";
	}
	addFilterPaginationClass(pageNum, pageSum);
}

function paginationPrevious(pageSum, charsPerPageNum, charList) {
	let pagination_id = document.getElementById("pagination-id");

	for (i = 1; i <= pageSum; i++) {
		if (pagination_id.children.item(i + 1).classList.contains("checkedPagiantionBtn")) {
			pagination_id.children.item(i).classList.add("checkedPagiantionBtn");
			pagination_id.children.item(i).style.border = "1px solid #4CAF50";
			pagination_id.children.item(i + 1).classList.remove("checkedPagiantionBtn");
			pagination_id.children.item(i + 1).style.border = "1px solid #ddd";
			pagination_page(((i - 1) * charsPerPageNum), (i * charsPerPageNum), pageSum, i, charsPerPageNum, charList);
		}
	}
}
function paginationFilterNext(pageSum, charsPerPageNum, charList) {
	let char = document.getElementsByClassName("char");
	let pagination_id = document.getElementById("pagination-id");

	for (i = pageSum; i > 0; i--) {
		if (pagination_id.children.item(i - 1).classList.contains("checkedPagiantionBtn")) {
			pagination_id.children.item(i).classList.add("checkedPagiantionBtn");
			pagination_id.children.item(i).style.border = "1px solid #4CAF50";
			pagination_id.children.item(i - 1).classList.remove("checkedPagiantionBtn");
			pagination_id.children.item(i - 1).style.border = "1px solid #ddd";
			if (i == 1) {
				pagination_page((i - 1) * charsPerPageNum, char.length, pageSum, i, charsPerPageNum, charList);
			} else {
				pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charsPerPageNum, charList);
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