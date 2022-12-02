const hover1 = document.querySelectorAll('.bw');

hover1.forEach(function(i) {
    i.addEventListener('mouseover', (event) => {
    event.target.style.filter = "grayscale(80%)";
    })
}
);

// const hover2 = document.getElementById("projects");
