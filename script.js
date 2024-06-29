const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});



window.onload = function() {
document.body.classList.add("dark");
}