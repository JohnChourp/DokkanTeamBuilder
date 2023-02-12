function createFilterPagination(charList, charsPerPageNum) {
	const charContainer = document.getElementById("char-container-id");
	const paginationDiv = document.getElementById("pagination-id");
	const char = document.getElementsByClassName("char");
	const charLength = charList.length;
	const pageSum = Math.ceil(charLength / charsPerPageNum);
	let pagePrevious = document.createElement("a");
	let pageNext = document.createElement("a");
	let pageResults = document.createElement("a");

	const fragment = document.createDocumentFragment();
	for (let i = charLength - 1; i >= 0; i--) {
		fragment.appendChild(charList[i]);
	}
	charContainer.innerHTML = "";
	charContainer.appendChild(fragment);

	paginationDiv.innerHTML = "";

	pagePrevious.onclick = function () { paginationPrevious(pageSum, charsPerPageNum, charList); }
	pagePrevious.href = "#";
	pagePrevious.setAttribute("draggable", "false");
	pagePrevious.innerHTML = "&laquo;";
	paginationDiv.appendChild(pagePrevious);

	for (let i = 1; i <= pageSum; i++) {
		const page = document.createElement("a");
		page.onclick = () => pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList);
		page.href = "#";
		page.setAttribute("draggable", "false");
		page.innerHTML = i;
		if (i === 1) {
			page.classList.add("checkedPaginationBtn");
		}
		paginationDiv.appendChild(page);
	}

	pageNext.onclick = function () { paginationFilterNext(pageSum, charsPerPageNum, charList); }
	pageNext.href = "#";
	pageNext.setAttribute("draggable", "false");
	pageNext.innerHTML = "&raquo;";
	paginationDiv.appendChild(pageNext);

	pageResults.href = "#";
	pageResults.style.cursor = "text";
	pageResults.style.backgroundColor = "transparent";
	pageResults.setAttribute("draggable", "false");
	pageResults.setAttribute('id', 'charResults');

	if (char.length < charsPerPageNum) {
		pageResults.innerHTML = `Showing 1 to ${char.length} of ${char.length} Characters`;
		paginationDiv.appendChild(pageResults);
		pagination_page(0, char.length, pageSum, 1, charList);
	} else {
		pageResults.innerHTML = `Showing 1 to ${charsPerPageNum} of ${charList.length} Characters`;
		paginationDiv.appendChild(pageResults);
		pagination_page(0, charsPerPageNum, pageSum, 1, charList);
	}
}

function pagination_page(start, end, pageSum, pageNum, charList) {
	let char_container_id = document.getElementById("char-container-id");
	let pagination_id = document.getElementById("pagination-id");

	let fragment = document.createDocumentFragment();
	end = (pageNum === pageSum) ? charList.length : end;
	for (let i = start; i < end; i++) {
		fragment.appendChild(charList[i]);
	}

	char_container_id.innerHTML = "";
	char_container_id.appendChild(fragment);

	pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + end + " of " + charList.length + " Characters";
	addFilterPaginationClass(pageNum, pageSum);
}

function paginationPrevious(pageSum, charsPerPageNum, charList) {
	let pagination_id = document.getElementById("pagination-id");
	let paginationChildren = pagination_id.children;

	for (let i = 1; i <= pageSum; i++) {
		let currentPage = paginationChildren.item(i);
		let nextPage = paginationChildren.item(i + 1);

		if (nextPage.classList.contains("checkedPagiantionBtn")) {
			currentPage.classList.add("checkedPagiantionBtn");
			currentPage.style.border = "1px solid #4CAF50";
			nextPage.classList.remove("checkedPagiantionBtn");
			nextPage.style.border = "1px solid #ddd";
			pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList);
		}
	}
}

function paginationFilterNext(pageSum, charsPerPageNum, charList) {
	let char = document.getElementsByClassName("char");
	let pagination_id = document.getElementById("pagination-id");
	let currentChild;

	for (i = pageSum; i > 0; i--) {
		currentChild = pagination_id.children.item(i);
		if (pagination_id.children.item(i - 1).classList.contains("checkedPagiantionBtn")) {
			currentChild.classList.add("checkedPagiantionBtn");
			currentChild.style.border = "1px solid #4CAF50";
			pagination_id.children.item(i - 1).classList.remove("checkedPagiantionBtn");
			pagination_id.children.item(i - 1).style.border = "1px solid #ddd";
			if (i == 1) {
				pagination_page((i - 1) * charsPerPageNum, char.length, pageSum, i, charList);
			} else {
				pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList);
			}
		}
	}
}

function addFilterPaginationClass(pageNum, pageSum) {
	let pagination_id = document.getElementById("pagination-id");

	if (!pagination_id.children.item(pageNum).classList.contains("checkedPagiantionBtn")) {
		for (i = 1; i <= pageSum; i++) {
			let currentItem = pagination_id.children.item(i);
			currentItem.classList.remove("checkedPagiantionBtn");
			currentItem.style.border = "1px solid #ddd";
		}
		let pageNumItem = pagination_id.children.item(pageNum);
		pageNumItem.classList.add("checkedPagiantionBtn");
		pageNumItem.style.border = "1px solid #4CAF50";
	}
}