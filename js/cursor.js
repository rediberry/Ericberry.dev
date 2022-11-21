const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

document.addEventListener("mousedown", (e) => {
    cursor.classList.add("click");
});

document.addEventListener("mouseup", (e) => {
    cursor.classList.remove("click");
});
