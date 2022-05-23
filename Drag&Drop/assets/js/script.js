const circles = document.querySelectorAll(".circle");
const areas = document.querySelectorAll(".area");


circles.forEach((circle) => {
    circle.addEventListener("dragstart", function (ev) {
        ev.dataTransfer.setData("item", this.getAttribute("data-id"));
        ev.dataTransfer.setData("startPointX", ev.offsetX);
        ev.dataTransfer.setData("startPointY", ev.offsetY);
        this.classList.toggle("hideIt")

    });
})



areas.forEach((area) => {
    area.addEventListener("dragover", function (ev) {
        ev.preventDefault();
    });
    area.addEventListener("drop", function (ev) {
        const itemId = ev.dataTransfer.getData("item");
        const item = document.querySelector(`[data-id="${itemId}"] `);
        item.classList.add("positionAbsolute")
        const innerLeft = ev.offsetX;
        const innerTop = ev.offsetY;

     const startPointX=ev.dataTransfer.getData("startPointX");
    const startPointY=ev.dataTransfer.getData("startPointY");
        item.style.top = `${innerTop -startPointY}px`;
        item.style.left = `${innerLeft-startPointX}px`;
        this.appendChild(item);
        item.classList.toggle("hideIt")

    });
});
