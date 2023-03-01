function addAllReleaseDatesNames() {
    const dropdowns = document.getElementsByClassName("search-before-eza-dropdown-options");
    dropdowns[0].innerHTML = "";

    // Add "All" option to dropdown
    addAllDropdownOptionRelease(0, "All", addSearchBeforeEzaDropdownClass);

    // Add character names to dropdown
    const charList = JSON.parse(localStorage.getItem("charList"));
    const uniqueCharRelease = removeDuplicates(charList.map(char => char.release));
    let releaseDateNotEzaList = [], releaseDateEzaList = [];
    for (let i = 0; i < uniqueCharRelease.length; i++) {
        if (uniqueCharRelease[i].length == 25) {
            releaseDateEzaList[i] = uniqueCharRelease[i].split(".");
        } else {
            releaseDateNotEzaList[i] = uniqueCharRelease[i];
        }
    }

    for (let i = 0; i < uniqueCharRelease.length; i++) {
        if (uniqueCharRelease[i].length == 25) {
            releaseDateEzaList[i] = uniqueCharRelease[i].split(".");
        } else {
            releaseDateNotEzaList[i] = uniqueCharRelease[i];
        }
    }
    releaseDateNotEzaList = removeDuplicates(releaseDateNotEzaList, undefined);
    releaseDateEzaList = removeDuplicates(releaseDateEzaList, undefined);
    let releaseDateNotEzaListFinal = [];
    for (let i = 1; i < releaseDateEzaList.length; i++) {
        let beforeEza = releaseDateEzaList[i][0];
        let afterEza = releaseDateEzaList[i][1];

        releaseDateNotEzaListFinal[releaseDateNotEzaList.length + (i * 2)] = beforeEza;
        releaseDateNotEzaListFinal[releaseDateNotEzaList.length + ((i * 2) + 1)] = afterEza;
    }
    releaseDateNotEzaListFinal = removeDuplicates(releaseDateNotEzaListFinal,undefined);
    releaseDateNotEzaListFinal.sort().slice(0, -1).forEach((charReleasePos, index) => {
        addAllDropdownOptionRelease(index + 1, charReleasePos, addSearchBeforeEzaDropdownClass);
    });

    function addAllDropdownOptionRelease(index, text, clickHandler) {
        const charListDiv = dropdowns[0];
        const option = document.createElement("a");
        option.classList.add("search-before-eza-dropdown-options-value");
        option.href = "#";
        option.innerHTML = text;
        option.onclick = function () {
            clickHandler(index, 2);
        };
        charListDiv.appendChild(option);
    }
}

function addSearchBeforeEzaDropdownClass(charReleasePos) {
    const searchOneCharDropdown_btn = document.getElementById("search-before-eza-id");
    const searchOneCharDropdownValue = document.getElementsByClassName("search-before-eza-dropdown-options-value");

    searchOneCharDropdown_btn.placeholder = searchOneCharDropdownValue.item(charReleasePos).innerHTML;
    searchOneCharDropdownValue.item(charReleasePos).classList.add("checkedSearchBeforeEzaBtn");

    for (let i = 0; i < searchOneCharDropdownValue.length; i++) {
        if (i != charReleasePos) {
            searchOneCharDropdownValue.item(i).classList.remove("checkedSearchBeforeEzaBtn");
        }
    }
}


function selectedBeforeEzaSearch() {
    const input = document.getElementById("search-before-eza-id");
    const filter = input.value.toLowerCase();
    const ui = document.getElementsByClassName("search-before-eza-dropdown-options-value");
    let uiArray = Array.from(ui);

    uiArray = uiArray.filter(el => el.textContent.toLowerCase().indexOf(filter) >= 0);
    uiArray.forEach(el => el.style.display = "block");
    uiArray = uiArray.map(el => el.textContent);

    const restOfUiArray = Array.from(ui).filter(el => uiArray.indexOf(el.textContent) < 0);
    restOfUiArray.forEach(el => el.style.display = "none");
}


function selectedAfterEzaSearch() {

}