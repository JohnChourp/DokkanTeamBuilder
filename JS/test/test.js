function deviceWidthAndHeight() {
    let widthDevice = window.screen.width;
    let heighthDevice = window.screen.height;
    document.getElementById("test-device-id").innerHTML = "width device:" + widthDevice + "height device:" + heighthDevice;
    /* <div id="test-device-id"></div> */
}

function windowWidthAndHeight() {
    let widthWindow = window.innerWidth;
    let heighthWindow = window.innerHeight;
    document.getElementById("test-window-id").innerHTML = "width window:" + widthWindow + "height window:" + heighthWindow;
    /* <div id="test-window-id"></div> */
}

function mostLetterInNames() {
    let char = document.getElementsByClassName("char");
    let charList = [], maxLettersNamesLength = 0, maxLettersNames;
    let dataCharNames = "data-char-name";

    for (let i = 0; i < char.length; i++) {
        charList[i] = char.item(i).getAttribute(dataCharNames).split(",");
    }

    for (let i = 0; i < char.length; i++) {
        for (let j = 0; j < charList[i].length; j++) {
            if (charList[i][j].length > maxLettersNamesLength) {
                maxLettersNamesLength = charList[i][j].length;
                maxLettersNames = charList[i][j];
            }
        }
    }
    console.log(maxLettersNamesLength);
    console.log(maxLettersNames);
}

function mostLetterInLinks() {
    let char = document.getElementsByClassName("char");
    let charList = [], maxLettersLinksLength = 0, maxLettersLinks;
    let dataCharLinks = "data-char-links";

    for (let i = 0; i < char.length; i++) {
        charList[i] = char.item(i).getAttribute(dataCharLinks).split(",");
    }

    for (let i = 0; i < char.length; i++) {
        for (let j = 0; j < charList[i].length; j++) {
            if (charList[i][j].length > maxLettersLinksLength) {
                maxLettersLinksLength = charList[i][j].length;
                maxLettersLinks = charList[i][j];
            }
        }
    }
    console.log(maxLettersLinksLength);
    console.log(maxLettersLinks);
}

function mostLetterInCategories() {
    let char = document.getElementsByClassName("char");
    let charList = [], maxLettersCategoriesLength = 0, maxLettersCategories;
    let dataCharCategories = "data-char-categories";

    for (let i = 0; i < char.length; i++) {
        charList[i] = char.item(i).getAttribute(dataCharCategories).split(",");
    }

    for (let i = 0; i < char.length; i++) {
        for (let j = 0; j < charList[i].length; j++) {
            if (charList[i][j].length > maxLettersCategoriesLength) {
                maxLettersCategoriesLength = charList[i][j].length;
                maxLettersCategories = charList[i][j];
            }
        }
    }
    console.log(maxLettersCategoriesLength);
    console.log(maxLettersCategories);
}

function CheckIfAllStringAndNotSameTitle() {
    let char = document.getElementsByClassName("char");
    let charList = [], charListType = [], charListProblem = [];
    let dataCharTitle = "data-char-title";

    for (let i = 0; i < char.length; i++) {
        charList[i] = char.item(i).getAttribute(dataCharTitle);
    }

    for (let i = 0; i < charList.length; i++) {
        if (typeof charList[i] === 'string') {
            charListType[i] = charList[i];
        } else {
            charListProblem[i] = charList[i];
        }
    }

    console.log(charListType);
    console.log(charListType.length);
    console.log(charListProblem);
    console.log(charListProblem.length);

    checkDuplicates(charListType);
}

function CheckIfAllStringAndNotSameId() {
    let char = document.getElementsByClassName("char");
    let charList = [], charListType = [], charListProblem = [];
    let dataCharTitle = "data-char-id";

    for (let i = 0; i < char.length; i++) {
        charList[i] = char.item(i).getAttribute(dataCharTitle);
    }

    for (let i = 0; i < charList.length; i++) {
        if (typeof charList[i] === 'string') {
            charListType[i] = charList[i];
        } else {
            charListProblem[i] = charList[i];
        }
    }

    console.log(charListType);
    console.log(charListType.length);
    console.log(charListProblem);
    console.log(charListProblem.length);

    checkDuplicates(charListType);
}

function checkDuplicates(arr) {
    let duplicates = {};
    for (let i = 0; i < arr.length; i++) {
        if (duplicates[arr[i]] !== undefined) {
            console.log(`Duplicate found at positions ${duplicates[arr[i]]} and ${i}: ${arr[i]}`);
        } else {
            duplicates[arr[i]] = i;
        }
    }
}

function CheckIfNotHaveDataCharType() {
    let char = document.getElementsByClassName("char");
    let charList = [], charListProblem = [];
    let dataChar = "data-char-max-level";

    for (let i = 0; i < char.length; i++) {
        if (typeof char.item(i).getAttribute(dataChar) === 'string') {
            charList[i] = char.item(i).getAttribute(dataChar);
        } else {
            charListProblem[i] = char.item(i);
        }
    }
    console.log(charList);
    console.log(charListProblem);
}

function CheckIfDuplicateDataCharAtribute() {
    const divs = document.querySelectorAll('.char');
    let count = 0;

    divs.forEach(div => {
        let maxLevelCount = 0;
        div.getAttributeNames().forEach(attr => {
            if (attr === 'data-char-recruit') {
                maxLevelCount++;
            }
        });
        if (maxLevelCount >= 2) {
            count++;
        }
    });

    if (count === 1) {
        console.log('The "data-char-max-level" attribute appears twice in exactly one div.');
    } else {
        console.log(`The "data-char-max-level" attribute appears twice in ${count} divs.`);
    }
}

function CheckIfCharContainerClean() {
    const parentDiv = document.querySelector('#char-container-id');

    // Remove div elements with class "char"
    parentDiv.querySelectorAll('div.char').forEach(div => {
        div.remove();
    });

    // Show everything that is left inside the parent div
    const remainingContent = parentDiv.innerHTML;

    // Create a new window to display the remaining content
    const newWindow = window.open();
    newWindow.document.write(`<html><body>${remainingContent}</body></html>`);
}

function releaseDateTest() {
    const dataCharRelease = "data-char-release";
    const charContainerId = document.getElementById("char-container-id");
    const char = document.getElementsByClassName("char");
    const sortReleased = document.getElementById("sort-released");

    if (sortReleased.classList.contains("checkedSortBtn")) {
        const dataCharReleaseItems = document.querySelectorAll("[" + dataCharRelease + "]");
        let temp_char = [];
        for (let i = 0; i < char.length; i++) {
            temp_char[i] = char.item(i);
        }
        const charLength = char.length;
        charContainerId.innerHTML = "";
        for (let i = 0; i < charLength; i++) {
            if (dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2023" &&
                dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2022" &&
                dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2021" &&
                dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2020" &&
                dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2019" &&
                dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2018" &&
                dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2017" &&
                dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2016" &&
                dataCharReleaseItems[i].getAttribute(dataCharRelease).slice(-4) != "2015") {
                console.log(temp_char[i]);
            }
        }
    }
}

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