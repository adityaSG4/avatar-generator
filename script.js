let text = document.getElementById("inputTexts");
let btn = document.getElementById("enterBtn");

btn.onclick = function() {
    if (text.value === '') {
        alert("Enter name");
    } else {
        let img = document.getElementById("imagex");
        img.setAttribute('src', `https://joesch.moe/api/v1/${text.value.toLowerCase()}`);
    }
}