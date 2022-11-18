const hover1 = document.getElementById("thumbnails");
const hover2 = document.getElementById("projects");

hover1.addEventListener('mouseover', (event) => {
    event.target.filter.grayscale = "100%";
})
