function createFilterPagination(charList, charsPerPageNum) {
	const pagesLoaded = {
		page1: true, page2: false, page3: false, page4: false, page5: false,
		page6: false, page7: false, page8: false, page9: false, page10: false,
		page11: false, page12: false, page13: false, page14: false, page15: false,
		page16: false, page17: false, page18: false, page19: false, page20: false,
		page21: false, page22: false, page23: false, page24: false, page25: false,
		page26: false, page27: false, page28: false, page29: false, page30: false,
		page31: false, page32: false, page33: false, page34: false, page35: false,
		page36: false, page37: false, page38: false, page39: false, page40: false,
		page41: false, page42: false, page43: false, page44: false, page45: false,
		page46: false, page47: false, page48: false, page49: false, page50: false,
		page51: false, page52: false, page53: false, page54: false, page55: false,
		page56: false, page57: false, page58: false, page59: false, page60: false,
		page61: false, page62: false, page63: false, page64: false
	};
	const charContainer = document.getElementById("char-container-id");
	const paginationDiv = document.getElementById("pagination-id");
	const char = document.getElementsByClassName("char");
	const charLength = charList.length;
	const pageSum = Math.ceil(charLength / charsPerPageNum);
	const pagePrevious = document.createElement("a");
	const pageNext = document.createElement("a");
	const pageResults = document.createElement("a");

	const fragment = document.createDocumentFragment();
	for (let i = charLength - 1; i >= 0; i--) {
		fragment.appendChild(charList[i]);
	}
	charContainer.innerHTML = "";
	charContainer.appendChild(fragment);

	paginationDiv.innerHTML = "";

	pagePrevious.onclick = function () { paginationPrevious(pageSum, charsPerPageNum, charList, pagesLoaded); }
	pagePrevious.href = "#";
	pagePrevious.setAttribute("draggable", "false");
	pagePrevious.innerHTML = "&laquo;";
	paginationDiv.appendChild(pagePrevious);

	for (let i = 1; i <= pageSum; i++) {
		const page = document.createElement("a");
		page.onclick = () => pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList, pagesLoaded);
		page.href = "#";
		page.setAttribute("draggable", "false");
		page.innerHTML = i;
		if (i === 1) {
			page.classList.add("checkedPaginationBtn");
		}
		paginationDiv.appendChild(page);
	}

	pageNext.onclick = function () { paginationFilterNext(pageSum, charsPerPageNum, charList, pagesLoaded); }
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
		pagination_page(0, char.length, pageSum, 1, charList, pagesLoaded);
	} else {
		pageResults.innerHTML = `Showing 1 to ${charsPerPageNum} of ${charList.length} Characters`;
		paginationDiv.appendChild(pageResults);
		pagination_page(0, charsPerPageNum, pageSum, 1, charList, pagesLoaded);
	}
}

function createFilterPagination2(charList, charsPerPageNum) {
	const pagesLoaded = {
		page1: false, page2: false, page3: false, page4: false, page5: false,
		page6: false, page7: false, page8: false, page9: false, page10: false,
		page11: false, page12: false, page13: false, page14: false, page15: false,
		page16: false, page17: false, page18: false, page19: false, page20: false,
		page21: false, page22: false, page23: false, page24: false, page25: false,
		page26: false, page27: false, page28: false, page29: false, page30: false,
		page31: false, page32: false, page33: false, page34: false, page35: false,
		page36: false, page37: false, page38: false, page39: false, page40: false,
		page41: false, page42: false, page43: false, page44: false, page45: false,
		page46: false, page47: false, page48: false, page49: false, page50: false,
		page51: false, page52: false, page53: false, page54: false, page55: false,
		page56: false, page57: false, page58: false, page59: false, page60: false,
		page61: false, page62: false, page63: false, page64: false
	};
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

	pagePrevious.onclick = function () { paginationPrevious2(pageSum, charsPerPageNum, charList, pagesLoaded); }
	pagePrevious.href = "#";
	pagePrevious.setAttribute("draggable", "false");
	pagePrevious.innerHTML = "&laquo;";
	paginationDiv.appendChild(pagePrevious);

	for (let i = 1; i <= pageSum; i++) {
		const page = document.createElement("a");
		page.onclick = () => pagination_page2((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList, pagesLoaded);
		page.href = "#";
		page.setAttribute("draggable", "false");
		page.innerHTML = i;
		if (i === 1) {
			page.classList.add("checkedPaginationBtn");
		}
		paginationDiv.appendChild(page);
	}

	pageNext.onclick = function () { paginationFilterNext2(pageSum, charsPerPageNum, charList, pagesLoaded); }
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
		pagination_page2(0, char.length, pageSum, 1, charList, pagesLoaded);
	} else {
		pageResults.innerHTML = `Showing 1 to ${charsPerPageNum} of ${charList.length} Characters`;
		paginationDiv.appendChild(pageResults);
		pagination_page2(0, charsPerPageNum, pageSum, 1, charList, pagesLoaded);
	}
}

