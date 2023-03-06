function addEza(ezaFilter) {
  const filterRarityId = ["n", "r", "sr", "ssr","ur","lr"];
  const filterAwakenId = [
    "not-dokkan-awakened",
    "pre-dokkan-awakened",
    "dokkan-awakened",
  ];
  const ezaFilterEl = document.getElementById(ezaFilter);
  const awakenEls = filterAwakenId.map((id) => document.getElementById(id));
  const rarityEls = filterRarityId.map((id) => document.getElementById(id));
  const checkedEzaClass = "checkedEzaBtn";
  const checkedAwakenClass = "checkedAwakenBtn";
  const checkedRarityClass = "checkedRarityBtn";
  const checkedRarityBtnInsideClass = "checkedRarityBtnInside";
  const filterRarityContainerInside = "filter-rarity-container-inside";
  const disableRarityBtnInside = "disableRarityBtnInside";

  if (ezaFilterEl.classList.contains(checkedEzaClass)) {
    ezaFilterEl.classList.remove(checkedEzaClass);

    for (let i = 0; i < awakenEls.length; i++) {
      const el = awakenEls[i];
      el.style.backgroundColor = "#ddd";
      el.style.cursor = "pointer";
      el.style.color = "black";
      el.removeAttribute("disabled");
      el.classList.remove(checkedAwakenClass);
    }

    for (let i = 0; i < rarityEls.length-2; i++) {
      const el = rarityEls[i];
      el.style.cursor = "pointer";
      el.removeAttribute("disabled");
      el.children.item(0).classList.add(filterRarityContainerInside);
      el.children.item(0).classList.remove(disableRarityBtnInside);
    }
  } else {
    ezaFilterEl.classList.add(checkedEzaClass);

    for (let i = 0; i < awakenEls.length; i++) {
      const el = awakenEls[i];
      el.style.backgroundColor = "#343A40";
      el.style.cursor = "not-allowed";
      el.style.color = "#6C757D";
      el.setAttribute("disabled", "enabled");
    }

    for (let i = 0; i < rarityEls.length-2; i++) {
      const el = rarityEls[i];
      el.style.cursor = "not-allowed";
      el.setAttribute("disabled", "enabled");
      el.classList.remove(checkedRarityClass);
      el.children.item(0).classList.remove(checkedRarityBtnInsideClass);
      el.children.item(0).classList.remove(filterRarityContainerInside);
      el.children.item(0).classList.add(disableRarityBtnInside);
    }
  }
}

function addNoEza(ezaNoFilter) {
  const ezaNoFilterEl = document.getElementById(ezaNoFilter);
  ezaNoFilterEl.classList.toggle("checkedEzaBtn");
}

function removeAllEza() {
  const ezaEl = document.getElementById("eza");
  const noezaEl = document.getElementById("noeza");
  ezaEl.classList.remove("checkedEzaBtn");
  noezaEl.classList.remove("checkedEzaBtn");
}
