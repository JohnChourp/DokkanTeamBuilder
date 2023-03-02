function addEza(ezaFilter) {
  const filterRarityId = ["n", "r", "sr", "ssr"];
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

    for (let i = 0; i < rarityEls.length; i++) {
      const el = rarityEls[i];
      el.style.cursor = "pointer";
      el.removeAttribute("disabled");
      el.children[0].style.backgroundColor = "#6B6B67";
      el.children[1].style.backgroundColor = "#555555";
      el.children[8].style.backgroundImage =
        "linear-gradient(180deg, #B6B6B6, #948D87)";
      el.classList.remove(checkedRarityClass);
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

    for (let i = 0; i < rarityEls.length; i++) {
      const el = rarityEls[i];
      el.style.cursor = "not-allowed";
      el.setAttribute("disabled", "enabled");
      el.children[0].style.backgroundColor = "#343A40";
      el.children[1].style.backgroundColor = "#343A40";
      el.children[8].style.backgroundImage =
        "linear-gradient(180deg, #FFFFFF,#DBCEBD)";
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
