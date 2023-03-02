function charsPerPageInput() {
  const charsPerPageIdTypeBox = document.getElementById(
    "characters-per-input-page-id"
  );
  charsPerPageIdTypeBox.value = localStorage.getItem("charsPerPageNumItem");

  const charsPerPage_class = document.getElementsByClassName("charsPerPage");

  for (let i = 0; i < charsPerPage_class.length; i++) {
    charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
  }

  switch (charsPerPageIdTypeBox.value) {
    case "16":
      charsPerPage_class.item(0).classList.add("checkedCharsPerPageBtn");
      break;
    case "32":
      charsPerPage_class.item(1).classList.add("checkedCharsPerPageBtn");
      break;
    case "64":
      charsPerPage_class.item(2).classList.add("checkedCharsPerPageBtn");
      break;
    case "128":
      charsPerPage_class.item(3).classList.add("checkedCharsPerPageBtn");
      break;
    case "256":
      charsPerPage_class.item(4).classList.add("checkedCharsPerPageBtn");
      break;
    default:
      break;
  }

  charsPerPageIdTypeBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      if (charsPerPageIdTypeBox.value.length > 0) {
        const inputValue = parseInt(charsPerPageIdTypeBox.value);
        localStorage.setItem("charsPerPageNumItem", inputValue);
        for (let i = 0; i < charsPerPage_class.length; i++) {
          charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
        }
        applyFilters();
      }
    }
  });
}

function charsPerPage(charsPerPageBtn) {
  const charsPerPage_class = document.getElementsByClassName("charsPerPage");
  const charsPerPageNum = Math.pow(2, charsPerPageBtn) * 16;
  const charsPerPageIdTypeBox = document.getElementById(
    "characters-per-input-page-id"
  );

  charsPerPageIdTypeBox.value = charsPerPageNum;

  charsPerPage_class
    .item(charsPerPageBtn)
    .classList.add("checkedCharsPerPageBtn");
  localStorage.setItem("charsPerPageNumItem", charsPerPageNum);
  for (let i = 0; i < charsPerPage_class.length; i++) {
    if (i != charsPerPageBtn) {
      charsPerPage_class.item(i).classList.remove("checkedCharsPerPageBtn");
    }
  }
  applyFilters();
}
