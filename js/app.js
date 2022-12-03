const hover1 = document.querySelectorAll('.bw');
const hover2 = document.querySelectorAll('.bw2');


hover1.forEach(function(i) {
    i.addEventListener('mouseover', (event) => {
    event.target.style.filter = "grayscale(80%)";
    setTimeout(() => {
        event.target.style.filter = "";
      }, 3000);
    });
}
);

hover2.forEach(function(i) {
  i.addEventListener('mouseover', (event) => {
  event.target.style.filter = "grayscale(80%)";
  setTimeout(() => {
      event.target.style.filter = "";
    }, 3000);
  });
}
);
