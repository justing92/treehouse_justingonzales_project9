const hover1 = document.querySelectorAll('#bw');
const hover2 = document.getElementById("projects");

hover1.forEach(addEventListener('mouseover', (event) => {
    event.target.style.filter = "grayscale(80%)";
}))
