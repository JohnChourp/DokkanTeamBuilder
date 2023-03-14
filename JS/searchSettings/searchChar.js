function searchChar() {
    const characterSearchId = document.getElementById("char-search-id");
    characterSearchId.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            setCharListTemp();

            const nameOrTitle = localStorage.getItem("nameOrTitle");
            const characterSearchId = document.getElementById("char-search-id");
            const char = document.getElementsByClassName("char");

            const dataCharTitle = "data-char-title", dataCharName = "data-char-name";               

            const dataCharNameItems = document.querySelectorAll("[" + dataCharName + "]");
            const dataCharTitleItems = document.querySelectorAll("[" + dataCharTitle + "]");

            //check if search titles is enabled
            let dataCharNameOrTitleItems = [],
                dataCharNameOrTitle = [];
            if (nameOrTitle == 1) {
                dataCharNameOrTitleItems = dataCharNameItems;
                dataCharNameOrTitle = dataCharName;
            }
            if (nameOrTitle == 2) {
                dataCharNameOrTitleItems = dataCharTitleItems;
                dataCharNameOrTitle = dataCharTitle;
            }

            //create list of filtered characters
            let charListDefault = [];
            for (let i = 0; i < char.length; i++) {
                if (dataCharNameOrTitleItems[i].getAttribute(dataCharNameOrTitle).toLowerCase().indexOf(characterSearchId.value.toLowerCase()) >= 0) {
                    charListDefault[i] = char.item(i);
                }
            }
            charListDefault = cleanArray(charListDefault, undefined);

            //create pagination
            createFilterPagination(charListDefault);
        }
    });
}