function pagination_page(start, end, pageSum, pageNum, charList, pagesLoaded) {
	const char_container_id = document.getElementById("char-container-id");
	const pagination_id = document.getElementById("pagination-id");

	const fragment = document.createDocumentFragment();
	end = (pageNum === pageSum) ? charList.length : end;
	for (let i = start; i < end; i++) {
		fragment.appendChild(charList[i]);
	}

	char_container_id.innerHTML = "";
	char_container_id.appendChild(fragment);

	pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + end + " of " + charList.length + " Characters";
	addFilterPaginationClass(pageNum, pageSum);

	const pageKeys = Object.keys(pagesLoaded);
	for (let i = 0; i < pageKeys.length + 1; i++) {
		if (pageNum == i) {
			const page = pageKeys[i - 1];
			if (!pagesLoaded[page]) {
				pagesLoaded[page] = true;
				if (pageNum == pageSum) {
					addChar(end - start);
				} else {
					addChar(localStorage.getItem("charsPerPageNumItem"));
				}
			}
		}
	}
	addDropdownClass(localStorage.getItem("filterDisplay"));
}

function pagination_page2(start, end, pageSum, pageNum, charList, pagesLoaded) {
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
	addFilterPaginationClass2(pageNum, pageSum);

	const pageKeys = Object.keys(pagesLoaded);
	for (let i = 0; i < pageKeys.length + 1; i++) {
		if (pageNum == i) {
			const page = pageKeys[i - 1];
			if (!pagesLoaded[page]) {
				pagesLoaded[page] = true;
				if (pageNum == pageSum) {
					addChar(end - start);
				} else {
					addChar(localStorage.getItem("charsPerPageNumItem"));
				}
			}
		}
	}
	if (pageNum == 1) {
		const page = pageKeys[0];
		if (!pagesLoaded[page]) {
			pagesLoaded[page] = true;
			if (pageNum == pageSum) {
				addChar(end - start);
			} else {
				addChar(localStorage.getItem("charsPerPageNumItem"));
			}
		}
	}
	addDropdownClass(localStorage.getItem("filterDisplay"));
}

function paginationPrevious(pageSum, charsPerPageNum, charList, pagesLoaded) {
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
			pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList, pagesLoaded);
		}
	}
}
function paginationFilterNext(pageSum, charsPerPageNum, charList, pagesLoaded) {
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
				pagination_page((i - 1) * charsPerPageNum, char.length, pageSum, i, charList, pagesLoaded);
			} else {
				pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList, pagesLoaded);
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

function paginationPrevious2(pageSum, charsPerPageNum, charList, pagesLoaded) {
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
			pagination_page2((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList, pagesLoaded);
		}
	}
}
function paginationFilterNext2(pageSum, charsPerPageNum, charList, pagesLoaded) {
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
				pagination_page2((i - 1) * charsPerPageNum, char.length, pageSum, i, charList, pagesLoaded);
			} else {
				pagination_page2((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList, pagesLoaded);
			}
		}
	}
}
function addFilterPaginationClass2(pageNum, pageSum) {
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