function filterSuperAttackType(id) {
    const btn = document.getElementById(id);
    if (btn.classList.contains("checkedSuperAttackTypeBtn")) {
        btn.classList.remove("checkedSuperAttackTypeBtn");
        btn.style.backgroundColor = "#ddd";
    } else {
        btn.classList.add("checkedSuperAttackTypeBtn");
        btn.style.backgroundColor = "#33ccff";
    }
}

function filterSuperAttackTypeKiBlast() {
    filterSuperAttackType("ki-blast");
}

function filterSuperAttackTypeUnarmed() {
    filterSuperAttackType("unarmed");
}

function filterSuperAttackTypePhysical() {
    filterSuperAttackType("physical");
}

function filterSuperAttackTypeOther() {
    filterSuperAttackType("other");
}

function removeAllSuperAttackType() {
    const filterSuperAttackTypeId = ["ki-blast", "unarmed", "physical", "other"];
    const elements = filterSuperAttackTypeId.map(id => document.getElementById(id));

    elements.forEach(el => {
        el.classList.remove("checkedSuperAttackTypeBtn");
        el.style.backgroundColor = "#ddd";
        el.style.cursor = "pointer";
        el.style.color = "black";
        el.removeAttribute("disabled");
    });
}