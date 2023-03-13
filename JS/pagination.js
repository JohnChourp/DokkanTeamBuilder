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
        if (i == 2) {
            const pageNotClickable = document.createElement("a");
            pageNotClickable.href = "#";
            pageNotClickable.setAttribute("draggable", "false");
            pageNotClickable.setAttribute("disabled", "enabled");
            pageNotClickable.innerHTML = "...";
            pageNotClickable.style.cursor = "not-allowed";
            pageNotClickable.style.backgroundColor = "#22262a";
            pageNotClickable.classList.add("hidePaginationBtn");
            paginationDiv.appendChild(pageNotClickable);
        }
        if (i == pageSum) {
            const pageNotClickable = document.createElement("a");
            pageNotClickable.href = "#";
            pageNotClickable.setAttribute("draggable", "false");
            pageNotClickable.setAttribute("disabled", "enabled");
            pageNotClickable.innerHTML = "...";
            pageNotClickable.style.cursor = "not-allowed";
            pageNotClickable.style.backgroundColor = "#22262a";
            paginationDiv.appendChild(pageNotClickable);
        }
        const pageNotClickable = document.createElement("a");
        pageNotClickable.setAttribute("draggable", "false");
        pageNotClickable.href = "#";
        pageNotClickable.onclick = () =>
            pagination_page((i - 1) * charsPerPageNum, i * charsPerPageNum, pageSum, i, charList, pagesLoaded);
        pageNotClickable.innerHTML = i;
        pageNotClickable.classList.add("hidePaginationBtn");
        paginationDiv.appendChild(pageNotClickable);
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

    const paginationDivLength = paginationDiv.children.length;
    for (let i = 0; i < paginationDivLength; i++) {
        if (i > -1 && i < 11 && i != 1) {
            paginationDiv.children.item(i).classList.remove("hidePaginationBtn");
        }
        if (i == paginationDivLength - 2) {
            paginationDiv.children.item(i).classList.remove("hidePaginationBtn");
        }
    }
    pagination_page(0, charsPerPageNum, pageSum, 0, charList, pagesLoaded);
}

function pagination_page(start, charsPerPageNum, pageSum, pageNum, charList, pagesLoaded) {
    const char_container_id = document.getElementById("char-container-id");
    const pagination_id = document.getElementById("pagination-id");
    const fragment = document.createDocumentFragment();
    let end;
    if (pageNum === pageSum) {
        end = charList.length;
    } else if (pageSum === 1) {
        end = charList.length;
    } else {
        end = charsPerPageNum;
    }
    for (let i = start; i < end; i++) {
        fragment.appendChild(charList[i]);
    }

    char_container_id.innerHTML = "";
    char_container_id.appendChild(fragment);
    if (pageSum > 12) {
        pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + end + " of " + charList.length + " Characters";
    } else if (pageSum < 12 && pageSum != 1) {
        pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + end + " of " + charList.length + " Characters";
    } else if (pageSum == 12) {
        pagination_id.children.item(pageSum + 2).innerHTML = "Showing " + (start + 1) + " to " + end + " of " + charList.length + " Characters";
    } else {
        pagination_id.children.item(pageSum + 1).innerHTML = "Showing " + (start + 1) + " to " + end + " of " + charList.length + " Characters";
    }
    const pageKeys = Object.keys(pagesLoaded);

    for (let i = 0; i < pagination_id.children.length; i++) {
        if (pagination_id.children.item(i).classList.contains("checkedPagiantionBtn")) {
            pagination_id.children.item(i).classList.remove("checkedPagiantionBtn");
            pagination_id.children.item(i).style.border = "1px solid #ddd";
        }
    }

    if (pagesLoaded[pageKeys[0]] == false) {
        pagesLoaded[pageKeys[0]] = true;
        if (pageNum == pageSum) {
            addChar(end - start);
        } else if (pageNum + 1 === pageSum) {
            addChar(charList.length);
        } else {
            addChar(localStorage.getItem("charsPerPageNumItem"));
        }
    }
    const paginationDivLength = pagination_id.children.length;
    if (pageNum == 1) {
        const currentItem = pagination_id.children.item(pageNum - 1);
        currentItem.classList.add("checkedPagiantionBtn");
        currentItem.style.border = "1px solid #4CAF50";
    } else if (pageNum == paginationDivLength - 3) {
        const currentItem = pagination_id.children.item(pageNum + 1);
        currentItem.classList.add("checkedPagiantionBtn");
        currentItem.style.border = "1px solid #4CAF50";
    } else {
        const currentItem = pagination_id.children.item(pageNum);
        currentItem.classList.add("checkedPagiantionBtn");
        currentItem.style.border = "1px solid #4CAF50";
    }

    for (let i = 1; i < pageKeys.length + 1; i++) {
        if (pageNum == i && pagesLoaded[pageKeys[i - 1]] == false) {
            pagesLoaded[pageKeys[i - 1]] = true;
            if (pageNum == pageSum) {
                addChar(end - start);
            } else {
                addChar(localStorage.getItem("charsPerPageNumItem"));
            }
        }

    }

    if (pagination_id.children.length == 1) {
        pagination_id.children.item(0).innerHTML = "No Characters";
        pagination_id.children.item(0).classList.remove("checkedPagiantionBtn");
        pagination_id.children.item(0).style.border = "1px solid #ddd";
    }
    addDropdownClass(localStorage.getItem("filterDisplay"));

    addHidePaginationPages(pageSum, pageNum, pagination_id);

}

