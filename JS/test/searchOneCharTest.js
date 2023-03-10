function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function searchOneCharAllChars() {
    let charContainerId = document.getElementById("char-container-id");
    let searchOneCharDropdownValue = document.getElementsByClassName("search-one-char-dropdown-options-value");
    let charWithMostChars = 0, maxcharWithMostChars, allMostChars = [],
        selectedCharName = [],
        SortedSelectedCharName = [];

    let charList_dataCharNameItems = JSON.parse(localStorage.getItem("charList_dataCharNameItems"));
    let SortedFormattedcharList = removeDuplicates(charList_dataCharNameItems).sort();

    for (let i = 0; i < SortedFormattedcharList.length; i++) {
        addSearchOneCharDropdownClass(i);
        if (charContainerId.children.length == 0) {
            console.log("error in character name= " + i);
        }
        if (charContainerId.children.length > charWithMostChars) {
            charWithMostChars = charContainerId.children.length;
            maxcharWithMostChars = charWithMostChars;
        }
        allMostChars[i] = charContainerId.children.length;
        await sleep(1);
    }

    for (let i = 0; i < allMostChars.length; i++) {
        if (allMostChars[i] == maxcharWithMostChars) {
            selectedCharName[i] = searchOneCharDropdownValue.item(i).innerHTML;
        }
    }

    SortedSelectedCharName = removeDuplicates(selectedCharName).sort();
    console.log(maxcharWithMostChars);
    console.log(SortedSelectedCharName);
}
