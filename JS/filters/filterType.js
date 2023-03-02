function addType(typeFilter) {
  const element = document.getElementById(typeFilter);

  if (element.classList.contains("checkedTypeBtn")) {
    element.classList.remove("checkedTypeBtn");
    setButtonStylesType(
      element,
      "#6B6B67",
      "#555555",
      "linear-gradient(180deg, #B6B6B6, #948D87)"
    );
  } else {
    element.classList.add("checkedTypeBtn");
    setButtonStylesType(
      element,
      "#2DA9DD",
      "#1B79C3",
      "linear-gradient(180deg, #FFFFFF,#DBCEBD)"
    );
  }
}

function setButtonStylesType(element, bgColor1, bgColor2, bgImage) {
  element.children.item(0).style.backgroundColor = bgColor1;
  element.children.item(1).style.backgroundColor = bgColor2;
  element.children.item(8).style.backgroundImage = bgImage;
}

function filterType(type) {
  switch (type) {
    case "agl":
      addType("agl");
      break;
    case "teq":
      addType("teq");
      break;
    case "int":
      addType("int");
      break;
    case "str":
      addType("str");
      break;
    case "phy":
      addType("phy");
      break;
  }
}

function removeAllType() {
  const filterType = ["agl", "teq", "int", "str", "phy"];
  for (let i = 0; i < filterType.length; i++) {
    document.getElementById(filterType[i]).classList.remove("checkedTypeBtn");
    document
      .getElementById(filterType[i])
      .children.item(0).style.backgroundColor = "#6B6B67";
    document
      .getElementById(filterType[i])
      .children.item(1).style.backgroundColor = "#555555";
    document
      .getElementById(filterType[i])
      .children.item(8).style.backgroundImage =
      "linear-gradient(180deg, #B6B6B6, #948D87)";
  }
}