function addHidePaginationPages(pageSum, pageNum, pagination_id) {
    const paginationDivLength = pagination_id.children.length;
    if (pageSum > 12) {
        //first page click
        if (pageNum == 1) {
            for (let i = 0; i < paginationDivLength; i++) {
                pagination_id.children.item(i).classList.add("hidePaginationBtn");
                if (i > -1 && i < 11 && i != 1 || i == paginationDivLength - 3 || i == paginationDivLength - 2 || i == paginationDivLength - 1) {
                    pagination_id.children.item(i).classList.remove("hidePaginationBtn");
                }
            }
        }

        if (pageNum == 4) {
            pagination_id.children.item(1).classList.add("hidePaginationBtn");
            pagination_id.children.item(2).classList.remove("hidePaginationBtn");
            pagination_id.children.item(3).classList.remove("hidePaginationBtn");

            pagination_id.children.item(11).classList.add("hidePaginationBtn");
            pagination_id.children.item(12).classList.add("hidePaginationBtn");
        }

        if (pageNum == 10) {
            pagination_id.children.item(1).classList.remove("hidePaginationBtn");
            pagination_id.children.item(2).classList.add("hidePaginationBtn");
            pagination_id.children.item(3).classList.add("hidePaginationBtn");

            pagination_id.children.item(11).classList.remove("hidePaginationBtn");
            pagination_id.children.item(12).classList.remove("hidePaginationBtn");
        }

        //find if sum of pages are odd or even number
        let paginationDivLengthEvenOrOdd = 0;
        if (paginationDivLength % 2 === 0) {
            //even
            paginationDivLengthEvenOrOdd = 7;
        } else {
            //odd
            paginationDivLengthEvenOrOdd = 6;
        }
        //odd
        if (paginationDivLengthEvenOrOdd == 6) {
            //-----------------ascending pages-----------------
            for (let i = 12; i < paginationDivLength - paginationDivLengthEvenOrOdd; i += 2) {
                if (pageNum == i) {
                    pagination_id.children.item(i - 8).classList.add("hidePaginationBtn");
                    pagination_id.children.item(i - 7).classList.add("hidePaginationBtn");

                    pagination_id.children.item(i + 1).classList.remove("hidePaginationBtn");
                    pagination_id.children.item(i + 2).classList.remove("hidePaginationBtn");
                }
            }
            //lastPageToShowHidePages
            let lastPageToShowHideAscending = paginationDivLength - paginationDivLengthEvenOrOdd + 1;
            if (pageNum == lastPageToShowHideAscending) {
                pagination_id.children.item(lastPageToShowHideAscending + 2).classList.add("hidePaginationBtn");
                pagination_id.children.item(lastPageToShowHideAscending + 1).classList.remove("hidePaginationBtn");

                pagination_id.children.item(lastPageToShowHideAscending - 7).classList.add("hidePaginationBtn");
                pagination_id.children.item(lastPageToShowHideAscending - 8).classList.add("hidePaginationBtn");
            }
            //-----------------ascending pages-----------------

            //-----------------descending pages-----------------
            let pageLengthInBetweenPages = paginationDivLength - paginationDivLengthEvenOrOdd * 2 - 1;
            for (let i = pageLengthInBetweenPages; i > 4; i -= 2) {
                if (pageNum == i) {
                    pagination_id.children.item(i + 8).classList.add("hidePaginationBtn");
                    pagination_id.children.item(i + 7).classList.add("hidePaginationBtn");

                    pagination_id.children.item(i - 1).classList.remove("hidePaginationBtn");
                    pagination_id.children.item(i - 2).classList.remove("hidePaginationBtn");
                }
            }
            //lastPageToShowHidePages
            let lastPageToShowHideDescending = paginationDivLength - paginationDivLengthEvenOrOdd * 2 + 1;
            if (pageNum == lastPageToShowHideDescending) {
                pagination_id.children.item(lastPageToShowHideDescending + 7).classList.add("hidePaginationBtn");
                pagination_id.children.item(lastPageToShowHideDescending + 8).classList.remove("hidePaginationBtn");

                pagination_id.children.item(lastPageToShowHideDescending - 1).classList.remove("hidePaginationBtn");
                pagination_id.children.item(lastPageToShowHideDescending - 2).classList.remove("hidePaginationBtn");
            }
            //-----------------descending pages-----------------
            //last page click
            if (pageNum == paginationDivLength - 3) {
                for (let i = 0; i < paginationDivLength; i++) {
                    pagination_id.children.item(i).classList.add("hidePaginationBtn");
                    if (i > paginationDivLength - 12 && i < paginationDivLength && i != paginationDivLength - 3 || i == 1 || i == 0) {
                        pagination_id.children.item(i).classList.remove("hidePaginationBtn");
                    }
                }
            }
        }
        //even
        if (paginationDivLengthEvenOrOdd == 7) {
            //-----------------ascending pages-----------------
            for (let i = 12; i < paginationDivLength - paginationDivLengthEvenOrOdd; i += 2) {
                if (pageNum == i) {
                    pagination_id.children.item(i - 8).classList.add("hidePaginationBtn");
                    pagination_id.children.item(i - 7).classList.add("hidePaginationBtn");

                    pagination_id.children.item(i + 1).classList.remove("hidePaginationBtn");
                    pagination_id.children.item(i + 2).classList.remove("hidePaginationBtn");
                }
            }
            //lastPageToShowHidePages
            let lastPageToShowHideAscending = paginationDivLength - paginationDivLengthEvenOrOdd + 1;
            if (pageNum == lastPageToShowHideAscending) {
                pagination_id.children.item(lastPageToShowHideAscending + 3).classList.add("hidePaginationBtn");

                pagination_id.children.item(lastPageToShowHideAscending + 1).classList.remove("hidePaginationBtn");
                pagination_id.children.item(lastPageToShowHideAscending + 2).classList.remove("hidePaginationBtn");

                pagination_id.children.item(lastPageToShowHideAscending - 7).classList.add("hidePaginationBtn");
                pagination_id.children.item(lastPageToShowHideAscending - 8).classList.add("hidePaginationBtn");
            }
            //-----------------ascending pages-----------------

            //-----------------descending pages-----------------
            let pageLengthInBetweenPages = paginationDivLength - paginationDivLengthEvenOrOdd * 2;
            for (let i = pageLengthInBetweenPages; i > 4; i -= 2) {
                if (pageNum == i) {
                    pagination_id.children.item(i + 8).classList.add("hidePaginationBtn");
                    pagination_id.children.item(i + 7).classList.add("hidePaginationBtn");

                    pagination_id.children.item(i - 1).classList.remove("hidePaginationBtn");
                    pagination_id.children.item(i - 2).classList.remove("hidePaginationBtn");
                }
            }
            //lastPageToShowHidePages
            let lastPageToShowHideDescending = paginationDivLength - paginationDivLengthEvenOrOdd * 2 + 2;
            console.log(lastPageToShowHideDescending);
            if (pageNum == lastPageToShowHideDescending) {
                console.log(pagination_id.children.item(lastPageToShowHideDescending + 7));
                console.log(pagination_id.children.item(lastPageToShowHideDescending + 8));
                pagination_id.children.item(lastPageToShowHideDescending + 9).classList.remove("hidePaginationBtn");

                pagination_id.children.item(lastPageToShowHideDescending + 7).classList.add("hidePaginationBtn");
                pagination_id.children.item(lastPageToShowHideDescending + 8).classList.add("hidePaginationBtn");

                pagination_id.children.item(lastPageToShowHideDescending - 1).classList.remove("hidePaginationBtn");
                pagination_id.children.item(lastPageToShowHideDescending - 2).classList.remove("hidePaginationBtn");
            }
            //-----------------descending pages-----------------
            //last page click
            if (pageNum == paginationDivLength - 3) {
                for (let i = 0; i < paginationDivLength; i++) {
                    pagination_id.children.item(i).classList.add("hidePaginationBtn");
                    if (i > paginationDivLength - 13 && i < paginationDivLength && i != paginationDivLength - 3 || i == 1 || i == 0) {
                        pagination_id.children.item(i).classList.remove("hidePaginationBtn");
                    }
                }
            }
        }
    }
    //only one page
    if (pageSum == 1) {
        for (let i = 0; i < paginationDivLength; i++) {
            pagination_id.children.item(i).classList.remove("hidePaginationBtn");
            if (i == 0) {
                pagination_id.children.item(i).classList.add("hidePaginationBtn");
            }
        }
    }
    //pages are 12
    if(pageSum == 12){
        for (let i = 0; i < paginationDivLength; i++) {
            pagination_id.children.item(i).classList.remove("hidePaginationBtn");
            if (i == 1 || i == paginationDivLength - 3) {
                pagination_id.children.item(i).classList.add("hidePaginationBtn");
            }
        }
    }

    //pages are less that 13
    if (pageSum > 1 && pageSum < 12) {
        for (let i = 0; i < paginationDivLength; i++) {
            pagination_id.children.item(i).classList.remove("hidePaginationBtn");
            if (i == 1 || i == paginationDivLength - 3) {
                pagination_id.children.item(i).classList.add("hidePaginationBtn");
            }
        }
    }
}
