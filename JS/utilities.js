function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

function create2DimensionalArray(rows, columns) {
    return Array(rows).fill().map(() => Array(columns).fill());
}

function cleanArray(arr, deleteValue) {
    return arr.filter((val) => val !== deleteValue);
}

function setAttributes(elem, ...attrs) {
    for (var i = 0; i < attrs.length; i += 2) {
        elem.setAttribute(attrs[i], attrs[i + 1]);
    }
}
