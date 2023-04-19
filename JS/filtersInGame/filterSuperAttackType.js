function filterSuperAttackType(id) {
    const btn = document.getElementById(id);
    const btnImg = document.getElementById("filter_super_attack_type_" + id + "-image-id");
    if (btn.classList.contains("checkedSuperAttackTypeBtn")) {
        btn.classList.remove("checkedSuperAttackTypeBtn");
        btnImg.src = "Images/char_filter/char_filter_super_attack_type/filter_super_attack_type_" +
            id + ".png";
    } else {
        btn.classList.add("checkedSuperAttackTypeBtn");
        btnImg.src = "Images/char_filter/char_filter_super_attack_type/filter_super_attack_type_" +
            id + "_checked.png";
    }
}

function filterSuperAttackTypeKiBlast() {
    filterSuperAttackType("ki-blast");
    checkFilterSuperAttackTypeUsed();
}

function filterSuperAttackTypeUnarmed() {
    filterSuperAttackType("unarmed");
    checkFilterSuperAttackTypeUsed();
}

function filterSuperAttackTypePhysical() {
    filterSuperAttackType("physical");
    checkFilterSuperAttackTypeUsed();
}

function filterSuperAttackTypeOther() {
    filterSuperAttackType("other");
    checkFilterSuperAttackTypeUsed();
}

function removeAllSuperAttackType() {
    const filterSuperAttackTypeId = ["ki-blast", "unarmed", "physical", "other"];
    const elements = filterSuperAttackTypeId.map((id) => document.getElementById(id));

    elements.forEach((el) => {
        el.classList.remove("checkedSuperAttackTypeBtn");
        el.style.cursor = "pointer";
        el.removeAttribute("disabled");
    });
    document.getElementById(filterSuperAttackTypeId[0]).src =
        "Images/char_filter/char_filter_super_attack_type/filter_super_attack_type_" +
        filterSuperAttackTypeId[0] + ".png";
    document.getElementById(filterSuperAttackTypeId[1]).src =
        "Images/char_filter/char_filter_super_attack_type/filter_super_attack_type_" +
        filterSuperAttackTypeId[1] + ".png";
    document.getElementById(filterSuperAttackTypeId[2]).src =
        "Images/char_filter/char_filter_super_attack_type/filter_super_attack_type_" +
        filterSuperAttackTypeId[2] + ".png";
    document.getElementById(filterSuperAttackTypeId[3]).src =
        "Images/char_filter/char_filter_super_attack_type/filter_super_attack_type_" +
        filterSuperAttackTypeId[3] + ".png";
}