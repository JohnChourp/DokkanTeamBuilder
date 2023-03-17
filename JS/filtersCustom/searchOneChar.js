function addOnlyFilteredCharNames(charList) {
    const dropdowns = document.getElementsByClassName("search-one-char-dropdown-options");
    const searchOneCharMenuId = document.getElementById("search-one-char-menu-id");
    const searchOneCharDropdownValue = document.getElementsByClassName("search-one-char-dropdown-options-value");
    dropdowns[0].innerHTML = "";

    const chars = [];
    charList.forEach((element) => {
        const char = {
            name: element.getAttribute("data-char-name"),
        };
        chars.push(char);
    });

    // Add "All" option to dropdown
    addAllDropdownOptionOneChar("All", addSearchOneCharPlaceHolder, 0);

    // Add character names to dropdown

    const uniqueCharNames = removeDuplicates(chars.map((char) => char.name));
    uniqueCharNames.sort().forEach((charName, index) => {
        addAllDropdownOptionOneChar(charName, addSearchOneCharPlaceHolder, index + 1);
    });

    function addAllDropdownOptionOneChar(text, clickHandler, index) {
        const charListDiv = dropdowns[0];
        const option = document.createElement("a");
        option.classList.add("search-one-char-dropdown-options-value");
        if (index == 0) {
            option.classList.add("checkedSearchOneCharBtn");
        }
        option.href = "#";
        option.innerHTML = text;
        option.onclick = function () {
            clickHandler(text, searchOneCharMenuId, searchOneCharDropdownValue, index);
        };
        charListDiv.appendChild(option);
    }
}

function addSearchOneCharPlaceHolder(text, searchOneCharMenuId, searchOneCharDropdownValue, charNamePos) {
    searchOneCharMenuId.placeholder = text;
    for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
        if (i != charNamePos) {
            searchOneCharDropdownValue.item(i).classList.remove("checkedSearchOneCharBtn");
        }
    }
    searchOneCharDropdownValue.item(charNamePos).classList.add("checkedSearchOneCharBtn");
    document.getElementsByClassName("filter-remove-all-container-inside").item(0).classList.add("checkedRemoveAllBtnInside");
}

function addSearchOneCharDropdownClass(charNamePos, charListDefault) {
    const searchOneCharMenuId_btn = document.getElementById("search-one-char-menu-id");
    const searchOneCharDropdownValue = document.getElementsByClassName("search-one-char-dropdown-options-value");

    searchOneCharMenuId_btn.placeholder = searchOneCharDropdownValue.item(charNamePos).innerHTML;
    searchOneCharDropdownValue.item(charNamePos).classList.add("checkedSearchOneCharBtn");

    for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
        if (i != charNamePos) {
            searchOneCharDropdownValue.item(i).classList.remove("checkedSearchOneCharBtn");
        }
    }

    const selectedCharName = searchOneCharDropdownValue.item(charNamePos).innerHTML;
    let charListDefault_NameItems = [];
    for (let i = 0; i < charListDefault.length; i++) {
        charListDefault_NameItems[i] = charListDefault[i].getAttribute("data-char-name");
    }

    const tempPos = selectedCharName.indexOf("&");
    const tempPos2 = selectedCharName.indexOf("&", tempPos + 1);
    let charListDefaultReturn = [];

    if (charNamePos > 0) {
        if (tempPos2 == -1) {
            if (tempPos == -1) {
                for (let j = 0; j < charListDefault.length; j++) {
                    temp = charListDefault_NameItems[j];
                    if (temp == selectedCharName) {
                        charListDefaultReturn[j] = charListDefault[j];
                    }
                }
            } else {
                for (let j = 0; j < charListDefault.length; j++) {
                    temp = charListDefault_NameItems[j];
                    temp = temp.split("");
                    temp[tempPos] = "&amp;";
                    temp = temp.join("");

                    if (temp == selectedCharName) {
                        charListDefaultReturn[j] = charListDefault[j];
                    }
                }
            }
        } else {
            for (let j = 0; j < charListDefault.length; j++) {
                temp = charListDefault_NameItems[j];
                temp = temp.split("");
                temp[tempPos] = "&amp;";
                temp = temp.join("");

                temp2 = temp;
                temp2 = temp2.split("");
                temp2[tempPos2] = "&amp;";
                temp2 = temp2.join("");

                if (temp2 == selectedCharName) {
                    charListDefaultReturn[j] = charListDefault[j];
                }
            }
        }
    } else {
        for (let j = 0; j < charListDefault.length; j++) {
            charListDefaultReturn[j] = charListDefault[j];
        }
    }
    return cleanArray(charListDefaultReturn);
}

function selectedCharNameSearch() {
    const input = document.getElementById("search-one-char-menu-id");
    const filter = input.value.toLowerCase();
    const ui = document.getElementsByClassName("search-one-char-dropdown-options-value");
    let uiArray = Array.from(ui);

    uiArray = uiArray.filter((el) => el.textContent.toLowerCase().indexOf(filter) >= 0);
    uiArray.forEach((el) => (el.style.display = "block"));
    uiArray = uiArray.map((el) => el.textContent);

    const restOfUiArray = Array.from(ui).filter((el) => uiArray.indexOf(el.textContent) < 0);
    restOfUiArray.forEach((el) => (el.style.display = "none"));
}

function selectedCategoryNameSearch() {
    const input = document.getElementById("search-one-category-menu-id");
    const filter = input.value.toLowerCase();
    const ui = document.getElementsByClassName("filter-category-container-categories");
    let uiArray = Array.from(ui);

    uiArray = uiArray.filter((el) => el.textContent.toLowerCase().indexOf(filter) >= 0);
    uiArray.forEach((el) => (el.style.display = "block"));
    uiArray = uiArray.map((el) => el.textContent);

    const restOfUiArray = Array.from(ui).filter((el) => uiArray.indexOf(el.textContent) < 0);
    restOfUiArray.forEach((el) => (el.style.display = "none"));
}
