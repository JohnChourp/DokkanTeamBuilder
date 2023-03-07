function createFilterPagination(charList) {
  const charContainer = document.getElementById("char-container-id");
  const paginationDiv = document.getElementById("pagination-id");
  const char = document.getElementsByClassName("char");

  let charsPerPageNum = localStorage.getItem("charsPerPageNumItem");
  const charLength = charList.length;
  const pageSum = Math.ceil(charLength / charsPerPageNum);
  const pagesLoaded = {};
  for (let i = 1; i <= pageSum; i++) {
    const pageKey = `page${i}`;
    pagesLoaded[pageKey] = false;
  }

  const fragment = document.createDocumentFragment();
  for (let i = charLength - 1; i >= 0; i--) {
    fragment.appendChild(charList[i]);
  }
  charContainer.innerHTML = "";
  charContainer.appendChild(fragment);

  paginationDiv.innerHTML = "";

  for (let i = 1; i <= pageSum; i++) {
    const page = document.createElement("a");
    page.onclick = () =>
      pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList, pagesLoaded);
    page.href = "#";
    page.setAttribute("draggable", "false");
    page.innerHTML = i;
    if (i === 1) {
      page.classList.add("checkedPaginationBtn");
    }
    paginationDiv.appendChild(page);
  }

  const pageResults = document.createElement("a");
  pageResults.href = "#";
  pageResults.style.cursor = "text";
  pageResults.style.backgroundColor = "transparent";
  pageResults.setAttribute("draggable", "false");
  pageResults.setAttribute("id", "charResults");

  if (char.length < charsPerPageNum) {
    pageResults.innerHTML = `Showing 1 to ${char.length} of ${char.length} Characters`;
  } else {
    pageResults.innerHTML = `Showing 1 to ${charsPerPageNum} of ${charList.length} Characters`;
  }
  paginationDiv.appendChild(pageResults);
  pagination_page(0, charsPerPageNum, pageSum, 0, charList, pagesLoaded);
}

function pagination_page(start, charsPerPageNum, pageSum, pageNum, charList, pagesLoaded) {
  const char_container_id = document.getElementById("char-container-id");
  const pagination_id = document.getElementById("pagination-id");
  const fragment = document.createDocumentFragment();
  let end;

  if (pageNum === pageSum) {
    end = charList.length;
  } else {
    end = charsPerPageNum;
  }
  for (let i = start; i < end; i++) {
    fragment.appendChild(charList[i]);
  }

  char_container_id.innerHTML = "";
  char_container_id.appendChild(fragment);
  pagination_id.children.item(pageSum).innerHTML = "Showing " + (start + 1) + " to " + end + " of " + charList.length + " Characters";
  const pageKeys = Object.keys(pagesLoaded);

  for (let i = 0; i < pagination_id.children.length; i++) {
    if (pagination_id.children.item(i).classList.contains("checkedPagiantionBtn")) {
      pagination_id.children.item(i).classList.remove("checkedPagiantionBtn");
      pagination_id.children.item(i).style.border = "1px solid #ddd";
    }
  }

  if (pagesLoaded[pageKeys[0]] == false) {
    pagesLoaded[pageKeys[0]] = true;
    const currentItem = pagination_id.children.item(pageNum);
    currentItem.classList.add("checkedPagiantionBtn");
    currentItem.style.border = "1px solid #4CAF50";
    if (pageNum == pageSum) {
      addChar(end - start);
    } else if (pageNum + 1 === pageSum) {
      addChar(charList.length);
    } else {
      addChar(localStorage.getItem("charsPerPageNumItem"));
    }
  }

  const currentItem = pagination_id.children.item(pageNum - 1);
  for (let i = 1; i < pageKeys.length + 1; i++) {
    if (pageNum == i && pagesLoaded[pageKeys[i - 1]] == false) {
      pagesLoaded[pageKeys[i - 1]] = true;
      currentItem.classList.add("checkedPagiantionBtn");
      currentItem.style.border = "1px solid #4CAF50";
      if (pageNum == pageSum) {
        addChar(end - start);
      } else {
        addChar(localStorage.getItem("charsPerPageNumItem"));
      }
    }
    if (
      pageNum == i &&
      !currentItem.classList.contains("checkedPagiantionBtn")
    ) {
      currentItem.classList.add("checkedPagiantionBtn");
      currentItem.style.border = "1px solid #4CAF50";
    }
  }

  if (pagination_id.children.length == 1) {
    pagination_id.children.item(0).innerHTML = "No Characters";
    pagination_id.children.item(0).classList.remove("checkedPagiantionBtn");
    pagination_id.children.item(0).style.border = "1px solid #ddd";
  }
  addDropdownClass(localStorage.getItem("filterDisplay"));
}
