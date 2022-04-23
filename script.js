var textarea;
const reg = new RegExp("[\r\n]", "gm");
const reg2 = new RegExp("(:[0-9]{2}),", "gm");

window.onload = function() {
    textarea = document.getElementById("history");
}

function formatHistory() {
    console.log(textarea.value);
    var history = textarea.value.replace(reg, ",");
    history = history.replace(reg2, "$1\n");
    textarea.value = history + "\n";
}

function copyToCP() {
    navigator.clipboard.writeText(textarea.value);
}