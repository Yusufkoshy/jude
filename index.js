var dialogToggle = document.querySelector('.dialog-toggle');

function preventSubmit(e) {
    e.preventDefault();
};

document.addEventListener("DOMContentLoaded", function () {
    var checkbox = document.getElementById("agreeCheckbox");
    var button = document.getElementById("submitBtn");

    checkbox.addEventListener("change", function () {
      button.disabled = !checkbox.checked;
    });
});