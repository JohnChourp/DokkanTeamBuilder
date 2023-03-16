function toggleDirection(direction) {
    const buttonDescending = document.getElementById("filter-direction-down-id");
    const buttonAscending = document.getElementById("filter-direction-up-id");

    if (direction === "down") {
        buttonDescending.classList.add("checkedDirectionBtn");
        buttonDescending.children.item(0).classList.add("checkedDescendingBtnInside");

        buttonAscending.classList.remove("checkedDirectionBtn");
        buttonAscending.children.item(0).classList.remove("checkedAscendingBtnInside");
    } else if (direction === "up") {
        buttonDescending.classList.remove("checkedDirectionBtn");
        buttonDescending.children.item(0).classList.remove("checkedDescendingBtnInside");

        buttonAscending.classList.add("checkedDirectionBtn");
        buttonAscending.children.item(0).classList.add("checkedAscendingBtnInside");
    }
}
